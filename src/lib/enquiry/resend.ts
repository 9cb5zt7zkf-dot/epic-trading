// Optional email delivery via Resend's HTTP API — no SDK dependency, uses
// global fetch. Both functions no-op honestly (skipped: true, with the
// specific missing env var names) until RESEND_API_KEY / RESEND_FROM_EMAIL /
// SALES_TEAM_EMAIL are configured in the deployment environment. See
// README.md for setup.

type DeliveryResult = { ok: boolean; skipped: boolean; reason?: string };

function escapeHtml(str: unknown): string {
  return String(str ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}

async function sendViaResend(opts: { apiKey: string; from: string; to: string; subject: string; html: string }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${opts.apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: opts.from, to: opts.to, subject: opts.subject, html: opts.html }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Resend API error ${res.status}: ${body.message ?? JSON.stringify(body)}`);
  return body;
}

export async function notifySalesTeam(
  payload: Record<string, unknown>,
  meta: { referenceNumber: string; submittedAt: string }
): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.SALES_TEAM_EMAIL;
  const missing = [!apiKey && "RESEND_API_KEY", !from && "RESEND_FROM_EMAIL", !to && "SALES_TEAM_EMAIL"].filter(Boolean);
  if (missing.length) return { ok: false, skipped: true, reason: `Missing environment variables: ${missing.join(", ")}` };

  const rows = Object.entries(payload)
    .filter(([k, v]) => k !== "attachments" && k !== "companyWebsite" && v !== undefined && v !== "")
    .map(([k, v]) => `<tr><td style="padding:4px 10px;color:#7a786f;font-family:monospace;font-size:12px;">${escapeHtml(k)}</td><td style="padding:4px 10px;">${escapeHtml(v)}</td></tr>`)
    .join("\n");

  try {
    await sendViaResend({
      apiKey: apiKey as string,
      from: from as string,
      to: to as string,
      subject: `Trade enquiry ${meta.referenceNumber} — ${String(payload.company ?? payload.contactName ?? "New enquiry")}`,
      html: `<h2>New trade enquiry — ${escapeHtml(meta.referenceNumber)}</h2><p>Submitted ${escapeHtml(meta.submittedAt)}</p><table>${rows}</table>`,
    });
    return { ok: true, skipped: false };
  } catch (err) {
    return { ok: false, skipped: false, reason: err instanceof Error ? err.message : String(err) };
  }
}

export async function confirmToCustomer(
  payload: Record<string, unknown>,
  meta: { referenceNumber: string }
): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const email = typeof payload.email === "string" ? payload.email : null;
  const missing = [!apiKey && "RESEND_API_KEY", !from && "RESEND_FROM_EMAIL", !email && "customer email"].filter(Boolean);
  if (missing.length) return { ok: false, skipped: true, reason: `Missing environment variables or data: ${missing.join(", ")}` };

  try {
    await sendViaResend({
      apiKey: apiKey as string,
      from: from as string,
      to: email as string,
      subject: `Your Epic Trading enquiry — reference ${meta.referenceNumber}`,
      html: `<p>Dear ${escapeHtml(payload.contactName ?? "Sir/Madam")},</p><p>Thank you for your enquiry. Your reference number is <strong>${escapeHtml(meta.referenceNumber)}</strong>. Our team will follow up shortly.</p><p>Epic Trading PLC</p>`,
    });
    return { ok: true, skipped: false };
  } catch (err) {
    return { ok: false, skipped: false, reason: err instanceof Error ? err.message : String(err) };
  }
}
