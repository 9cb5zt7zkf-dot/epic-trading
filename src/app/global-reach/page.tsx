import type { Metadata } from "next";
import { REGIONS } from "@/content/regions";
import { WorldRoutesGraphic } from "@/components/sections/WorldRoutesGraphic";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Global Reach",
  description:
    "Epic Trading coordinates trade routes connecting Ethiopia with buyers across the Middle East, Europe, Asia, Africa and North America.",
  path: "/global-reach",
});

export default function GlobalReachPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-950 pb-20 pt-16 text-sand-50">
        <div aria-hidden="true" className="absolute inset-0 bg-grain-overlay" />
        <Container className="relative">
          <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Global Reach" }]} />
          <h1 className="mt-6 max-w-3xl font-display text-display-lg font-medium">Global Reach</h1>
          <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-sand-300">
            Epic Trading coordinates trade routes connecting Ethiopian producers and buyers with international
            markets. The diagram below illustrates the regions Epic Trading supports — hover a region for detail.
          </p>

          <Reveal className="relative mt-16 h-[380px] sm:h-[440px] lg:h-[520px]">
            <WorldRoutesGraphic interactive />
          </Reveal>
        </Container>
      </section>

      <section className="bg-sand-50 py-20 dark:bg-forest-950">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((region, i) => (
              <Reveal key={region.id} delay={(i % 3) * 0.07}>
                <div className="h-full rounded-2xl border border-ink-900/8 bg-sand-100/60 p-7 transition-colors duration-300 hover:border-gold-500/40 dark:border-sand-100/8 dark:bg-forest-900/60">
                  <h2 className="font-display text-[1.1rem] font-medium text-ink-900 dark:text-sand-50">{region.name}</h2>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-700 dark:text-sand-300">{region.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <p className="max-w-2xl text-[14px] text-ink-500 dark:text-sand-400">
              Regional coverage reflects the markets Epic Trading currently coordinates trade with. Specific
              country availability is confirmed per enquiry.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
