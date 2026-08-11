"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { dayPlan } from "./content";

export function FuegoDay() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section id="dia" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-paper)] py-24 text-[var(--demo-ink)] sm:py-32">
      <DemoContainer className="grid gap-14 lg:grid-cols-[24rem_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-accent-deep)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-accent-deep)]/50" />
              Una noche en la mesa
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-[clamp(2.2rem,4.5vw,3.4rem)] font-semibold leading-[1.05] tracking-tight">
              Tu noche en Fuego,{" "}
              <span className="italic text-[var(--demo-accent-deep)]">
                minuto a minuto.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-[var(--demo-ink)]/70">
              Una copa, la carta y el corte a la mesa en su momento.
              Todo coordinado para que la noche fluya sola.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 hidden overflow-hidden rounded-2xl sm:block">
              <Image
                src="/fuego/noche.jpg"
                alt="Restaurante de parrilla iluminado con luces cálidas durante la noche"
                width={1200}
                height={1200}
                data-cursor="ver"
                className="aspect-[4/4.2] w-full object-cover"
                sizes="384px"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[var(--demo-ink)]/10"
              />
            </div>
          </Reveal>
        </div>

        <div ref={trackRef} className="pt-2">
          <ol className="relative border-l border-[var(--demo-ink)]/12 pl-10 sm:pl-14">
            <li aria-hidden className="absolute inset-y-0 left-0 w-px">
              <motion.span
                style={reduce ? undefined : { scaleY: progress }}
                className="block h-full origin-top bg-gradient-to-b from-[var(--demo-accent-deep)] to-[var(--demo-gold)]"
              />
            </li>
            {dayPlan.map((event, i) => (
              <motion.li
                key={event.time}
                initial={reduce ? undefined : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                className="relative pb-14 last:pb-0"
              >
                <span
                  aria-hidden
                  className={`absolute -left-[3.55rem] top-1 flex size-11 items-center justify-center rounded-full border font-mono text-[11px] font-semibold sm:-left-[4.35rem] ${
                    i < 2
                      ? "border-[var(--demo-accent-deep)]/30 bg-[var(--demo-accent-deep)] text-[var(--demo-paper)]"
                      : "border-[var(--demo-ink)]/15 bg-[var(--demo-paper)] text-[var(--demo-ink)]/60"
                  }`}
                >
                  {event.time}
                </span>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--demo-accent-deep)]/70">
                  {event.time}
                </p>
                <h3 className="mt-1.5 font-demo-serif text-3xl font-semibold tracking-tight">
                  {event.title}
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-[var(--demo-ink)]/60">
                  {event.note}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </DemoContainer>
    </section>
  );
}
