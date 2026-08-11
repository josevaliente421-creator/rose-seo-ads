"use client";

import Image from "next/image";
import { ArrowRight, CalendarClock, MessageCircle, Sparkles } from "lucide-react";
import { DemoContainer } from "@/components/demo/container";
import { DemoButton } from "@/components/demo/button";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export function FuegoCta() {
  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden rounded-t-[2.5rem] py-28 sm:py-36">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/fuego/cta.jpg"
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
              <Sparkles className="size-3" aria-hidden />
              Demo de plantilla · hecho por RoseSEO&Ads
            </p>

            <h2 className="mt-8 font-demo-serif text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[1.02] tracking-tight text-[var(--demo-paper)]">
              Tu negocio merece{" "}
              <span className="italic text-[var(--demo-gold)]">florecer</span> hoy
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              En 7 días puedes tener una presencia digital que inspire
              confianza, aparezca en Google y convierta visitas en clientes.
              Empezamos la próxima semana.
            </p>

            <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3.5 sm:w-auto sm:flex-row sm:items-center">
              <DemoButton
                size="lg"
                href={`mailto:${site.email}?subject=${encodeURIComponent(
                  "Quiero mi sitio web en 7 días",
                )}`}
                className="w-full sm:w-auto"
                data-cursor="agendar"
              >
                Agendar mi llamada gratis
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </DemoButton>
              <DemoButton
                size="lg"
                variant="outline"
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="size-4" aria-hidden />
                Escribir por WhatsApp
              </DemoButton>
            </div>

            <p className="mt-9 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
              <CalendarClock className="size-3.5" aria-hidden />
              Respuesta en menos de 24 horas · Sin compromiso
            </p>
          </div>
        </Reveal>
      </DemoContainer>
    </section>
  );
}