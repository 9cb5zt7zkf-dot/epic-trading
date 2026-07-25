// Global Reach content. Wording is intentionally general ("supporting buyers
// across international markets") rather than quoting a specific number of
// countries served, per the brand brief's instruction to avoid unsupported
// claims.

export type Region = {
  id: string;
  name: string;
  note: string;
  // Approximate label position on the world map SVG (percentage-based),
  // used only for a simple illustrative graphic, not a precise atlas.
  x: number;
  y: number;
};

export const REGIONS: Region[] = [
  { id: "middle-east", name: "Middle East", note: "Trade routes supporting buyers across the Gulf and wider Middle East.", x: 60, y: 42 },
  { id: "europe", name: "Europe", note: "Coordination for coffee, sesame and commodity buyers across Europe.", x: 49, y: 26 },
  { id: "asia", name: "Asia", note: "Sourcing coordination and commodity trade across Asian markets.", x: 74, y: 40 },
  { id: "africa", name: "Africa", note: "Regional trade coordination across East and wider Africa.", x: 56, y: 55 },
  { id: "north-america", name: "North America", note: "Supporting buyers sourcing Ethiopian commodities in North America.", x: 20, y: 32 },
];

export const ETHIOPIA_MARKER = { x: 58, y: 50 };
