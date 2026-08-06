"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type DemoFaqItem = {
  q: string;
  a: string;
};

export function DemoAccordion({ items }: { items: DemoFaqItem[] }) {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`demo-faq-panel-${i}`}
              className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
            >
              <span
                className={cn(
                  "font-demo-serif text-xl font-semibold tracking-tight transition-colors duration-300 sm:text-2xl",
                  isOpen ? "text-[var(--demo-gold)]" : "text-[#f6f1ea]",
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "rotate-180 border-[var(--demo-gold)] text-[var(--demo-gold)]"
                    : "border-white/20 text-white/60 group-hover:border-white/40 group-hover:text-white",
                )}
                aria-hidden
              >
                {isOpen ? (
                  <Minus className="size-3.5" />
                ) : (
                  <Plus className="size-3.5" />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`demo-faq-panel-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-white/65">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
