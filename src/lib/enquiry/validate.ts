import { ENQUIRY_CATEGORIES, ATTACHMENT_LIMITS } from "@/content/enquiryForms";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CATEGORY_SLUGS = ENQUIRY_CATEGORIES.map((c) => c.slug);

const REQUIRED_FIELDS: [string, string][] = [
  ["contactName", "Full name"],
  ["email", "Email"],
  ["company", "Company"],
  ["country", "Country"],
  ["product", "Product"],
  ["quantity", "Quantity"],
  ["destination", "Destination"],
  ["timeline", "Timeline"],
];

export type EnquiryPayload = Record<string, unknown>;

export function validateEnquiry(body: EnquiryPayload): { valid: boolean; errors: string[]; honeypotTripped: boolean } {
  const errors: string[] = [];

  if (!body || typeof body !== "object") {
    return { valid: false, errors: ["Malformed submission."], honeypotTripped: false };
  }

  const honeypotTripped = typeof body.companyWebsite === "string" && body.companyWebsite.trim() !== "";

  const category = body.category;
  if (typeof category !== "string" || !CATEGORY_SLUGS.includes(category)) {
    errors.push("A valid enquiry category must be selected.");
  }

  for (const [field, label] of REQUIRED_FIELDS) {
    const value = body[field];
    if (typeof value !== "string" || value.trim() === "") {
      errors.push(`${label} is required.`);
    }
  }

  if (typeof body.email === "string" && body.email.trim() !== "" && !EMAIL_RE.test(body.email)) {
    errors.push("Email address is not valid.");
  }

  const attachments = Array.isArray(body.attachments) ? body.attachments : [];
  if (attachments.length > ATTACHMENT_LIMITS.maxFiles) {
    errors.push(`No more than ${ATTACHMENT_LIMITS.maxFiles} files may be attached.`);
  }
  let totalBytes = 0;
  for (const file of attachments) {
    if (!file || typeof file !== "object" || typeof file.dataBase64 !== "string" || typeof file.name !== "string") {
      errors.push("One or more attachments is malformed.");
      continue;
    }
    const ext = "." + (file.name.split(".").pop() ?? "").toLowerCase();
    if (!ATTACHMENT_LIMITS.acceptedTypes.includes(ext)) {
      errors.push(`File type ${ext} is not accepted.`);
    }
    const approxBytes = Math.floor(file.dataBase64.length * 0.75);
    if (approxBytes > ATTACHMENT_LIMITS.maxFileBytes) {
      errors.push(`${file.name} exceeds the per-file size limit.`);
    }
    totalBytes += approxBytes;
  }
  if (totalBytes > ATTACHMENT_LIMITS.maxTotalBytes) {
    errors.push(`Total attachment size exceeds ${ATTACHMENT_LIMITS.maxTotalBytes / (1024 * 1024)}MB.`);
  }

  return { valid: errors.length === 0, errors, honeypotTripped };
}
