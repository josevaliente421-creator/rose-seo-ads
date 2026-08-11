"use client";

import { DemoContainer } from "@/components/demo/container";
import { Eyebrow } from "@/components/demo/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { specialties } from "./content";

export function VitaSpecialties() {
  return (
    <section id="especialidades" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />
      <DemoContainer>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Especialidades</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-demo-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--demo-paper)] sm:text-5xl">
Áreas clínicas que{" "}
              <span className="italic text-[var(--demo-gold)]">dominamos</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              Cada especialidad cuenta con médicos dedicados, equipamiento
              propio y tiempos de espera definidos.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 border-t border-white/[0.08]">
          {specialties.map((item, i) => (
            <Reveal key={item.n} delay={0.04 * i}>
              <li className="group flex items-center gap-6 border-b border-white/[0.08] py-6 transition-colors duration-300 hover:bg-white/[0.02] sm:gap-10 sm:py-7">
                <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--demo-gold)]/60 transition-colors group-hover:text-[var(--demo-gold)]">
                  {item.n}
                </span>
                <h3 className="min-w-0 flex-1 font-demo-serif text-2xl font-semibold tracking-tight text-[var(--demo-paper)] transition-colors group-hover:text-[var(--demo-gold)] sm:text-3xl">
                  {item.name}
                </h3>
                <p className="hidden max-w-xs text-right text-sm leading-relaxed text-white/45 md:block">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </DemoContainer>
    </section>
  );
}
