// Epic Trading PLC — verifiable company & legal data.
//
// This file is the single place that holds facts which must be TRUE, not
// aspirational: registration numbers, direct contact details, certifications,
// social links, and similar. Anything not yet confirmed is left `null` with a
// comment explaining what's needed — never filled with an invented
// placeholder value (no fake phone numbers, no fake certifications, no fake
// years-in-business). Update this file as real details are confirmed; every
// page that renders one of these fields already handles the `null` case
// gracefully (it either hides the row or shows a neutral "coming soon" note).

export const COMPANY = {
  legalName: "Epic Trading PLC",
  shortName: "Epic Trading",
  tagline: "Connecting Ethiopia to Global Markets",

  headOffice: {
    line1: "Piazza",
    city: "Addis Ababa",
    country: "Ethiopia",
  },

  // Fill in once issued/confirmed. Do not invent values.
  registrationNumber: null as string | null,
  tinNumber: null as string | null,
  establishedYear: null as number | null,

  // Direct contact channels — left null until confirmed so the site never
  // displays or submits enquiries to an unverified address.
  email: "info@epictrading.et" as string | null,
  phone: "+251956780367" as string | null,
  phoneSecondary: "+251922494389" as string | null,
  whatsapp: null as string | null,

  social: {
    linkedin: null as string | null,
    instagram: null as string | null,
    x: null as string | null,
  },

  // Used for canonical URLs, sitemap, and JSON-LD. Set once the production
  // domain is confirmed; falls back to a clearly non-production placeholder
  // so nothing is silently published under a wrong domain.
  domain: null as string | null,
} as const;

export const SITE_FALLBACK_DOMAIN = "epic-trading.example";

// Computed per-render (not at module load) so a long-lived server process
// never freezes on a stale year.
export function copyrightLine(): string {
  return `© ${new Date().getFullYear()} Epic Trading PLC. All rights reserved.`;
}

export function siteUrl(path = "/") {
  const domain = COMPANY.domain ?? SITE_FALLBACK_DOMAIN;
  return `https://${domain}${path}`;
}
