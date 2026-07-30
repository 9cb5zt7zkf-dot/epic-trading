"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { WorldRoutesGraphic } from "@/components/sections/WorldRoutesGraphic";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ heroImage }: { heroImage?: string }) {
  return (
    <section className="relative overflow-hidden bg-forest-950 text-sand-50">
      {/* Editorial gradient + grain treatment. Once real photography exists it
          becomes the bold framed visual on the right (see below) rather than a
          faint backdrop — the WorldRoutesGraphic remains the fallback until
          then, and still appears again in the Global Reach section. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 82% 15%, rgba(201,162,39,0.16), transparent 60%), radial-gradient(55% 45% at 6% 95%, rgba(47,114,80,0.4), transparent 60%)",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-grain-overlay" />

      {/* Soft drifting accent glow — the one continuous "always moving" touch */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative grid gap-16 pb-24 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-28 lg:pt-40">
        <div className="flex flex-col gap-8">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex w-fit items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-[12.5px] font-medium uppercase tracking-[0.14em] text-gold-300"
          >
            The International Trade Gateway for Ethiopia
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
            className="max-w-xl font-display text-display-xl font-medium leading-[1.02] text-sand-50"
          >
            Connecting <span className="text-gold-400">Ethiopia</span> to Global Markets
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
            className="max-w-lg text-[17px] leading-relaxed text-sand-300"
          >
            Epic Trading PLC provides international sourcing, procurement, import, export and commercial trade
            solutions connecting Ethiopian producers with global buyers while helping businesses source products
            from international markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: EASE }}
            className="flex flex-wrap items-center gap-4"
          >
            <ButtonLink href="/enquiry">Request a Trade Consultation</ButtonLink>
            <ButtonLink href="/divisions" variant="ghost">
              Explore Products
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-gold-400/25 shadow-gold-glow sm:aspect-[5/4] lg:aspect-[4/5]">
            {heroImage ? (
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1.04, 1.14, 1.04] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src={heroImage} alt="" fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" priority />
              </motion.div>
            ) : (
              <div className="absolute inset-0 bg-forest-900">
                <WorldRoutesGraphic />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-forest-950/0 to-forest-950/10" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>

          {/* Floating fact chip — a real, verifiable count, not a slogan */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
            className="absolute -bottom-6 left-6 hidden items-center gap-3 rounded-2xl border border-gold-400/25 bg-forest-950/90 px-5 py-4 shadow-card backdrop-blur sm:flex"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
              <Icon name="globe" className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[13px] font-semibold leading-tight text-sand-50">10 Core Divisions</p>
              <p className="text-[11.5px] leading-tight text-sand-300">Export · Import · Procurement</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
