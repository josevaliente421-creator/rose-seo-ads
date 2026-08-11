"use client";

import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { experiencias } from "./content";

export function FuegoExperiencias() {
  return (
    <section id="experiencias" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-ink-2)] py-24 sm:py-32">
      <DemoContainer>
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/50" />
              Las experiencias
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight text-[var(--demo-paper)]">
              No vienes solamente a cenar.{" "}
              <span className="italic text-[var(--demo-gold)]">
                Vienes a vivir la noche.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {experiencias.map((exp, i) => (
            <Reveal key={exp.n} delay={0.08 * i}>
              <article
                className="group relative overflow-hidden rounded-2xl"
                data-cursor="explorar"
              >
                <Image
                  src={exp.img}
                  alt={`${exp.name} — FUEGO`}
                  width={1000}
                  height={1200}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-[var(--demo-gold)]">
                      {exp.n} — {exp.name}
                    </p>
                    <span
                      aria-hidden
                      className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-500 group-hover:border-[var(--demo-gold)] group-hover:bg-[var(--demo-gold)] group-hover:text-[#1a140c]"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M7 17L17 7M17 7H8M17 7V16" />
                      </svg>
                    </span>
                  </div>
                  <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-white/65 transition-transform duration-500 group-hover:translate-x-1">
                    {exp.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
            Experiencias demostrativas · precios y disponibilidad editables
          </p>
        </Reveal>
      </DemoContainer>
    </section>
  );
}