"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { noche } from "./content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FuegoNoche() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section id="noche" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-ink)] py-24 sm:py-32">
      <DemoContainer>
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/50" />
              Una noche en FUEGO
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight text-[var(--demo-paper)]">
              Hay cenas que terminan.{" "}
              <span className="italic text-[var(--demo-gold)]">
                Esta debería quedarse contigo.
              </span>
            </h2>
          </Reveal>
        </div>

        <div ref={trackRef} className="mt-16">
          <ol className="relative border-l border-white/[0.08] pl-10 sm:pl-14">
            <li aria-hidden className="absolute inset-y-0 left-0 w-px">
              <motion.span
                style={reduce ? undefined : { scaleY: progress }}
                className="block h-full origin-top bg-gradient-to-b from-[var(--demo-gold)] via-[var(--demo-accent-deep)] to-transparent"
              />
            </li>
            {noche.map((momento, i) => (
              <motion.li
                key={momento.time}
                initial={reduce ? undefined : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.06 * i, ease: EASE }}
                className="relative pb-12 last:pb-0 sm:pb-14"
              >
                <span
                  aria-hidden
                  className="absolute -left-[3.55rem] top-1 size-11 rounded-full border border-[var(--demo-gold)]/35 bg-[#151411] sm:-left-[4.35rem]"
                >
                  <motion.span
                    animate={reduce ? undefined : { opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--demo-gold)]"
                  />
                </span>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--demo-gold)]/80">
                  {momento.time}
                </p>
                <h3 className="mt-1.5 font-demo-serif text-3xl font-semibold tracking-tight text-[var(--demo-paper)]">
                  {momento.title}
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-[var(--demo-muted)]">
                  {momento.note}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
            Un recorrido de la noche · horarios referenciales
          </p>
        </Reveal>
      </DemoContainer>
    </section>
  );
}