// The ten core business divisions, as listed in the brand brief. Each entry
// carries enough structured detail to power both the homepage preview cards
// and the full division detail pages — swap this for a real CMS query later
// without touching any component.

export type Division = {
  slug: string;
  name: string;
  icon: string; // key into components/ui/Icon.tsx
  summary: string;
  detail: string;
  points: string[];
  relatedProductsHref?: string;
  enquiryCategory: string; // slug into content/enquiryForms.ts
  // Path relative to /public. Only rendered once the file actually exists on
  // disk (see lib/media.ts) — safe to reference ahead of the photo landing.
  image?: string;
};

export const DIVISIONS: Division[] = [
  {
    slug: "coffee-export",
    name: "Coffee Export",
    icon: "coffee",
    summary: "Ethiopian coffee sourced and coordinated for international buyers, from specialty lots to commercial volumes.",
    detail:
      "Epic Trading coordinates with growers, washing stations and exporters across Ethiopia's coffee-producing regions to prepare shipments for roasters, importers and private label buyers abroad.",
    points: [
      "Specialty coffee and commercial-grade coffee",
      "Green coffee beans and roasted coffee",
      "Private label coffee programs",
      "Grading and documentation coordinated per shipment",
    ],
    relatedProductsHref: "/products/export#coffee",
    enquiryCategory: "coffee",
    image: "/images/division-coffee.jpg",
  },
  {
    slug: "sesame-export",
    name: "Sesame Export",
    icon: "seed",
    summary: "Natural, white and hulled sesame sourced from Ethiopian growers for export markets.",
    detail:
      "Ethiopia is a significant sesame origin. Epic Trading coordinates aggregation, grading and export documentation for buyers sourcing natural, white or hulled sesame.",
    points: [
      "Natural sesame seed",
      "White sesame",
      "Hulled sesame",
      "Quality grading and moisture testing coordinated per shipment",
    ],
    relatedProductsHref: "/products/export#sesame",
    enquiryCategory: "commodity",
    image: "/images/division-sesame.jpg",
  },
  {
    slug: "agricultural-commodities",
    name: "Agricultural Commodities",
    icon: "sprout",
    summary: "Pulses, oilseeds, beans, spices, fresh produce and animal feed sourced for commercial and industrial buyers.",
    detail:
      "Beyond coffee and sesame, Epic Trading coordinates sourcing and export of a wider range of Ethiopian agricultural commodities for food processors, distributors and commercial buyers.",
    points: [
      "Pulses and oilseeds",
      "Beans and spices",
      "Fresh produce",
      "Animal feed",
    ],
    relatedProductsHref: "/products/export#agricultural-products",
    enquiryCategory: "commodity",
    image: "/images/division-agri.jpg",
  },
  {
    slug: "livestock-meat",
    name: "Livestock & Meat",
    icon: "cattle",
    summary: "Live cattle and meat export coordination, including halal-certified meat subject to accreditation.",
    detail:
      "Epic Trading coordinates sourcing and export of live cattle and meat products, working with relevant veterinary and certification authorities where halal or other certification is required by the destination market.",
    points: [
      "Live cattle export coordination",
      "Halal meat, subject to accreditation availability",
      "Frozen meat",
      "Veterinary and health documentation coordinated with relevant authorities",
    ],
    relatedProductsHref: "/products/export#livestock",
    enquiryCategory: "commodity",
    image: "/images/division-livestock.jpg",
  },
  {
    slug: "construction-materials",
    name: "Construction Materials",
    icon: "building",
    summary: "Steel, cement, tiles, marble, granite and building infrastructure materials sourced for contractors and developers.",
    detail:
      "Epic Trading coordinates supply of construction materials for contractors, developers and project buyers, sourcing from manufacturers and suppliers within its network.",
    points: [
      "Steel, cement, tiles, marble and granite",
      "Electrical and plumbing materials",
      "HVAC systems",
      "Bulk purchasing coordination for large-scale projects",
    ],
    relatedProductsHref: "/products/import#construction-materials",
    enquiryCategory: "construction",
    image: "/images/division-construction.jpg",
  },
  {
    slug: "machinery-equipment",
    name: "Machinery & Equipment",
    icon: "gear",
    summary: "Industrial, agricultural and mining machinery sourced and coordinated for import.",
    detail:
      "From generators to excavators, Epic Trading coordinates sourcing and import of industrial and agricultural machinery for buyers across construction, agriculture and mining sectors.",
    points: [
      "Industrial equipment and agricultural machinery",
      "Mining equipment",
      "Forklifts, generators and compressors",
      "Excavators, loaders and bulldozers",
    ],
    relatedProductsHref: "/products/import#machinery",
    enquiryCategory: "machinery",
    image: "/images/division-machinery.jpg",
  },
  {
    slug: "vehicle-trading",
    name: "Vehicle Trading",
    icon: "truck",
    summary: "Passenger cars, SUVs, commercial vehicles and fleet supply sourced and coordinated for import.",
    detail:
      "Epic Trading coordinates vehicle sourcing for private buyers, corporate fleets and tender processes, from passenger cars to heavy commercial vehicles.",
    points: [
      "Passenger cars and SUVs",
      "Commercial vehicles and pickup trucks",
      "Heavy equipment",
      "Fleet supply coordination for corporate buyers",
    ],
    relatedProductsHref: "/products/import#vehicles",
    enquiryCategory: "vehicles",
    image: "/images/division-vehicles.jpg",
  },
  {
    slug: "international-procurement",
    name: "International Procurement",
    icon: "globe",
    summary: "Supplier identification, verification and commercial negotiation for buyers sourcing internationally.",
    detail:
      "Epic Trading coordinates the procurement cycle on behalf of clients: identifying suppliers, verifying credentials, negotiating commercial terms, and coordinating delivery.",
    points: [
      "Supplier identification and verification",
      "Commercial negotiation",
      "Quality inspection coordination",
      "A single point of contact per engagement",
    ],
    enquiryCategory: "procurement",
    image: "/images/division-procurement.jpg",
  },
  {
    slug: "product-sourcing",
    name: "Product Sourcing",
    icon: "search",
    summary: "Structured sourcing support for buyers with a defined product specification and target market.",
    detail:
      "Whether sourcing from Ethiopian producers or international manufacturers, Epic Trading coordinates the search, shortlisting and evaluation of suppliers against a buyer's specification.",
    points: [
      "Requirement analysis and specification review",
      "Supplier shortlisting",
      "Sample coordination",
      "Production monitoring coordination",
    ],
    enquiryCategory: "procurement",
    image: "/images/division-sourcing.jpg",
  },
  {
    slug: "cargo-coordination",
    name: "Cargo Coordination",
    icon: "ship",
    summary: "Export and import documentation, freight coordination, container consolidation and customs coordination.",
    detail:
      "Epic Trading's logistics desk coordinates freight and documentation for shipments connected to its trading activity, working with licensed freight and customs partners.",
    points: [
      "Export and import documentation",
      "Freight coordination",
      "Container consolidation",
      "Customs coordination",
    ],
    enquiryCategory: "logistics",
    image: "/images/division-cargo.jpg",
  },
];

export function getDivision(slug: string) {
  return DIVISIONS.find((d) => d.slug === slug);
}
