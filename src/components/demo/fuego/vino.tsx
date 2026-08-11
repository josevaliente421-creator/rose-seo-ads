"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { vinoSection } from "./content";

export function FuegoVino() {
  return (
    <section id="vino" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-ink-2)] py-24 sm:py-32">
      <DemoContainer className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/fuego/vino.jpg"
                alt="Copa de vino tinto frente a la luz cálida de la barra"
                width={1400}
                height={1400}
                data-cursor="ver"
                className="aspect-[4/4.8] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </motion.div>
            <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 sm:rounded-3xl" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--demo-ink-2)]/80 to-transparent"
            />
            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/45">
                La bodega · pequeñas cosechas
              </p>
              <p className="mt-1 font-demo-serif text-xl font-semibold italic text-white/90">
                El vino espera a la brasa.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/50" />
              {vinoSection.kicker}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight text-[var(--demo-paper)]">
              {vinoSection.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic text-[var(--demo-gold)]">
                {vinoSection.title.split(" ").slice(-1)[0]}.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--demo-muted)] sm:text-lg">
              {vinoSection.copy}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {vinoSection.categorias.map((cat, i) => (
              <Reveal key={cat.name} delay={0.06 * i}>
                <div className="border-t border-white/[0.1] pt-5">
                  <p className="font-demo-serif text-2xl font-semibold tracking-tight text-[var(--demo-paper)]">
                    {cat.name}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--demo-muted)]">
                    {cat.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </DemoContainer>
    </section>
  );
}