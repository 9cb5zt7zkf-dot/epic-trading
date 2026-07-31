// `navLabel` is the compact form shown in the desktop nav bar, where seven
// items have to share space with the logo and CTA button. `label` (the full
// form) is always used in the mobile menu, where vertical space is cheap.
export const NAV_LINKS = [
  { label: "Divisions", navLabel: "Divisions", href: "/divisions" },
  { label: "Export Products", navLabel: "Export", href: "/products/export" },
  { label: "Import Products", navLabel: "Import", href: "/products/import" },
  { label: "Services", navLabel: "Services", href: "/services" },
  { label: "Trade Process", navLabel: "Process", href: "/process" },
  { label: "Global Reach", navLabel: "Reach", href: "/global-reach" },
  { label: "About", navLabel: "About", href: "/about" },
] as const;

export const FOOTER_DIVISION_LINKS = [
  { label: "Coffee Export", href: "/divisions/coffee-export" },
  { label: "Construction Materials", href: "/divisions/construction-materials" },
  { label: "Machinery & Equipment", href: "/divisions/machinery-equipment" },
  { label: "Vehicle Trading", href: "/divisions/vehicle-trading" },
  { label: "Cargo Coordination", href: "/divisions/cargo-coordination" },
] as const;
