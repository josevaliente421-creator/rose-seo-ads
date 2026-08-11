"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { ubicacion } from "./content";

export function FuegoUbicacion() {
  return (
    <section id="ubicacion" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-ink-2)] py-24 sm:py-32">
      <DemoContainer className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={ubicacion.photo}
                alt={ubicacion.photoAlt}
                width={1400}
                height={1400}
                data-cursor="ver"
                className="aspect-[4/4.6] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </motion.div>
            <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 sm:rounded-3xl" />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-[#151411]/90 px-6 py-5 backdrop-blur-md sm:bottom-6 sm:left-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-[var(--demo-gold)]">
                Dress code
              </p>
              <p className="mt-1 font-demo-serif text-2xl font-semibold text-[var(--demo-paper)]">
                {ubicacion.dress.code}
              </p>
              <p className="mt-1 max-w-[34ch] text-xs leading-relaxed text-white/55">
                {ubicacion.dress.copy}
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/50" />
              {ubicacion.kicker}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight text-[var(--demo-paper)]">
              {ubicacion.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="italic text-[var(--demo-gold)]">
                {ubicacion.title.split(" ").slice(-2).join(" ")}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
              Dirección demostrativa · editable desde el contenido
            </p>
          </Reveal>

          <div className="mt-8 space-y-5">
            <Reveal delay={0.25}>
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--demo-gold)]/25 text-[var(--demo-gold)]">
                  <MapPin className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">Dirección</p>
                  <p className="mt-1 text-[15px] text-white/80">{ubicacion.address}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--demo-gold)]/25 text-[var(--demo-gold)]">
                  <Clock className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">Horarios</p>
                  {ubicacion.horarios.map((h) => (
                    <p key={h} className="mt-1 text-[15px] text-white/80">{h}</p>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--demo-gold)]/25 text-[var(--demo-gold)]">
                  <Mail className="size-4" aria-hidden />
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">Contacto</p>
                  <a
                    href={`mailto:${ubicacion.email}`}
                    className="mt-1 block text-[15px] text-white/80 transition-colors hover:text-[var(--demo-gold)]"
                  >
                    {ubicacion.email}
                  </a>
                  <a
                    href={ubicacion.telefonoHref}
                    className="mt-0.5 block text-[15px] text-white/80 transition-colors hover:text-[var(--demo-gold)]"
                  >
                    {ubicacion.telefono}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <p className="mt-8 max-w-md border-l-2 border-[var(--demo-gold)]/40 pl-5 text-sm leading-relaxed text-[var(--demo-muted)]">
              {ubicacion.estacionamiento}
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--demo-gold)]/25 text-[var(--demo-gold)]">
                <Phone className="size-4" aria-hidden />
              </span>
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
                Reservas por teléfono en horario de atención
              </p>
            </div>
          </Reveal>
        </div>
      </DemoContainer>
    </section>
  );
}