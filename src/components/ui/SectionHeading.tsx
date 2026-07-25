import { cx } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal className={cx(align === "center" ? "text-center mx-auto" : "text-left", "max-w-2xl", className)}>
      {eyebrow && (
        <span
          className={cx(
            "mb-4 inline-block font-body text-[12px] font-semibold uppercase tracking-[0.18em]",
            tone === "dark" ? "text-gold-500" : "text-gold-300"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cx(
          "font-display text-display-md font-medium",
          tone === "dark" ? "text-ink-900" : "text-sand-50"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cx("mt-4 text-[16.5px] leading-relaxed", tone === "dark" ? "text-ink-700" : "text-sand-200")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
