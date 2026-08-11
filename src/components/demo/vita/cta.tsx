"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { DemoContainer } from "@/components/demo/container";
import { DemoButton } from "@/components/demo/button";
import { EditorialTexture } from "@/components/demo/scenes";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export function VitaCta() {
  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32 lg:py-40">
      <EditorialTexture tone="teal" className="absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--demo-gold)]/40 to-transparent"
      />

      <DemoContainer className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-[var(--demo-gold)]/30 bg-[var(--demo-gold)]/5 px-4 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--demo-gold)]">
              <Sparkles className="size-3" aria-hidden />
              Demo de plantilla · VITA Clínica
            </p>

            <h2 className="mt-8 font-demo-serif text-4xl font-semibold leading-[1.06] tracking-tight text-[var(--demo-paper)] sm:text-5xl lg:text-6xl">
              Una clínica moderna merece una presencia digital{" "}
              <span className="italic text-[var(--demo-gold)]">a la altura</span>.
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              Este sitio es una demostración creada por RoseSEO&Ads para mostrar
              cómo convertimos una clínica tradicional en una marca digital
              premium.
            </p>

            <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3.5 sm:w-auto sm:flex-row sm:items-center">
              <DemoButton size="lg" href={`${site.url}/#contacto`} className="w-full sm:w-auto">
                Quiero una web como esta
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </DemoButton>
              <DemoButton size="lg" variant="ghost" href="/" className="w-full sm:w-auto">
                Volver a RoseSEO&Ads
              </DemoButton>
            </div>

            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.24em] text-white/30">
              Agenda tu primera hora en menos de 24 horas
            </p>
          </div>
        </Reveal>
      </DemoContainer>
    </section>
  );
}
