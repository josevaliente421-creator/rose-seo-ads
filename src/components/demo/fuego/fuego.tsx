"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { fuegoSection } from "./content";
import { Humo } from "./humo";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FuegoSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.55"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 24 });

  const rawTemp = useTransform(progress, [0, 1], [fuegoSection.tempSteps[0], fuegoSection.tempSteps[3]]);
  const temp = useTransform(rawTemp, (v) => Math.round(v));
  const barScale = useTransform(progress, [0, 0.5, 1], [0.1, 0.6, 1]);
  const flameHeight = useTransform(progress, [0, 1], ["18%", "100%"]);

  return (
    <section
      id="fuego"
      ref={ref}
      className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-ink)] py-24 sm:py-32"
    >
      <Humo />
      <DemoContainer className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <motion.div
              style={reduce ? undefined : { scaleX: progress }}
              className="absolute inset-0 z-10 origin-left bg-[#080807]"
            />
            <motion.div
              initial={reduce ? undefined : { opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.4, ease: EASE }}
            >
              <Image
                src="/fuego/historia.jpg"
                alt="Parrillero cortando un corte de carne frente a las brasas"
                width={1400}
                height={1400}
                data-cursor="ver"
                className="aspect-[4/4.7] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div aria-hidden className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 sm:rounded-3xl" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--demo-ink)]/80 to-transparent"
            />
            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/45">
                La cocina · antes del primer bocado
              </p>
              <p className="mt-1 font-demo-serif text-xl font-semibold italic text-white/90">
                Primero escuchamos a las brasas.
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-[var(--demo-ink-2)] px-6 py-5 sm:px-8">
            <div className="flex items-end justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                La brasa · {fuegoSection.tempSteps[0]}° → {fuegoSection.tempSteps[3]}°
              </p>
              <motion.p className="font-demo-serif text-5xl font-semibold tabular-nums text-[var(--demo-gold)] sm:text-6xl">
                <motion.span>{temp}</motion.span>
                <span className="text-2xl align-top text-[var(--demo-gold)]/60">°</span>
              </motion.p>
            </div>
            <div className="relative mt-4 h-1.5 rounded-full bg-white/[0.08]">
              <motion.span
                style={reduce ? undefined : { scaleX: barScale }}
                className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-[var(--demo-accent-deep)] via-orange-700 to-[var(--demo-gold)]"
              />
            </div>
            <div className="mt-3 flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              {fuegoSection.tempSteps.map((t) => (
                <span key={t}>{t}°</span>
              ))}
            </div>
          </div>

          <motion.div
            aria-hidden
            style={reduce ? undefined : { height: flameHeight }}
            className="absolute -top-14 right-6 w-[10%] rounded-t-full bg-[radial-gradient(ellipse_at_bottom,rgba(233,138,54,0.4),transparent_70%)] blur-xl sm:right-10"
          />
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/50" />
              {fuegoSection.label}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight text-[var(--demo-paper)]">
              {fuegoSection.title.split(" ")[0]}{" "}
              <span className="italic text-[var(--demo-gold)]">
                {fuegoSection.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-[var(--demo-muted)] sm:text-lg">
              {fuegoSection.paragraphs.map((p) => (
                <p key={p} className="font-demo-serif text-white/75">{p}</p>
              ))}
              <p className="text-white/60">{fuegoSection.line}</p>
              <p>{fuegoSection.lineSub}</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-8 border-l-2 border-[var(--demo-gold)]/50 pl-5 font-demo-serif text-2xl font-semibold italic leading-snug text-[var(--demo-paper)] sm:text-3xl">
              {fuegoSection.close}
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              {fuegoSection.tempNote}
            </p>
          </Reveal>
        </div>
      </DemoContainer>
    </section>
  );
}