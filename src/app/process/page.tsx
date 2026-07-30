import type { Metadata } from "next";
import { QUALITY_PROCESS_STEPS, TRADE_PROCESS_STEPS } from "@/content/process";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Trade Process & Quality Assurance",
  description:
    "How Epic Trading coordinates a trade transaction from requirement to delivery, and the sourcing and quality process behind it.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-950 pb-16 pt-16 text-sand-50">
        <div aria-hidden="true" className="absolute inset-0 bg-grain-overlay" />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "radial-gradient(55% 45% at 85% 10%, rgba(201,162,39,0.14), transparent 60%)" }}
        />
        <Container className="relative">
          <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Trade Process & Quality Assurance" }]} />
          <h1 className="mt-6 max-w-3xl font-display text-display-lg font-medium">Trade Process &amp; Quality Assurance</h1>
          <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-sand-300">
            A structured, transparent process from initial enquiry through to confirmed delivery — and the
            sourcing and quality steps that support it.
          </p>
        </Container>
      </section>

      <section className="scroll-mt-28 bg-sand-50 py-20 dark:bg-forest-950" id="trade-process">
        <Container>
          <SectionHeading
            eyebrow="Trade Process"
            title="Requirement to delivery, in eight steps."
            description="The overall commercial flow that every Epic Trading engagement follows."
          />
          <div className="mt-12">
            <ProcessTimeline steps={TRADE_PROCESS_STEPS} />
          </div>
        </Container>
      </section>

      <section className="scroll-mt-28 bg-sand-100/60 py-20 dark:bg-forest-900/40" id="quality-assurance">
        <Container>
          <SectionHeading
            eyebrow="Quality Assurance"
            title="A careful sourcing and quality process."
            description="Epic Trading coordinates each of the following steps according to the transaction; inspection and certification are arranged through qualified third parties where a buyer requires them, not claimed as in-house certifications."
          />
          <div className="mt-12">
            <ProcessTimeline steps={QUALITY_PROCESS_STEPS} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
