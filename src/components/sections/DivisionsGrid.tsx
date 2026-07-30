import Link from "next/link";
import Image from "next/image";
import { DIVISIONS } from "@/content/divisions";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { hasPublicImage } from "@/lib/media";

export function DivisionsGrid({ limit }: { limit?: number }) {
  const divisions = limit ? DIVISIONS.slice(0, limit) : DIVISIONS;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {divisions.map((division, i) => {
        const showImage = hasPublicImage(division.image);
        return (
          <Reveal key={division.slug} delay={(i % 3) * 0.08}>
            <Link
              href={`/divisions/${division.slug}`}
              className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-ink-900/8 bg-sand-100/60 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lg hover:bg-sand-100 dark:border-sand-100/8 dark:bg-forest-900/60 dark:hover:bg-forest-900"
            >
              <div>
                {showImage ? (
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={division.image as string}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/5 to-transparent" />
                    <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/90 text-forest-950 shadow-gold-glow">
                      <Icon name={division.icon as IconName} className="h-5 w-5" />
                    </div>
                  </div>
                ) : (
                  <div className="px-7 pt-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-900 text-gold-400 dark:bg-gold-500/15 dark:text-gold-400">
                      <Icon name={division.icon as IconName} className="h-5 w-5" />
                    </div>
                  </div>
                )}
                <div className="px-7 pb-2 pt-5">
                  <h3 className="font-display text-[1.15rem] font-medium text-ink-900 dark:text-sand-50">
                    {division.name}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-700 dark:text-sand-300">
                    {division.summary}
                  </p>
                </div>
              </div>
              <span className="mx-7 mb-7 mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-gold-600 dark:text-gold-400">
                Learn more
                <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
