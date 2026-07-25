import type { Metadata } from "next";
import { EXPORT_PRODUCTS } from "@/content/products";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Export Products",
  description:
    "Ethiopian export products coordinated by Epic Trading: coffee, sesame, agricultural products and livestock.",
  path: "/products/export",
});

export default function ExportProductsPage() {
  return (
    <>
      <section className="bg-forest-950 pb-16 pt-16 text-sand-50">
        <Container>
          <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Export Products" }]} />
          <h1 className="mt-6 max-w-3xl font-display text-display-lg font-medium">Export Products</h1>
          <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-sand-300">
            Ethiopian products sourced and coordinated for international buyers, grouped by category below.
          </p>
        </Container>
      </section>

      <section className="bg-sand-50 py-20 dark:bg-forest-950">
        <Container className="space-y-16">
          {EXPORT_PRODUCTS.map((group) => (
            <Reveal key={group.id}>
              <div id={group.id} className="scroll-mt-28 grid gap-8 lg:grid-cols-[1fr_2fr]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-gold-400 dark:bg-gold-500/15 dark:text-gold-400">
                    <Icon name={group.icon as IconName} className="h-6 w-6" />
                  </div>
                  <h2 className="font-display text-[1.4rem] font-medium text-ink-900 dark:text-sand-50">{group.title}</h2>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 rounded-lg border border-ink-900/8 bg-sand-100/60 px-4 py-3 text-[14.5px] text-ink-800 dark:border-sand-100/8 dark:bg-forest-900/50 dark:text-sand-200"
                    >
                      <Icon name="check" className="h-4 w-4 shrink-0 text-gold-600 dark:text-gold-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <CTASection
        title="Sourcing an Ethiopian export product?"
        description="Submit a coffee or commodity request and our team will follow up with a structured quotation."
        primaryLabel="Coffee Request"
        primaryHref="/enquiry/coffee"
        secondaryLabel="Commodity Request"
        secondaryHref="/enquiry/commodity"
      />
    </>
  );
}
