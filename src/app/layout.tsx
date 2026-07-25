import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeScript } from "@/components/ui/ThemeScript";
import { JsonLd } from "@/components/seo/JsonLd";
import { COMPANY, siteUrl, SITE_FALLBACK_DOMAIN } from "@/content/company";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${COMPANY.domain ?? SITE_FALLBACK_DOMAIN}`),
  title: {
    default: "Epic Trading PLC — Connecting Ethiopia to Global Markets",
    template: "%s · Epic Trading PLC",
  },
  description:
    "Epic Trading PLC provides international sourcing, procurement, import, export and commercial trade solutions connecting Ethiopian producers with global buyers.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.legalName,
    url: siteUrl("/"),
    logo: siteUrl("/brand/epic-trading-logo-dark.png"),
    description:
      "Epic Trading PLC provides international sourcing, procurement, import, export and commercial trade solutions connecting Ethiopian producers with global buyers.",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.headOffice.line1,
      addressLocality: COMPANY.headOffice.city,
      addressCountry: COMPANY.headOffice.country,
    },
    ...(COMPANY.email ? { email: COMPANY.email } : {}),
    ...(COMPANY.phone ? { telephone: COMPANY.phone } : {}),
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="font-body">
        <JsonLd data={organizationSchema} />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
