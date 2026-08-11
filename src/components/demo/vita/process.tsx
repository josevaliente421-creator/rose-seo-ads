"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { processSteps } from "./content";

export function VitaProcess() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section
      id="proceso"
      className="relative scroll-mt-24 bg-[var(--demo-paper)] py-24 text-[#1a0b10] sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--demo-accent-deep)]/25 to-transparent"
      />
      <DemoContainer>
        <div className="max-w-2xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-accent-deep)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-accent-deep)]/50" />
              Proceso
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Cinco pasos,{" "}
              <span className="italic text-[var(--demo-accent-deep)]">una sola dirección</span>
            </h2>
          </Reveal>
        </div>

        <div ref={trackRef} className="mt-16">
          <ol className="relative hidden lg:grid lg:grid-cols-5 lg:gap-8">
            <li aria-hidden className="absolute inset-x-0 top-0 h-px bg-[#1a0b10]/12">
              <motion.span
                style={reduce ? undefined : { scaleX: progress }}
                className="block h-full origin-left bg-gradient-to-r from-[var(--demo-accent-deep)] to-[var(--demo-gold)]"
              />
            </li>
            {processSteps.map((step, i) => (
              <motion.li
                key={step.n}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
                className="relative pt-10"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border border-[var(--demo-accent-deep)]/30 font-mono text-[11px] font-medium text-[var(--demo-accent-deep)]"
                >
                  {i + 1}
                </span>
                <h3 className="font-demo-serif text-2xl font-semibold tracking-tight">
                  {step.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--demo-accent-deep)]/65">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>

          <ol className="relative space-y-10 border-l border-[#1a0b10]/12 pl-8 lg:hidden">
            <li aria-hidden className="absolute inset-y-0 -left-px w-px">
              <motion.span
                style={reduce ? undefined : { scaleY: progress }}
                className="block h-full origin-top bg-gradient-to-b from-[var(--demo-accent-deep)] to-[var(--demo-gold)]"
              />
            </li>
            {processSteps.map((step, i) => (
              <motion.li
                key={step.n}
                initial={reduce ? undefined : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span
                  aria-hidden
                  className="absolute -left-[2.72rem] top-0 flex size-8 items-center justify-center rounded-full border border-[var(--demo-accent-deep)]/30 bg-[var(--demo-paper)] font-mono text-[11px] font-medium text-[var(--demo-accent-deep)]"
                >
                  {i + 1}
                </span>
                <h3 className="font-demo-serif text-2xl font-semibold tracking-tight">
                  {step.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--demo-accent-deep)]/65">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </DemoContainer>
    </section>
  );
}
