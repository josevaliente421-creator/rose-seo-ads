"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DemoContainer } from "@/components/demo/container";
import { DemoButton } from "@/components/demo/button";
import { Reveal } from "@/components/motion/reveal";
import { ctaFinal } from "./content";
import { Humo } from "./humo";

export function FuegoCta() {
  return (
    <section id="reserva-cta" className="relative scroll-mt-24 overflow-hidden rounded-t-[2.5rem] py-28 sm:py-36">
      <motion.div aria-hidden className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/fuego/cta.jpg"
            alt="Mesa preparada con copas, velas y las brasas encendidas al fondo"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#080807]/80" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--demo-gold)]/40 to-transparent" />
      </motion.div>
      <Humo className="opacity-60" />

      <DemoContainer className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-[var(--demo-gold)]/30 bg-black/40 px-4 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--demo-gold)]">
              La noche · demo de plantilla
            </p>

            <h2 className="mt-8 font-demo-serif text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-tight text-[var(--demo-paper)]">
              {ctaFinal.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic text-[var(--demo-gold)]">
                {ctaFinal.title.split(" ").slice(-1)[0].replace(".", "")}.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-md font-demo-serif text-xl italic leading-snug text-white/65 sm:text-2xl">
              {ctaFinal.sub}
            </p>

            <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3.5 sm:w-auto sm:flex-row sm:items-center">
              <DemoButton
                size="lg"
                href="#reservas"
                className="w-full sm:w-auto"
                data-cursor="reservar"
              >
                Reservar mesa
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </DemoButton>
              <DemoButton
                size="lg"
                variant="ghost"
                href="#carta"
                className="w-full sm:w-auto"
                data-cursor="ver"
              >
                Ver la carta
              </DemoButton>
            </div>

            <p className="mt-9 font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
              Reservas recomendadas con anticipación
            </p>
          </div>
        </Reveal>
      </DemoContainer>
    </section>
  );
}