"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type DemoFaqItem = {
  q: string;
  a: string;
};

export function DemoAccordion({ items, tone = "dark" }: { items: DemoFaqItem[]; tone?: "dark" | "light" }) {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <div
      className={cn(
        "divide-y border-y",
        tone === "dark" ? "divide-white/10 border-white/10" : "divide-[var(--demo-ink)]/12 border-[var(--demo-ink)]/12",
      )}
    >
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
                  isOpen
                    ? "text-[var(--demo-gold)]"
                    : tone === "dark"
                      ? "text-[#f6f1ea]"
                      : "text-[var(--demo-ink)]",
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "rotate-180 border-[var(--demo-gold)] text-[var(--demo-gold)]"
                    : tone === "dark"
                      ? "border-white/20 text-white/60 group-hover:border-white/40 group-hover:text-white"
                      : "border-[var(--demo-ink)]/20 text-[var(--demo-ink)]/60 group-hover:border-[var(--demo-ink)]/40 group-hover:text-[var(--demo-ink)]",
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
                  <p
                    className={cn(
                      "max-w-2xl pb-7 text-[15px] leading-relaxed",
                      tone === "dark" ? "text-white/65" : "text-[var(--demo-ink)]/65",
                    )}
                  >
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
