"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { thirtyMinutes } from "./content";

export function VitaTimeline30() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.55"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section
      id="experiencia"
      className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-paper)] pb-24 pt-28 text-[var(--demo-ink)] sm:pb-32 sm:pt-32"
    >
      <DemoContainer>
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-accent-deep)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-accent-deep)]/50" />
              La medicina que te devuelve tiempo
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-[clamp(2.6rem,6vw,4.8rem)] font-semibold leading-[1.02] tracking-tight">
              30 minutos pueden cambiar{" "}
              <span className="italic text-[var(--demo-accent-deep)]">una decisión.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--demo-ink)]/70 sm:text-lg">
              En VITA no medimos una consulta por cuántos pacientes caben en una
              agenda. La medimos por cuánto entendiste al salir.
            </p>
          </Reveal>
        </div>

        <div ref={trackRef} className="mt-20">
          <ol className="relative hidden lg:grid lg:grid-cols-5 lg:gap-10">
            <li aria-hidden className="absolute inset-x-0 top-[22px] h-px bg-[var(--demo-ink)]/12">
              <motion.span
                style={reduce ? undefined : { scaleX: progress }}
                className="block h-full origin-left bg-gradient-to-r from-[var(--demo-accent-deep)] to-[var(--demo-gold)]"
              />
            </li>
            {thirtyMinutes.map((step, i) => (
              <motion.li
                key={step.time}
                initial={reduce ? undefined : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                className="relative pt-12"
              >
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 flex size-[46px] items-center justify-center rounded-full border font-mono text-[11px] font-semibold tracking-[0.08em] ${
                    i === 0
                      ? "border-[var(--demo-accent-deep)]/40 bg-[var(--demo-accent-deep)] text-[var(--demo-paper)]"
                      : "border-[var(--demo-ink)]/15 bg-[var(--demo-paper)] text-[var(--demo-ink)]/70"
                  }`}
                >
                  {step.time}
                </span>
                <h3 className="mt-6 font-demo-serif text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[26ch] text-sm leading-relaxed text-[var(--demo-ink)]/60">
                  {step.note}
                </p>
              </motion.li>
            ))}
          </ol>

          <ol className="relative space-y-12 border-l border-[var(--demo-ink)]/12 pl-10 lg:hidden">
            <li aria-hidden className="absolute inset-y-0 -left-px w-px">
              <motion.span
                style={reduce ? undefined : { scaleY: progress }}
                className="block h-full origin-top bg-gradient-to-b from-[var(--demo-accent-deep)] to-[var(--demo-gold)]"
              />
            </li>
            {thirtyMinutes.map((step, i) => (
              <motion.li
                key={step.time}
                initial={reduce ? undefined : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span
                  aria-hidden
                  className="absolute -left-[3.35rem] top-1 flex size-10 items-center justify-center rounded-full border border-[var(--demo-ink)]/15 bg-[var(--demo-paper)] font-mono text-[10px] font-semibold text-[var(--demo-ink)]/70"
                >
                  {step.time}
                </span>
                <h3 className="font-demo-serif text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--demo-ink)]/60">
                  {step.note}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </DemoContainer>
    </section>
  );
}
