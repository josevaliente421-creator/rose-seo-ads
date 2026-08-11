"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { services } from "./content";

export function FuegoServices() {
  const [active, setActive] = useState(0);

  return (
    <section id="servicios" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-ink)] py-24 sm:py-32">
      <DemoContainer>
        <div className="max-w-2xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/50" />
              La mesa
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--demo-paper)] sm:text-5xl">
              Todo lo que sale del fuego.
              <br />
              <span className="italic text-[var(--demo-gold)]">En una misma mesa.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_26rem] lg:gap-16">
          <div className="border-t border-white/[0.08]">
            {services.map((service, i) => {
              const isActive = active === i;
              return (
                <button
                  key={service.title}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  data-cursor="ver"
                  aria-label={`Ver ${service.title}`}
                  className={`group block w-full cursor-pointer border-b border-white/[0.08] py-7 text-left transition-all duration-500 sm:py-8 ${
                    isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <span className="flex items-baseline gap-5 sm:gap-8">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--demo-gold)]/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-demo-serif text-3xl font-semibold tracking-tight text-[var(--demo-paper)] transition-colors duration-300 sm:text-4xl">
                        {service.title}
                      </span>
                      <AnimatePresence initial={false}>
                        {isActive ? (
                          <motion.span
                            key="desc"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="block overflow-hidden"
                          >
                            <span className="block max-w-md pt-3 text-[15px] leading-relaxed text-white/55">
                              {service.description}
                            </span>
                          </motion.span>
                        ) : null}
                      </AnimatePresence>
                    </span>
                    <span className="relative hidden size-20 shrink-0 overflow-hidden rounded-xl sm:block lg:hidden xl:block">
                      <Image
                        src={service.img}
                        alt=""
                        fill
                        sizes="80px"
                        className={`object-cover transition-all duration-700 ${
                          isActive ? "scale-105 opacity-100" : "opacity-50 grayscale-[40%]"
                        }`}
                      />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={services[active].img}
                      alt=""
                      fill
                      sizes="416px"
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
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/55 to-transparent"
                />
                <div className="absolute bottom-5 left-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/45">
                    {String(active + 1).padStart(2, "0")} — {services[active].title}
                  </p>
                  <p className="mt-1 max-w-[24ch] font-demo-serif text-lg font-semibold leading-snug text-white/85">
                    {services[active].description}
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
