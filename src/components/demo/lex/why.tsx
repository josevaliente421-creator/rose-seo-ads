"use client";

import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { values } from "./content";

export function LexWhy() {
  return (
    <section id="por-que" className="relative scroll-mt-24 bg-[var(--demo-paper)] py-24 text-[#1a0b10] sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4a1025]/25 to-transparent"
      />
      <DemoContainer className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#4a1025]">
              <span aria-hidden className="h-px w-8 bg-[#4a1025]/50" />
              Por qué elegirnos
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Los papeles importan.{" "}
              <span className="italic text-[#4a1025]">Tu negocio también.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#4a1025]/70 sm:text-lg">
              No somos el estudio que te llama para cobrar. Somos el estudio que
              te llama porque tu operación cambió — y ya deberías estar protegido.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-[#1a0b10]/10">
          {values.map((value, i) => (
            <Reveal key={value.n} delay={0.05 * i}>
              <div className="group grid gap-3 border-b border-[#1a0b10]/10 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-8">
                <span className="font-mono text-xs tracking-[0.2em] text-[#4a1025]/50 transition-colors group-hover:text-[#4a1025]">
                  {value.n}
                </span>
                <div>
                  <h3 className="font-demo-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-[#4a1025]/70">
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
