"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { specialties } from "./content";

export function FuegoSpecialties() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section id="especialidades" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-ink)] py-24 sm:py-32">
      <DemoContainer>
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/50" />
              La parrilla
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--demo-paper)] sm:text-5xl">
              En cada estado,{" "}
              <span className="italic text-[var(--demo-gold)]">una decisión.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">
              No necesitas saber qué corte pedir. Cuéntanos qué
              apeteces hoy y el anfitrión lo acerca a tu mesa.
            </p>
          </Reveal>
        </div>

        <div ref={trackRef} className="mt-16 grid gap-12 lg:grid-cols-[1fr_24rem] lg:gap-16">
          <ol className="relative border-l border-white/[0.08] pl-10 sm:pl-14">
            <li aria-hidden className="absolute inset-y-0 left-0 w-px">
              <motion.span
                style={reduce ? undefined : { scaleY: progress }}
                className="block h-full origin-top bg-gradient-to-b from-[var(--demo-gold)]/70 via-[var(--demo-gold)]/30 to-transparent"
              />
            </li>
            {specialties.map((item, i) => {
              const isActive = active === i;
              return (
                <li key={item.n} className="relative">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    data-cursor="ver"
                    aria-label={`Ver ${item.name}`}
                    className={`group block w-full cursor-pointer py-8 text-left transition-all duration-500 sm:py-10 ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-75"
                    }`}
                  >
                    <span className="flex items-baseline gap-6 sm:gap-10">
                      <span className="hidden w-16 shrink-0 font-demo-serif text-5xl font-semibold leading-none text-white/[0.12] transition-colors duration-500 group-hover:text-[var(--demo-gold)]/25 sm:block">
                        {item.n}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-demo-serif text-3xl font-semibold tracking-tight text-[var(--demo-paper)] sm:text-4xl">
                          {item.name}
                        </span>
                        <AnimatePresence initial={false}>
                          {isActive ? (
                            <motion.span
                              key="tag"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                              className="block overflow-hidden"
                            >
                              <span className="block pt-2 font-demo-serif text-lg italic text-[var(--demo-gold)]">
                                {item.tagline}
                              </span>
                            </motion.span>
                          ) : null}
                        </AnimatePresence>
                      </span>
                      <span className="relative ml-auto hidden size-24 shrink-0 overflow-hidden rounded-xl xl:block">
                        <Image
                          src={item.img}
                          alt=""
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="relative hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={specialties[active].img}
                      alt=""
                      fill
                      sizes="384px"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/60 to-transparent"
                />
                <div className="absolute bottom-5 left-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/45">
                    {String(active + 1).padStart(2, "0")} — {specialties[active].name}
                  </p>
                  <p className="mt-1 font-demo-serif text-xl font-semibold italic text-white/90">
                    {specialties[active].tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DemoContainer>
    </section>
  );
}
