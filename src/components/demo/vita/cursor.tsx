"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const labels: Record<string, string> = {
  ver: "Ver",
  conocer: "Conocer",
  agendar: "Agendar",
};

export function VitaCursor() {
  const reduce = useReducedMotion();
  const [enabled] = React.useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches && !reduce,
  );
  const [label, setLabel] = React.useState<string | null>(null);
  const [visible, setVisible] = React.useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 35 });
  const springY = useSpring(y, { stiffness: 420, damping: 35 });

  React.useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      setLabel(target ? labels[target.getAttribute("data-cursor") || ""] || null : null);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[90]"
    >
      <motion.div
        animate={{ opacity: visible ? 1 : 0, scale: label ? 1.15 : 1 }}
        transition={{ duration: 0.25 }}
        className="-translate-x-1/2 -translate-y-1/2"
      >
        <motion.span
          animate={{
            width: label ? 62 : 10,
            height: label ? 26 : 10,
            borderRadius: label ? 999 : 999,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center bg-[var(--demo-gold)] text-[#1a0b10]"
        >
          {label ? (
            <span className="px-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em]">
              {label}
            </span>
          ) : null}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
