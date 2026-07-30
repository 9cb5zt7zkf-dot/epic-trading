import type { Metadata } from "next";
import { DivisionsGrid } from "@/components/sections/DivisionsGrid";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Core Business Divisions",
  description:
    "Epic Trading's ten core business divisions: coffee export, sesame export, agricultural commodities, livestock, construction materials, machinery, vehicle trading, procurement, sourcing and cargo coordination.",
  path: "/divisions",
});

export default function DivisionsPage() {
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
          <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Divisions" }]} />
          <h1 className="mt-6 max-w-3xl font-display text-display-lg font-medium">Core Business Divisions</h1>
          <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-sand-300">
            Epic Trading coordinates ten core divisions across export, import, procurement and logistics — each
            following the same transparent commercial process from enquiry to delivery.
          </p>
        </Container>
      </section>

      <section className="bg-sand-50 py-20 dark:bg-forest-950">
        <Container>
          <DivisionsGrid />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
