"use client";

import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { values, venue } from "./content";

export function FuegoTrust() {
  return (
    <section id="confianza" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-ink)] py-24 sm:py-32">
      <DemoContainer className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/50" />
              Transparencia
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--demo-paper)] sm:text-5xl">
              Cuando se trata de tu mesa, saber dónde comes{" "}
              <span className="italic text-[var(--demo-gold)]">importa.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55">
              Mesa visible desde la calle, precios en la carta y una
              dirección a la que puedes llegar caminando. Así de simple.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.n} delay={0.05 * i}>
                <div className="border-t border-white/[0.1] pt-6">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--demo-gold)]/70">
                    {value.n}
                  </p>
                  <h3 className="mt-2 font-demo-serif text-xl font-semibold tracking-tight text-[var(--demo-paper)]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">
              <div className="border-b border-white/[0.08] px-7 py-5">
                <p className="font-demo-serif text-xl font-semibold tracking-tight text-[var(--demo-paper)]">
                  Información de contacto
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Parrilla demostrativa
                </p>
              </div>
              <dl>
                <div className="flex items-start gap-4 border-b border-white/[0.07] px-7 py-5">
                  <dt className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--demo-gold)]/25 text-[var(--demo-gold)]">
                    <MapPin className="size-4" aria-hidden />
                  </dt>
                  <dd className="pt-1.5 text-sm leading-relaxed text-white/70">{venue.address}</dd>
                </div>
                <div className="flex items-start gap-4 border-b border-white/[0.07] px-7 py-5">
                  <dt className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--demo-gold)]/25 text-[var(--demo-gold)]">
                    <Clock className="size-4" aria-hidden />
                  </dt>
                  <dd className="space-y-1 pt-1.5 text-sm text-white/70">
                    {venue.hours.map((h) => (
                      <p key={h}>{h}</p>
                    ))}
                  </dd>
                </div>
                <div className="flex items-start gap-4 border-b border-white/[0.07] px-7 py-5">
                  <dt className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--demo-gold)]/25 text-[var(--demo-gold)]">
                    <Phone className="size-4" aria-hidden />
                  </dt>
                  <dd className="pt-1.5">
                    <a href={venue.phoneHref} className="text-sm text-white/70 transition-colors hover:text-[var(--demo-gold)]">
                      {venue.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex items-start gap-4 border-b border-white/[0.07] px-7 py-5">
                  <dt className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--demo-gold)]/25 text-[var(--demo-gold)]">
                    <Mail className="size-4" aria-hidden />
                  </dt>
                  <dd className="pt-1.5">
                    <a href={`mailto:${venue.email}`} className="text-sm text-white/70 transition-colors hover:text-[var(--demo-gold)]">
                      {venue.email}
                    </a>
                  </dd>
                </div>
                <div className="flex items-start gap-4 px-7 py-5">
                  <dt className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--demo-gold)]/25 text-[var(--demo-gold)]">
                    <MessageCircle className="size-4" aria-hidden />
                  </dt>
                  <dd className="pt-1.5">
                    <a href={venue.whatsapp} className="text-sm text-white/70 transition-colors hover:text-[var(--demo-gold)]">
                      WhatsApp: +56 9 2730 3676
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </DemoContainer>
    </section>
  );
}
