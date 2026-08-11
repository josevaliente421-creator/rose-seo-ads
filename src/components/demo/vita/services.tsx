"use client";

import { DemoContainer } from "@/components/demo/container";
import { Eyebrow } from "@/components/demo/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { services } from "./content";

export function VitaServices() {
  return (
    <section id="servicios" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />
      <DemoContainer>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Servicios</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--demo-paper)] sm:text-5xl">
              Medicina que te{" "}
              <span className="italic text-[var(--demo-gold)]">acompaña siempre</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-white/55 sm:text-lg">
              Seis servicios integrados bajo una misma filosofía: evidencia,
              tiempo de consulta y cero esperas innecesarias.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={0.05 * (i % 3)}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--demo-gold)]/35 hover:bg-white/[0.04]">
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 size-32 rounded-full bg-[var(--demo-accent-deep)]/30 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="relative flex size-12 items-center justify-center rounded-full border border-[var(--demo-gold)]/30 text-[var(--demo-gold)] transition-all duration-500 group-hover:border-[var(--demo-gold)]/70 group-hover:bg-[var(--demo-gold)]/10">
                  <service.icon className="size-5" aria-hidden />
                </span>
                <h3 className="relative mt-6 font-demo-serif text-2xl font-semibold tracking-tight text-[var(--demo-paper)]">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-white/55">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </DemoContainer>
    </section>
  );
}
