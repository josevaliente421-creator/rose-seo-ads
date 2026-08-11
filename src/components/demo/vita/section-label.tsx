"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

const sections: { id: string; index: string; label: string }[] = [
  { id: "top", index: "01", label: "VITA" },
  { id: "experiencia", index: "02", label: "Experiencia" },
  { id: "servicios", index: "02", label: "Experiencia" },
  { id: "historia", index: "02", label: "Experiencia" },
  { id: "especialidades", index: "03", label: "Especialidades" },
  { id: "dia", index: "04", label: "Personas" },
  { id: "acompanamiento", index: "04", label: "Personas" },
  { id: "equipo", index: "04", label: "Personas" },
  { id: "confianza", index: "04", label: "Personas" },
  { id: "faq", index: "04", label: "Personas" },
  { id: "contacto", index: "05", label: "Agendar" },
];

export function VitaSectionLabel() {
  const [current, setCurrent] = React.useState(sections[0]);

  React.useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const section = sections.find((s) => s.id === el.id);
            if (section) setCurrent(section);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-6 left-6 z-[80] hidden lg:block">
      <AnimatePresence mode="wait">
        <motion.p
          key={`${current.index}-${current.label}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/35"
        >
          <span className="text-[var(--demo-gold)]">{current.index}</span>
          <span aria-hidden className="h-px w-6 bg-white/20" />
          {current.label}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
