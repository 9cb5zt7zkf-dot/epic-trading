import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { DivisionsGrid } from "@/components/sections/DivisionsGrid";
import { WhyEpicTrading } from "@/components/sections/WhyEpicTrading";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { WorldRoutesGraphic } from "@/components/sections/WorldRoutesGraphic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { TRADE_PROCESS_STEPS } from "@/content/process";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Epic Trading PLC — Connecting Ethiopia to Global Markets",
  description:
    "Epic Trading PLC provides international sourcing, procurement, import, export and commercial trade solutions connecting Ethiopian producers with global buyers.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-sand-50 py-24 dark:bg-forest-950">
        <Container>
          <SectionHeading
            eyebrow="Core Business Divisions"
            title="Ten divisions, one coordinated trade partner."
            description="From Ethiopian coffee and sesame exports to construction materials, machinery and vehicle imports — each division is coordinated through the same commercial process."
          />
          <div className="mt-12">
            <DivisionsGrid />
          </div>
        </Container>
      </section>

      <section className="bg-sand-100/60 py-24 dark:bg-forest-900/40">
        <Container>
          <SectionHeading
            eyebrow="Why Epic Trading"
            title="Strengths buyers can verify, not slogans."
            description="Epic Trading is positioned around real operational strengths — not invented statistics or unverifiable claims."
          />
          <div className="mt-12">
            <WhyEpicTrading />
          </div>
        </Container>
      </section>

      <section className="bg-sand-50 py-24 dark:bg-forest-950">
        <Container>
          <SectionHeading
            eyebrow="Trade Process"
            title="A structured commercial process, start to finish."
            description="Every engagement follows the same clear sequence, from initial requirement through to confirmed delivery."
          />
          <div className="mt-12">
            <ProcessTimeline steps={TRADE_PROCESS_STEPS} />
          </div>
          <Reveal className="mt-10">
            <Link href="/process" className="text-[14.5px] font-medium text-gold-600 hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300">
              View the full trade process and quality assurance approach →
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-forest-950 py-24 text-sand-50">
        <div aria-hidden="true" className="absolute inset-0 bg-grain-overlay" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SectionHeading
              tone="light"
              eyebrow="Global Reach"
              title="Supporting buyers across international markets."
              description="Epic Trading coordinates trade routes connecting Ethiopia with buyers across the Middle East, Europe, Asia, Africa and North America."
              className="max-w-xl"
            />
            <Reveal className="relative h-[320px] lg:h-[380px]">
              <WorldRoutesGraphic interactive />
            </Reveal>
          </div>
          <Reveal className="mt-10">
            <ButtonLink href="/global-reach" variant="ghost">
              Explore global reach
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <CTASection secondaryLabel="Explore Products" secondaryHref="/divisions" />
    </>
  );
}
