export type ProductGroup = {
  id: string;
  title: string;
  icon: string;
  items: string[];
  // Path relative to /public. Only rendered once the file actually exists on
  // disk (see lib/media.ts) — safe to reference ahead of the photo landing.
  image?: string;
};

export const EXPORT_PRODUCTS: ProductGroup[] = [
  {
    id: "coffee",
    title: "Coffee",
    icon: "coffee",
    items: ["Specialty coffee", "Commercial coffee", "Green coffee beans", "Roasted coffee", "Private label coffee"],
    image: "/images/division-coffee.jpg",
  },
  {
    id: "sesame",
    title: "Sesame",
    icon: "seed",
    items: ["Natural sesame", "White sesame", "Hulled sesame"],
    image: "/images/division-sesame.jpg",
  },
  {
    id: "agricultural-products",
    title: "Agricultural Products",
    icon: "sprout",
    items: ["Pulses", "Oilseeds", "Beans", "Spices", "Fresh produce", "Animal feed"],
    image: "/images/division-agri.jpg",
  },
  {
    id: "livestock",
    title: "Livestock",
    icon: "cattle",
    items: ["Live cattle", "Halal meat (subject to accreditation)", "Frozen meat"],
    image: "/images/division-livestock.jpg",
  },
];

export const IMPORT_PRODUCTS: ProductGroup[] = [
  {
    id: "construction-materials",
    title: "Construction Materials",
    icon: "building",
    items: ["Steel", "Cement", "Tiles", "Marble", "Granite", "Electrical materials", "Plumbing materials", "HVAC"],
    image: "/images/division-construction.jpg",
  },
  {
    id: "machinery",
    title: "Machinery & Industrial Equipment",
    icon: "gear",
    items: ["Industrial equipment", "Agricultural machinery", "Mining equipment", "Forklifts", "Generators", "Compressors", "Excavators", "Loaders", "Bulldozers"],
    image: "/images/division-machinery.jpg",
  },
  {
    id: "vehicles",
    title: "Vehicles",
    icon: "truck",
    items: ["Passenger cars", "SUVs", "Commercial vehicles", "Pickup trucks", "Heavy equipment", "Fleet supply"],
    image: "/images/division-vehicles.jpg",
  },
];
