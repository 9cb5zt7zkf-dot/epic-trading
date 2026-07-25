export type ProductGroup = {
  id: string;
  title: string;
  icon: string;
  items: string[];
};

export const EXPORT_PRODUCTS: ProductGroup[] = [
  {
    id: "coffee",
    title: "Coffee",
    icon: "coffee",
    items: ["Specialty coffee", "Commercial coffee", "Green coffee beans", "Roasted coffee", "Private label coffee"],
  },
  {
    id: "sesame",
    title: "Sesame",
    icon: "seed",
    items: ["Natural sesame", "White sesame", "Hulled sesame"],
  },
  {
    id: "agricultural-products",
    title: "Agricultural Products",
    icon: "sprout",
    items: ["Pulses", "Oilseeds", "Beans", "Spices", "Fresh produce", "Animal feed"],
  },
  {
    id: "livestock",
    title: "Livestock",
    icon: "cattle",
    items: ["Live cattle", "Halal meat (subject to accreditation)", "Frozen meat"],
  },
];

export const IMPORT_PRODUCTS: ProductGroup[] = [
  {
    id: "construction-materials",
    title: "Construction Materials",
    icon: "building",
    items: ["Steel", "Cement", "Tiles", "Marble", "Granite", "Electrical materials", "Plumbing materials", "HVAC"],
  },
  {
    id: "machinery",
    title: "Machinery & Industrial Equipment",
    icon: "gear",
    items: ["Industrial equipment", "Agricultural machinery", "Mining equipment", "Forklifts", "Generators", "Compressors", "Excavators", "Loaders", "Bulldozers"],
  },
  {
    id: "vehicles",
    title: "Vehicles",
    icon: "truck",
    items: ["Passenger cars", "SUVs", "Commercial vehicles", "Pickup trucks", "Heavy equipment", "Fleet supply"],
  },
];
