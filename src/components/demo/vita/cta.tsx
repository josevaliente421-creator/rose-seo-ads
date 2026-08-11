"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { DemoContainer } from "@/components/demo/container";
import { DemoButton } from "@/components/demo/button";
import { Reveal } from "@/components/motion/reveal";
import { clinic } from "./content";

export function VitaCta() {
  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden rounded-t-[2.5rem] py-28 sm:py-36">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/vita/cta.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[var(--demo-ink)]/92" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--demo-gold)]/40 to-transparent" />
      </div>

      <DemoContainer className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-[var(--demo-gold)]/30 bg-[var(--demo-gold)]/5 px-4 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--demo-gold)]">
              <span aria-hidden className="size-1.5 rounded-full bg-[var(--demo-gold)]" />
              Consultas de 30 minutos
            </p>

            <h2 className="mt-8 font-demo-serif text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[1.02] tracking-tight text-[var(--demo-paper)]">
              Tu salud merece{" "}
              <span className="italic text-[var(--demo-gold)]">tiempo.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              Agenda una consulta con un equipo que te escucha, te explica y te
              acompaña.
            </p>

            <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3.5 sm:w-auto sm:flex-row sm:items-center">
              <DemoButton
                size="lg"
                href={clinic.phoneHref}
                className="w-full sm:w-auto"
                data-cursor="agendar"
              >
                Agendar una hora
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </DemoButton>
              <DemoButton
                size="lg"
                variant="outline"
                href={clinic.whatsapp}
                className="w-full sm:w-auto"
              >
                <MessageCircle className="size-4" aria-hidden />
                Hablar por WhatsApp
              </DemoButton>
            </div>

            <p className="mt-9 font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
              Av. Isidora Goyenechea 3000 · Las Condes · Lun a Vie 08:00 – 18:00
            </p>
          </div>
        </Reveal>
      </DemoContainer>
    </section>
  );
}
