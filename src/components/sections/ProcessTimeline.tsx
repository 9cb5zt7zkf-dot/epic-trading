import { Reveal } from "@/components/ui/Reveal";

type Step = { step: string; detail: string };

export function ProcessTimeline({ steps }: { steps: readonly Step[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((item, i) => (
        <Reveal key={item.step} delay={(i % 4) * 0.07}>
          <li className="h-full rounded-2xl border border-ink-900/8 bg-sand-100/60 p-6 dark:border-sand-100/8 dark:bg-forest-900/60">
            <span className="font-display text-[13px] text-gold-600 dark:text-gold-400">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-[15px] font-semibold text-ink-900 dark:text-sand-50">{item.step}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-ink-700 dark:text-sand-300">{item.detail}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
