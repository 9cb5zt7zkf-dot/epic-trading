import { NextResponse } from "next/server";
import { validateEnquiry } from "@/lib/enquiry/validate";
import { generateReference } from "@/lib/enquiry/reference";
import { notifySalesTeam, confirmToCustomer } from "@/lib/enquiry/resend";

export const runtime = "nodejs";

function sanitizeForLog(body: Record<string, unknown>) {
  const clone = { ...body };
  if (Array.isArray(clone.attachments)) {
    clone.attachments = (clone.attachments as Array<{ name?: string; dataBase64?: string }>).map((f) => ({
      name: f?.name,
      size: f?.dataBase64 ? Math.floor(f.dataBase64.length * 0.75) : null,
    }));
  }
  return clone;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, errors: ["Request body could not be parsed as JSON."] }, { status: 400 });
  }

  const { valid, errors, honeypotTripped } = validateEnquiry(body);

  if (honeypotTripped) {
    // Silent bot drop: no processing, no delivery attempt, no fabricated reference.
    return NextResponse.json({ ok: true, referenceNumber: null, delivered: {} }, { status: 200 });
  }

  if (!valid) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const referenceNumber = generateReference();
  const submittedAt = new Date().toISOString();

  // Baseline durable record — always happens, visible in Vercel's function
  // logs, regardless of whether Resend is configured.
  // eslint-disable-next-line no-console
  console.log("EPIC_TRADE_ENQUIRY", JSON.stringify({ referenceNumber, submittedAt, enquiry: sanitizeForLog(body) }));

  const [salesResult, customerResult] = await Promise.allSettled([
    notifySalesTeam(body, { referenceNumber, submittedAt }),
    confirmToCustomer(body, { referenceNumber }),
  ]);

  function unwrap(settled: PromiseSettledResult<{ ok: boolean; skipped: boolean; reason?: string }>) {
    if (settled.status === "fulfilled") return settled.value;
    return { ok: false, skipped: false, reason: settled.reason instanceof Error ? settled.reason.message : String(settled.reason) };
  }

  const delivered = {
    salesEmail: unwrap(salesResult),
    customerEmail: unwrap(customerResult),
  };

  return NextResponse.json({ ok: true, referenceNumber, submittedAt, delivered }, { status: 200 });
}
