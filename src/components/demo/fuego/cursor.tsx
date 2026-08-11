"use client";

import * as React from "react";
import { useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const labels: Record<string, string> = {
  ver: "VER",
  explorar: "EXPLORAR",
  agendar: "RESERVAR",
  reservar: "RESERVAR",
  verPlato: "VER PLATO",
};

function useFinePointer() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(pointer: fine)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) as boolean,
    () => false,
  );
}

export function FuegoCursor() {
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const enabled = fine && !reduce;
  const [label, setLabel] = React.useState<string | null>(null);
  const [visible, setVisible] = React.useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

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
        animate={{ opacity: visible ? 1 : 0, scale: label ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
        className="-translate-x-1/2 -translate-y-1/2"
      >
        <motion.span
          animate={{
            width: label ? 64 : 8,
            height: label ? 24 : 8,
            borderRadius: label ? 999 : 999,
          }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center bg-[var(--demo-paper)] text-[#1a140c]"
        >
          {label ? (
            <span className="px-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em]">
              {label}
            </span>
          ) : null}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}