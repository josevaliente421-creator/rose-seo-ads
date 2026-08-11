"use client";

import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { acompanamiento } from "./content";

export function VitaAcompanamiento() {
  return (
    <section id="acompanamiento" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-ink)] py-24 sm:py-32">
      <DemoContainer>
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/50" />
              Cómo acompañamos
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--demo-paper)] sm:text-5xl">
              El acompañamiento continúa{" "}
              <span className="italic text-[var(--demo-gold)]">después de la consulta.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg">
              No resolvemos una duda y desaparecemos. Nos quedamos hasta que tu
              objetivo se cumpla.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-white/[0.08]">
          {acompanamiento.map((item, i) => (
            <Reveal key={item.n} delay={0.06 * i}>
              <article className="group grid gap-8 border-b border-white/[0.08] py-12 sm:py-14 lg:grid-cols-[7rem_1fr_1.2fr] lg:gap-12">
                <span
                  aria-hidden
                  className="font-demo-serif text-6xl font-semibold leading-none text-white/[0.1] transition-colors duration-500 group-hover:text-[var(--demo-gold)]/25 sm:text-7xl"
                >
                  {item.n}
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--demo-gold)]">
                    {item.kind}
                  </p>
                  <h3 className="mt-3 font-demo-serif text-2xl font-semibold leading-[1.1] tracking-tight text-[var(--demo-paper)] sm:text-3xl">
                    {item.title}
                  </h3>
                </div>
                <p className="max-w-lg text-[15px] leading-relaxed text-white/55">
                  {item.story}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
            Historias demostrativas · no publicamos resultados clínicos
          </p>
        </Reveal>
      </DemoContainer>
    </section>
  );
}
