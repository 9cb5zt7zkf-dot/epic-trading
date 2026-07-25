import type { MetadataRoute } from "next";
import { DIVISIONS } from "@/content/divisions";
import { ENQUIRY_CATEGORIES } from "@/content/enquiryForms";
import { siteUrl } from "@/content/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/about",
    "/divisions",
    "/products/export",
    "/products/import",
    "/services",
    "/process",
    "/global-reach",
    "/enquiry",
    "/contact",
  ];

  const divisionPaths = DIVISIONS.map((d) => `/divisions/${d.slug}`);
  const enquiryPaths = ENQUIRY_CATEGORIES.map((c) => `/enquiry/${c.slug}`);

  return [...staticPaths, ...divisionPaths, ...enquiryPaths].map((path) => ({
    url: siteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
