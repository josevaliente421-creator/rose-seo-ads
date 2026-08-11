"use client";

import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { values } from "./content";

export function VitaWhy() {
  return (
    <section id="por-que" className="relative scroll-mt-24 bg-[var(--demo-paper)] py-24 text-[var(--demo-ink)] sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--demo-accent-deep)]/25 to-transparent"
      />
      <DemoContainer className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-accent-deep)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-accent-deep)]/50" />
              Por qué elegirnos
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              La salud importa.{" "}
              <span className="italic text-[var(--demo-accent-deep)]">Tu tiempo también.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--demo-accent-deep)]/70 sm:text-lg">
              No somos la clínica que atiende por números. Somos la clínica que
              te conoce por nombre: consultas que parten a la hora, médicos que
              escuchan y resultados que te explican, no que te envían a Google.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-[#1a0b10]/10">
          {values.map((value, i) => (
            <Reveal key={value.n} delay={0.05 * i}>
              <div className="group grid gap-3 border-b border-[#1a0b10]/10 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-8">
                <span className="font-mono text-xs tracking-[0.2em] text-[var(--demo-accent-deep)]/50 transition-colors group-hover:text-[var(--demo-accent-deep)]">
                  {value.n}
                </span>
                <div>
                  <h3 className="font-demo-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-[var(--demo-accent-deep)]/70">
                    {value.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </DemoContainer>
    </section>
  );
}
