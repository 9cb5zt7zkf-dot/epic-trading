import type { Metadata } from "next";
import Link from "next/link";
import { ENQUIRY_CATEGORIES } from "@/content/enquiryForms";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Request a Trade Consultation",
  description: "Submit a coffee, commodity, construction materials, machinery, vehicle, procurement, logistics or general enquiry to Epic Trading PLC.",
  path: "/enquiry",
});

export default function EnquiryHubPage() {
  return (
    <section className="bg-forest-950 py-20 text-sand-50">
      <Container>
        <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Request a Trade Consultation" }]} />
        <h1 className="mt-6 max-w-3xl font-display text-display-lg font-medium">Request a Trade Consultation</h1>
        <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-sand-300">
          Choose the category closest to your requirement. Every enquiry reaches our team directly and receives a
          structured follow-up.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ENQUIRY_CATEGORIES.map((category, i) => (
            <Reveal key={category.slug} delay={(i % 4) * 0.06}>
              <Link
                href={`/enquiry/${category.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-sand-100/12 bg-forest-900/60 p-6 transition-all hover:-translate-y-1 hover:border-gold-500/50"
              >
                <div>
                  <h2 className="text-[15px] font-semibold text-sand-50">{category.label}</h2>
                  <p className="mt-2 text-[13px] leading-relaxed text-sand-300">{category.intro}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-gold-400">
                  Start request
                  <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
