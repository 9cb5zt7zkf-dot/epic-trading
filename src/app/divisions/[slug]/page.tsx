import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DIVISIONS, getDivision } from "@/content/divisions";
import { getEnquiryCategory } from "@/content/enquiryForms";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { siteUrl } from "@/content/company";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return DIVISIONS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const division = getDivision(params.slug);
  if (!division) return {};
  return buildMetadata({
    title: division.name,
    description: division.summary,
    path: `/divisions/${division.slug}`,
  });
}

export default function DivisionDetailPage({ params }: { params: { slug: string } }) {
  const division = getDivision(params.slug);
  if (!division) notFound();

  const enquiryCategory = getEnquiryCategory(division.enquiryCategory);
  const related = DIVISIONS.filter((d) => d.slug !== division.slug).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: division.name,
    provider: { "@type": "Organization", name: "Epic Trading PLC" },
    description: division.detail,
    url: siteUrl(`/divisions/${division.slug}`),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="bg-forest-950 pb-16 pt-16 text-sand-50">
        <Container>
          <Breadcrumbs
            tone="light"
            items={[{ label: "Home", href: "/" }, { label: "Divisions", href: "/divisions" }, { label: division.name }]}
          />
          <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-400">
            <Icon name={division.icon as IconName} className="h-7 w-7" />
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-display-lg font-medium">{division.name}</h1>
          <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-sand-300">{division.summary}</p>
        </Container>
      </section>

      <section className="bg-sand-50 py-20 dark:bg-forest-950">
        <Container className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="text-[16px] leading-relaxed text-ink-700 dark:text-sand-300">{division.detail}</p>
            <ul className="mt-8 space-y-4">
              {division.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-ink-800 dark:text-sand-200">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600 dark:text-gold-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {division.relatedProductsHref && (
              <Link
                href={division.relatedProductsHref}
                className="mt-8 inline-flex items-center gap-2 text-[14.5px] font-medium text-gold-600 hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300"
              >
                View related products <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            )}
          </Reveal>

          <Reveal className="h-fit rounded-2xl border border-ink-900/8 bg-sand-100/60 p-8 dark:border-sand-100/8 dark:bg-forest-900/60">
            <h2 className="font-display text-[1.2rem] font-medium text-ink-900 dark:text-sand-50">
              Request a quotation
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-700 dark:text-sand-300">
              {enquiryCategory?.intro ?? "Submit your requirement and our team will follow up with a structured quotation."}
            </p>
            <Link
              href={`/enquiry/${division.enquiryCategory}`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-900 px-6 py-3.5 text-[14.5px] font-medium text-sand-50 transition-colors hover:bg-forest-800 dark:bg-gold-500 dark:text-forest-950 dark:hover:bg-gold-400"
            >
              {enquiryCategory?.label ?? "Submit an enquiry"}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink-900/8 bg-sand-100/40 py-20 dark:border-sand-100/8 dark:bg-forest-900/30">
        <Container>
          <h2 className="font-display text-[1.3rem] font-medium text-ink-900 dark:text-sand-50">You may also need</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((d) => (
              <Link
                key={d.slug}
                href={`/divisions/${d.slug}`}
                className="group rounded-xl border border-ink-900/8 bg-sand-50 p-6 transition-colors hover:border-gold-500/40 dark:border-sand-100/8 dark:bg-forest-950"
              >
                <Icon name={d.icon as IconName} className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                <h3 className="mt-4 text-[14.5px] font-semibold text-ink-900 dark:text-sand-50">{d.name}</h3>
                <p className="mt-2 text-[13px] text-ink-700 dark:text-sand-300">{d.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
