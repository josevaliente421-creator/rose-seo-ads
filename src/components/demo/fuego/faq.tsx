"use client";

import { DemoContainer } from "@/components/demo/container";
import { DemoAccordion } from "@/components/demo/accordion";
import { Reveal } from "@/components/motion/reveal";
import { faqs } from "./content";

export function FuegoFaq() {
  return (
    <section id="faq" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-paper)] py-24 text-[var(--demo-ink)] sm:py-32">
      <DemoContainer className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-accent-deep)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-accent-deep)]/50" />
              Preguntas frecuentes
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl">
              Lo que todo comensal{" "}
              <span className="italic text-[var(--demo-accent-deep)]">pregunta antes</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[var(--demo-ink)]/60">
              ¿Tienes otra pregunta? Escríbenos por{" "}
              <a
                href="https://wa.me/56927303676"
                className="text-[var(--demo-accent-deep)] underline decoration-[var(--demo-accent-deep)]/30 underline-offset-4 transition-colors hover:decoration-[var(--demo-accent-deep)]"
              >
                WhatsApp
              </a>
              , te respondemos en horario de atención.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <DemoAccordion items={faqs} tone="light" />
        </Reveal>
      </DemoContainer>
    </section>
  );
}
