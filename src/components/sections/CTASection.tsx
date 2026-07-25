import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  title = "Ready to discuss a trade requirement?",
  description = "Tell us what you need sourced, exported or shipped, and our team will follow up with a structured quotation.",
  primaryLabel = "Request a Trade Consultation",
  primaryHref = "/enquiry",
  secondaryLabel,
  secondaryHref,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-900">
      <div aria-hidden="true" className="absolute inset-0 bg-grain-overlay" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "radial-gradient(50% 60% at 85% 30%, rgba(201,162,39,0.18), transparent 65%)" }}
      />
      <div className="container relative py-24 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-display-md font-medium text-sand-50">{title}</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-sand-300">{description}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
            {secondaryLabel && secondaryHref && (
              <ButtonLink href={secondaryHref} variant="ghost">
                {secondaryLabel}
              </ButtonLink>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
