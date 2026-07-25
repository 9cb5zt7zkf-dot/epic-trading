import type { Metadata } from "next";
import { COMPANY, siteUrl } from "@/content/company";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

// Central helper so every page gets consistent title templating, canonical
// URL, and Open Graph / Twitter tags from one place instead of re-deriving
// them per page.
export function buildMetadata({ title, description, path, ogImage }: PageMetaInput): Metadata {
  const url = siteUrl(path);
  const image = ogImage ?? siteUrl("/og-image.jpg");

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: COMPANY.shortName,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
