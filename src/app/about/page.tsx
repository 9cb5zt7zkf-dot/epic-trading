import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { WhyEpicTrading } from "@/components/sections/WhyEpicTrading";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { COMPANY } from "@/content/company";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Epic Trading PLC is an Ethiopian trading company coordinating international sourcing, procurement, import and export from its head office in Addis Ababa.",
  path: "/about",
});

const VALUES: { title: string; icon: IconName }[] = [
  { title: "Integrity", icon: "shield" },
  { title: "Transparency", icon: "document" },
  { title: "Reliability", icon: "check" },
  { title: "Quality", icon: "check" },
  { title: "Professionalism", icon: "briefcase" },
  { title: "Long-term Partnerships", icon: "handshake" },
  { title: "Commercial Excellence", icon: "globe" },
  { title: "Customer Focus", icon: "search" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest-950 pb-16 pt-16 text-sand-50">
        <Container>
          <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 className="mt-6 max-w-3xl font-display text-display-lg font-medium">About Epic Trading</h1>
          <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-sand-300">
            Epic Trading PLC is an Ethiopian trading company headquartered in {COMPANY.headOffice.line1},{" "}
            {COMPANY.headOffice.city}, coordinating international import, export, procurement and commercial trade
            across construction materials, machinery, vehicles and Ethiopian agricultural commodities.
          </p>
        </Container>
      </section>

      <section className="bg-sand-50 py-20 dark:bg-forest-950">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-ink-900/8 bg-sand-100/60 p-9 dark:border-sand-100/8 dark:bg-forest-900/60">
            <span className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-600 dark:text-gold-400">
              Mission
            </span>
            <p className="mt-4 font-display text-[1.35rem] font-medium leading-snug text-ink-900 dark:text-sand-50">
              To connect Ethiopian products, businesses and opportunities with global markets through reliable
              sourcing, procurement and international trade solutions.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-2xl border border-ink-900/8 bg-sand-100/60 p-9 dark:border-sand-100/8 dark:bg-forest-900/60">
            <span className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-600 dark:text-gold-400">
              Vision
            </span>
            <p className="mt-4 font-display text-[1.35rem] font-medium leading-snug text-ink-900 dark:text-sand-50">
              To become one of East Africa&rsquo;s most trusted international trading companies by delivering
              integrity, transparency and commercial excellence across every transaction.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-sand-100/60 py-20 dark:bg-forest-900/40">
        <Container>
          <SectionHeading eyebrow="Core Values" title="What guides every engagement." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <Reveal key={value.title} className="flex items-center gap-3 rounded-xl border border-ink-900/8 bg-sand-50 px-5 py-4 dark:border-sand-100/8 dark:bg-forest-950">
                <Icon name={value.icon} className="h-[18px] w-[18px] text-gold-600 dark:text-gold-400" />
                <span className="text-[14.5px] font-medium text-ink-900 dark:text-sand-50">{value.title}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand-50 py-20 dark:bg-forest-950">
        <Container>
          <SectionHeading
            eyebrow="Positioning"
            title="The International Trade Gateway for Ethiopia."
            description="Epic Trading connects Ethiopian producers, buyers and businesses with international markets, and helps businesses source products from abroad — coordinated by teams who understand both sides of the transaction."
          />
          <div className="mt-12">
            <WhyEpicTrading />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
