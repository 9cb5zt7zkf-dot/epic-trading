// The eight enquiry categories from the brand brief. Every category collects
// the same core commercial fields (Company, Country, Product, Specification,
// Quantity, Destination, Budget, Timeline, Attachments) — only the framing
// copy and product placeholder differ, so a single reusable <EnquiryForm />
// component (src/components/forms/EnquiryForm.tsx) renders all eight from
// this one schema. api/enquiry validates against the same list server-side.

export type EnquiryCategory = {
  slug: string;
  label: string;
  intro: string;
  productLabel: string;
  productPlaceholder: string;
};

export const ENQUIRY_CATEGORIES: EnquiryCategory[] = [
  {
    slug: "coffee",
    label: "Coffee Request",
    intro: "For specialty coffee, commercial coffee, green beans, roasted coffee or private label programs.",
    productLabel: "Coffee type",
    productPlaceholder: "e.g. washed Yirgacheffe, green bean, private label roast",
  },
  {
    slug: "commodity",
    label: "Commodity Request",
    intro: "For sesame, pulses, oilseeds, spices, fresh produce, animal feed, or livestock and meat.",
    productLabel: "Commodity",
    productPlaceholder: "e.g. hulled sesame, red kidney beans, live cattle",
  },
  {
    slug: "construction",
    label: "Construction Materials",
    intro: "For steel, cement, tiles, marble, granite, electrical, plumbing or HVAC materials.",
    productLabel: "Material",
    productPlaceholder: "e.g. structural steel, porcelain tiles, HVAC units",
  },
  {
    slug: "machinery",
    label: "Machinery Request",
    intro: "For industrial, agricultural or mining machinery, generators, forklifts and heavy equipment.",
    productLabel: "Machine / equipment type",
    productPlaceholder: "e.g. excavator, generator set, forklift",
  },
  {
    slug: "vehicles",
    label: "Vehicle Request",
    intro: "For passenger cars, SUVs, commercial vehicles, pickup trucks or fleet supply.",
    productLabel: "Vehicle type",
    productPlaceholder: "e.g. pickup trucks, SUV fleet, commercial vans",
  },
  {
    slug: "procurement",
    label: "General Procurement",
    intro: "For international procurement or product sourcing that doesn't fit the categories above.",
    productLabel: "Product / requirement",
    productPlaceholder: "Describe what you're looking to source",
  },
  {
    slug: "logistics",
    label: "Logistics Request",
    intro: "For freight coordination, container consolidation, or export/import documentation support.",
    productLabel: "Cargo type",
    productPlaceholder: "e.g. palletized general cargo, bulk agricultural commodity",
  },
  {
    slug: "general",
    label: "General Contact",
    intro: "For anything else — partnership enquiries, media, or a question not covered above.",
    productLabel: "Subject",
    productPlaceholder: "What can we help you with?",
  },
];

export function getEnquiryCategory(slug: string) {
  return ENQUIRY_CATEGORIES.find((c) => c.slug === slug);
}

export const TIMELINE_OPTIONS = ["Within 30 days", "1–3 months", "3–6 months", "Flexible / not yet determined"];

export const ATTACHMENT_LIMITS = {
  maxFiles: 5,
  maxFileBytes: 4 * 1024 * 1024,
  maxTotalBytes: 8 * 1024 * 1024,
  acceptedTypes: [".pdf", ".jpg", ".jpeg", ".png", ".xlsx", ".xls", ".doc", ".docx"],
};
