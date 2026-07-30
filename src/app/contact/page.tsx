import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/content/company";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Contact Epic Trading PLC, headquartered in Piazza, Addis Ababa, Ethiopia.",
  path: "/contact",
});

export default function ContactPage() {
  const hasDirectContact = Boolean(COMPANY.email || COMPANY.phone);

  return (
    <section className="relative overflow-hidden bg-forest-950 py-20 text-sand-50">
      <div aria-hidden="true" className="absolute inset-0 bg-grain-overlay" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "radial-gradient(55% 45% at 85% 10%, rgba(201,162,39,0.14), transparent 60%)" }}
      />
      <Container className="relative max-w-3xl">
        <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        <h1 className="mt-6 font-display text-display-lg font-medium">Contact Epic Trading</h1>
        <p className="mt-5 text-[16.5px] leading-relaxed text-sand-300">
          For a specific product or category, use the trade enquiry form for a structured response. For anything
          else, reach us using the details below.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-sand-100/12 bg-forest-900/60 p-7">
            <Icon name="pin" className="h-5 w-5 text-gold-400" />
            <h2 className="mt-4 text-[14px] font-semibold uppercase tracking-wide text-sand-300">Head Office</h2>
            <p className="mt-2 text-[15px] text-sand-50">
              {COMPANY.headOffice.line1}, {COMPANY.headOffice.city}
              <br />
              {COMPANY.headOffice.country}
            </p>
          </div>

          {COMPANY.email && (
            <div className="rounded-2xl border border-sand-100/12 bg-forest-900/60 p-7">
              <Icon name="mail" className="h-5 w-5 text-gold-400" />
              <h2 className="mt-4 text-[14px] font-semibold uppercase tracking-wide text-sand-300">Email</h2>
              <a href={`mailto:${COMPANY.email}`} className="mt-2 block text-[15px] text-sand-50 hover:text-gold-300">
                {COMPANY.email}
              </a>
            </div>
          )}

          {COMPANY.phone && (
            <div className="rounded-2xl border border-sand-100/12 bg-forest-900/60 p-7">
              <Icon name="phone" className="h-5 w-5 text-gold-400" />
              <h2 className="mt-4 text-[14px] font-semibold uppercase tracking-wide text-sand-300">Phone</h2>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="mt-2 block text-[15px] text-sand-50 hover:text-gold-300">
                {COMPANY.phone}
              </a>
              {COMPANY.phoneSecondary && (
                <a href={`tel:${COMPANY.phoneSecondary.replace(/\s/g, "")}`} className="mt-1 block text-[15px] text-sand-50 hover:text-gold-300">
                  {COMPANY.phoneSecondary}
                </a>
              )}
            </div>
          )}

          {!hasDirectContact && (
            <div className="rounded-2xl border border-sand-100/12 bg-forest-900/60 p-7 sm:col-span-2">
              <p className="text-[14.5px] leading-relaxed text-sand-300">
                Direct phone and email contact details are being finalized and will be published here shortly. In
                the meantime, please use the general contact form and a member of our team will follow up.
              </p>
            </div>
          )}
        </div>

        <div className="mt-12">
          <ButtonLink href="/enquiry/general">Submit General Contact Form</ButtonLink>
        </div>

        <p className="mt-8 text-[13.5px] text-sand-400">
          Looking for a specific category instead? Visit our{" "}
          <Link href="/enquiry" className="underline hover:text-sand-200">
            full enquiry hub
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
