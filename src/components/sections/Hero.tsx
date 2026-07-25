"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { WorldRoutesGraphic } from "@/components/sections/WorldRoutesGraphic";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-950 text-sand-50">
      {/* Editorial gradient + grain treatment stands in for photography until
          real production photography is available — see project README. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 82% 15%, rgba(201,162,39,0.16), transparent 60%), radial-gradient(50% 40% at 10% 90%, rgba(47,114,80,0.35), transparent 60%)",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-grain-overlay" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-60 lg:block">
        <WorldRoutesGraphic />
      </div>

      <div className="container relative flex min-h-[86vh] flex-col justify-end gap-10 pb-24 pt-40">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex w-fit items-center rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-[12.5px] font-medium uppercase tracking-[0.14em] text-gold-300"
        >
          The International Trade Gateway for Ethiopia
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-display text-display-xl font-medium leading-[1.02] text-sand-50"
        >
          Connecting Ethiopia to Global Markets
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-[17px] leading-relaxed text-sand-300"
        >
          Epic Trading PLC provides international sourcing, procurement, import, export and commercial trade
          solutions connecting Ethiopian producers with global buyers while helping businesses source products
          from international markets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <ButtonLink href="/enquiry">Request a Trade Consultation</ButtonLink>
          <ButtonLink href="/divisions" variant="ghost">
            Explore Products
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
