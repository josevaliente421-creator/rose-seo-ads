"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { ingredientes } from "./content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FuegoIngredientes() {
  const [active, setActive] = useState(0);

  return (
    <section id="ingredientes" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-ink-2)] py-24 sm:py-32">
      <DemoContainer className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/50" />
              Los ingredientes
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight text-[var(--demo-paper)]">
              El producto habla{" "}
              <span className="italic text-[var(--demo-gold)]">primero.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--demo-muted)]">
              No hay receta que salve un mal ingrediente. La mitad del trabajo se
              hace antes de llegar a la cocina.
            </p>
          </Reveal>

          <div className="mt-10">
            {ingredientes.map((item, i) => {
              const isActive = active === i;
              return (
                <Reveal key={item.word} delay={0.05 * i}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    data-cursor="ver"
                    aria-label={`Ver ${item.word}`}
                    className={`group block w-full cursor-pointer border-b border-white/[0.08] py-6 text-left transition-all duration-500 sm:py-7 ${
                      isActive ? "opacity-100" : "opacity-35 hover:opacity-65"
                    }`}
                  >
                    <span className="flex items-baseline justify-between gap-6">
                      <span className="font-demo-serif text-4xl font-semibold tracking-tight text-[var(--demo-paper)] transition-transform duration-500 group-hover:translate-x-2 sm:text-6xl">
                        {item.word}
                      </span>
                      <motion.span
                        animate={isActive ? { rotate: 45, opacity: 1 } : { rotate: 0, opacity: 0.4 }}
                        className="hidden text-[var(--demo-gold)] sm:block"
                        aria-hidden
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M7 17L17 7M17 7H8M17 7V16" />
                        </svg>
                      </motion.span>
                    </span>
                    <AnimatePresence initial={false}>
                      {isActive ? (
                        <motion.span
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.45, ease: EASE }}
                          className="block overflow-hidden"
                        >
                          <span className="block max-w-md pt-3 text-[15px] leading-relaxed text-[var(--demo-muted)]">
                            {item.desc}
                          </span>
                        </motion.span>
                      ) : null}
                    </AnimatePresence>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="sticky top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={ingredientes[active].img}
                    alt=""
                    fill
                    sizes="420px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent"
              />
              <div className="absolute bottom-5 left-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/45">
                  {String(active + 1).padStart(2, "0")} — {ingredientes[active].word}
                </p>
                <p className="mt-1 max-w-[26ch] font-demo-serif text-lg font-semibold italic leading-snug text-white/85">
                  {ingredientes[active].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DemoContainer>

      <div className="mt-12 lg:hidden">
        <div className="relative mx-auto aspect-[4/4.4] max-w-md overflow-hidden rounded-2xl">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="absolute inset-0"
            >
              <Image
                src={ingredientes[active].img}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </section>
  );
}