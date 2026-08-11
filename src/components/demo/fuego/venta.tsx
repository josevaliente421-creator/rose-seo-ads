"use client";

import { ArrowRight, CalendarClock, MessageCircle, Sparkles } from "lucide-react";
import { DemoContainer } from "@/components/demo/container";
import { DemoButton } from "@/components/demo/button";
import { Reveal } from "@/components/motion/reveal";
import { venta } from "./content";
import { site } from "@/lib/site";

export function FuegoVenta() {
  return (
    <section id="venta" className="relative scroll-mt-24 bg-[#080807] py-16 sm:py-20">
      <DemoContainer className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-[var(--demo-gold)]/30 bg-[var(--demo-gold)]/5 px-4 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--demo-gold)]">
              <Sparkles className="size-3" aria-hidden />
              Demo de plantilla · hecho por RoseSEO&Ads
            </p>

            <h2 className="mt-8 font-demo-serif text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.04] tracking-tight text-[var(--demo-paper)]">
              {venta.titleA}{" "}
              <span className="italic text-[var(--demo-gold)]">{venta.titleB}</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--demo-muted)] sm:text-lg">
              {venta.copy}
            </p>

            <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-3.5 sm:w-auto sm:flex-row sm:items-center">
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

            <p className="mt-8 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
              <CalendarClock className="size-3.5" aria-hidden />
              {venta.note}
            </p>
          </div>
        </Reveal>
      </DemoContainer>
    </section>
  );
}