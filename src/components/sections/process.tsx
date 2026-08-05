"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { processSteps } from "@/lib/data";

export function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 80%", "end 65%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="proceso" className="relative bg-card/40 py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px hairline-gradient"
      />
      <Container>
        <SectionHeader
          eyebrow="El proceso"
          title={
            <>
              Cinco pasos. <span className="text-gradient">Una semana.</span>
            </>
          }
          description="Un proceso tan definido que puedes marcar el día del lanzamiento en tu calendario desde la primera llamada."
        />

        <div ref={lineRef} className="relative mx-auto mt-20 max-w-3xl">
          <div
            aria-hidden
            className="absolute left-[19px] top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
          />
          <motion.div
            aria-hidden
            style={{ height }}
            className="absolute left-[19px] top-0 w-px bg-gradient-to-b from-brand to-brand-hover sm:left-1/2 sm:-translate-x-1/2"
          />

          <ol className="space-y-12 sm:space-y-0">
            {processSteps.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={step.number}
                  className={`relative sm:grid sm:grid-cols-2 sm:gap-16 sm:py-10 lg:gap-20 lg:py-14 ${
                    left ? "" : "sm:py-12 lg:py-16"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-1.5 z-10 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
                  >
                    <span className="flex size-10 items-center justify-center rounded-full border border-brand-soft-2 bg-background text-brand shadow-soft">
                      <step.icon className="size-4.5" aria-hidden />
                    </span>
                  </motion.div>

                  <Reveal
                    delay={0.08}
                    className={`pl-14 sm:pl-0 ${
                      left
                        ? "sm:col-start-1 sm:pr-16 sm:text-right"
                        : "sm:col-start-2 sm:pl-16"
                    }`}
                  >
                    <div
                      className={`inline-flex flex-col gap-1.5 ${
                        left ? "sm:items-end" : "sm:items-start"
                      }`}
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-brand">
                        {step.number} · {step.days}
                      </p>
                      <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
