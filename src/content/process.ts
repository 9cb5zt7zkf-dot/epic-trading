// Two distinct processes per the brand brief: the sourcing/quality process
// (how a product requirement is turned into a verified, delivered shipment)
// and the overall commercial trade process (the buyer-facing commercial
// flow from enquiry to delivery). Wording is deliberately careful — this
// describes what is *coordinated*, not certifications or inspections Epic
// Trading cannot verify it holds.

export const QUALITY_PROCESS_STEPS = [
  { step: "Requirement Analysis", detail: "The buyer's specification, quantity, destination and timeline are reviewed to confirm scope." },
  { step: "Supplier Selection", detail: "Candidate suppliers are identified and shortlisted against the requirement." },
  { step: "Specification Review", detail: "Technical specification, grade or standard is confirmed against the shortlisted suppliers' offer." },
  { step: "Sample Approval", detail: "Samples are coordinated for buyer review and approval where applicable to the product." },
  { step: "Inspection Coordination", detail: "Inspection can be arranged through qualified third parties where the buyer requires it." },
  { step: "Documentation", detail: "Export, import, customs and compliance documentation is prepared for the shipment." },
  { step: "Packaging", detail: "Packaging is coordinated to match the buyer's specification and the shipment method." },
  { step: "Shipping", detail: "Freight is coordinated through licensed logistics partners." },
  { step: "Delivery Follow-up", detail: "Shipment status is tracked through to confirmed delivery." },
] as const;

export const TRADE_PROCESS_STEPS = [
  { step: "Requirement", detail: "The buyer submits a product or sourcing requirement." },
  { step: "Quotation", detail: "Epic Trading prepares an itemized commercial quotation." },
  { step: "Supplier Selection", detail: "Suppliers are identified and confirmed for the transaction." },
  { step: "Verification", detail: "Supplier and product verification is coordinated as required." },
  { step: "Inspection", detail: "Inspection is coordinated where the buyer requires it." },
  { step: "Documentation", detail: "Trade, customs and compliance documentation is finalized." },
  { step: "Shipping", detail: "Freight and delivery are coordinated through licensed partners." },
  { step: "Delivery", detail: "The shipment is tracked through to confirmed delivery." },
] as const;
