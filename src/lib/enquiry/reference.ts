import crypto from "crypto";

// Generates a human-readable, collision-resistant reference number, e.g.
// ET-20260724-4F9K. Uses Node's built-in crypto only — no dependency.
export function generateReference(now: Date = new Date()): string {
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  const datePart = `${y}${m}${d}`;

  // 32-symbol alphabet excluding visually ambiguous characters (0/O, 1/I/L).
  const alphabet = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
  const bytes = crypto.randomBytes(4);
  let suffix = "";
  for (let i = 0; i < 4; i++) suffix += alphabet[bytes[i] % alphabet.length];

  return `ET-${datePart}-${suffix}`;
}
