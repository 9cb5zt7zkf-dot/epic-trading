"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Scroll/mount reveal wrapper. Deliberately animates only transform+opacity
// together but with opacity never dipping fully to 0 for more than an instant
// on mount (it's driven by whileInView with `once: true`, so content is
// guaranteed visible after first paint — safe for no-JS/slow-JS fallbacks
// since the base element has no inline hidden state, only a CSS-transition).
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
