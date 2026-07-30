import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const STRENGTHS: { title: string; detail: string; icon: IconName }[] = [
  { title: "Deep Understanding of Ethiopian Markets", detail: "Direct coordination with growers, producers and regional suppliers across Ethiopia.", icon: "globe" },
  { title: "International Sourcing Capability", detail: "Coordinated sourcing across construction materials, machinery, vehicles and commodities.", icon: "search" },
  { title: "Commercial Transparency", detail: "Itemized quotations and clear terms before any commercial commitment.", icon: "document" },
  { title: "Reliable Communication", detail: "A single point of contact coordinating each engagement from enquiry to delivery.", icon: "handshake" },
  { title: "Documentation Support", detail: "Export, import and customs documentation prepared per shipment.", icon: "stamp" },
  { title: "Quality Coordination", detail: "Inspection and verification coordinated through qualified partners where required.", icon: "check" },
  { title: "Procurement Expertise", detail: "Structured supplier identification, verification and negotiation.", icon: "briefcase" },
  { title: "Long-Term Business Relationships", detail: "Built for buyers who return for repeat sourcing and export requirements.", icon: "shield" },
];

export function WhyEpicTrading() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-900/8 bg-ink-900/8 dark:border-sand-100/8 dark:bg-sand-100/8 sm:grid-cols-2 lg:grid-cols-4">
      {STRENGTHS.map((item, i) => (
        <Reveal
          key={item.title}
          delay={(i % 4) * 0.07}
          className="bg-sand-50 p-7 transition-colors duration-300 hover:bg-sand-100 dark:bg-forest-950 dark:hover:bg-forest-900/70"
        >
          <Icon name={item.icon} className="h-6 w-6 text-gold-600 dark:text-gold-400" />
          <h3 className="mt-5 text-[15px] font-semibold text-ink-900 dark:text-sand-50">{item.title}</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-ink-700 dark:text-sand-300">{item.detail}</p>
        </Reveal>
      ))}
    </div>
  );
}
