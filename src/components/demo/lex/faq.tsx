"use client";

import { DemoContainer } from "@/components/demo/container";
import { Eyebrow } from "@/components/demo/eyebrow";
import { DemoAccordion } from "@/components/demo/accordion";
import { Reveal } from "@/components/motion/reveal";
import { faqs } from "./content";

export function LexFaq() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />
      <DemoContainer className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <Eyebrow>Preguntas frecuentes</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#f6f1ea] sm:text-5xl">
              Lo que todo cliente{" "}
              <span className="italic text-[var(--demo-gold)]">pregunta antes</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">
              ¿Tienes otra pregunta? Escríbenos: la primera consulta no tiene
              costo.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <DemoAccordion items={faqs} />
        </Reveal>
      </DemoContainer>
    </section>
  );
}
