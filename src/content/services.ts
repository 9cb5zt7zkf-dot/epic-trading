export type Service = {
  slug: string;
  title: string;
  icon: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    slug: "international-procurement",
    title: "International Procurement",
    icon: "globe",
    description: "Coordinating the procurement cycle end to end, from supplier identification through to delivery.",
  },
  {
    slug: "supplier-identification",
    title: "Supplier Identification",
    icon: "search",
    description: "Shortlisting candidate suppliers against a buyer's specification, budget and timeline.",
  },
  {
    slug: "supplier-verification",
    title: "Supplier Verification",
    icon: "shield",
    description: "Coordinating background review and credential checks on prospective suppliers before commercial commitment.",
  },
  {
    slug: "commercial-negotiation",
    title: "Commercial Negotiation",
    icon: "handshake",
    description: "Negotiating price, terms and delivery conditions on behalf of the buyer.",
  },
  {
    slug: "product-sourcing",
    title: "Product Sourcing",
    icon: "search",
    description: "Identifying and evaluating product options across Epic Trading's supplier network.",
  },
  {
    slug: "quality-inspection-coordination",
    title: "Quality Inspection Coordination",
    icon: "check",
    description: "Arranging inspection through qualified third parties where a buyer requires it, according to the transaction.",
  },
  {
    slug: "production-monitoring",
    title: "Production Monitoring",
    icon: "factory",
    description: "Coordinating progress updates during production runs for manufactured or processed goods.",
  },
  {
    slug: "cargo-coordination",
    title: "Cargo Coordination",
    icon: "ship",
    description: "Coordinating freight movement for shipments connected to Epic Trading's trading activity.",
  },
  {
    slug: "export-documentation",
    title: "Export Documentation",
    icon: "document",
    description: "Preparing export licences, certificates of origin and related paperwork per shipment.",
  },
  {
    slug: "import-documentation",
    title: "Import Documentation",
    icon: "document",
    description: "Preparing import documentation and compliance paperwork per shipment.",
  },
  {
    slug: "freight-coordination",
    title: "Freight Coordination",
    icon: "route",
    description: "Coordinating ocean, air, rail or road freight through licensed logistics partners.",
  },
  {
    slug: "container-consolidation",
    title: "Container Consolidation",
    icon: "box",
    description: "Coordinating consolidation of cargo from multiple sources into shared containers where appropriate.",
  },
  {
    slug: "customs-coordination",
    title: "Customs Coordination",
    icon: "stamp",
    description: "Coordinating customs clearance requirements through licensed partners at origin and destination.",
  },
  {
    slug: "commercial-consulting",
    title: "Commercial Consulting",
    icon: "briefcase",
    description: "Advising buyers and Ethiopian producers on structuring international trade transactions.",
  },
];
