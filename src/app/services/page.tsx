import type { Metadata } from "next";
import { SERVICES } from "@/content/services";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Epic Trading's coordinated trade services: international procurement, supplier verification, product sourcing, cargo coordination and commercial consulting.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-forest-950 pb-16 pt-16 text-sand-50">
        <Container>
          <Breadcrumbs tone="light" items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <h1 className="mt-6 max-w-3xl font-display text-display-lg font-medium">Services</h1>
          <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-sand-300">
            Coordinated services supporting every stage of a trade transaction, from initial sourcing through to
            delivery.
          </p>
        </Container>
      </section>

      <section className="bg-sand-50 py-20 dark:bg-forest-950">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <div className="h-full rounded-2xl border border-ink-900/8 bg-sand-100/60 p-7 dark:border-sand-100/8 dark:bg-forest-900/60">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-900 text-gold-400 dark:bg-gold-500/15 dark:text-gold-400">
                    <Icon name={service.icon as IconName} className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-[15.5px] font-semibold text-ink-900 dark:text-sand-50">{service.title}</h2>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-700 dark:text-sand-300">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Need help structuring a trade transaction?"
        description="Speak with our team about procurement, sourcing or logistics coordination."
        secondaryLabel="General Procurement"
        secondaryHref="/enquiry/procurement"
      />
    </>
  );
}
