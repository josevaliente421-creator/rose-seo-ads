"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function FuegoScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2, duration: 1 }}
      className="pointer-events-none fixed bottom-0 left-6 z-40 hidden h-[38vh] flex-col items-center gap-3 lg:flex"
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/35 [writing-mode:vertical-rl]">
        SCROLL TO DISCOVER
      </span>
      <div className="relative w-px flex-1 overflow-hidden bg-white/10">
        <motion.span
          style={{ scaleY: progress }}
          className="absolute inset-0 origin-top bg-gradient-to-b from-[var(--demo-gold)] to-[var(--demo-accent-deep)]"
        />
      </div>
    </motion.div>
  );
}