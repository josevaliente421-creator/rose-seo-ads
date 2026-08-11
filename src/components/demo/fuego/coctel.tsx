"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { coctel } from "./content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FuegoCoctel() {
  const reduce = useReducedMotion();

  return (
    <section id="coctel" className="relative scroll-mt-24 overflow-hidden rounded-t-[2.5rem] bg-[var(--demo-ink)] py-24 sm:py-32">
      <DemoContainer className="relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, scale: 1.08 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.4, ease: EASE }}
            >
              <Image
                src="/fuego/noche.jpg"
                alt="Coctelería de la casa iluminada en la barra durante la noche"
                width={1400}
                height={1400}
                data-cursor="ver"
                className="aspect-[4/4.6] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </motion.div>
            <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 sm:rounded-3xl" />
            <motion.div
              aria-hidden
              animate={reduce ? undefined : { opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-10 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(233,138,54,0.22),transparent_70%)] blur-2xl"
            />
          </div>
          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.35, duration: 0.8, ease: EASE }}
            className="absolute -bottom-4 left-6 rounded-full border border-white/10 bg-[#151411] px-5 py-2.5 font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--demo-gold)] shadow-lg sm:left-8"
          >
            {coctel.price}
          </motion.p>
        </div>

        <div>
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/50" />
              {coctel.kicker}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight text-[var(--demo-paper)]">
              {coctel.name.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="italic text-[var(--demo-gold)]">
                {coctel.name.split(" ").slice(2).join(" ")}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--demo-muted)]">
              {coctel.copy}
            </p>
          </Reveal>

          <ol className="mt-10 space-y-0">
            {coctel.pasos.map((paso, i) => (
              <motion.li
                key={paso}
                initial={reduce ? undefined : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.1 * i, duration: 0.7, ease: EASE }}
                className="flex items-center gap-5 border-b border-white/[0.07] py-4"
              >
                <span className="font-mono text-[10px] tabular-nums text-[var(--demo-gold)]/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-demo-serif text-lg font-semibold text-white/80">
                  {paso}
                </span>
                <motion.span
                  aria-hidden
                  animate={reduce ? undefined : { opacity: [0.15, 0.5, 0.15] }}
                  transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                  className="ml-auto size-1.5 rounded-full bg-[var(--demo-accent-deep)]"
                />
              </motion.li>
            ))}
          </ol>
          <Reveal delay={0.3}>
            <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              Base: {coctel.base} · precio demostrativo
            </p>
          </Reveal>
        </div>
      </DemoContainer>
    </section>
  );
}