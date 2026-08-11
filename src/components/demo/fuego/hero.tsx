"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { DemoButton } from "@/components/demo/button";
import { hero } from "./content";
import { Humo } from "./humo";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FuegoHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const photoScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.14]);
  const darken = useTransform(scrollYProgress, [0, 0.7], [0, reduce ? 0 : 0.55]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!ready && v > 0.001) setReady(true);
  });

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#080807]"
    >
      <Humo className="opacity-70" />

      <motion.div
        aria-hidden
        initial={reduce ? undefined : { opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 0.9, 0.6], scale: [0.4, 1.6, 2.1] }}
        transition={{ duration: 1.6, ease: "easeOut", times: [0, 0.55, 1] }}
        className="absolute bottom-[16%] left-1/2 h-[34vh] w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(233,138,54,0.55)_0%,rgba(150,54,28,0.35)_38%,transparent_72%)] blur-2xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.75, duration: 1.1, ease: "easeInOut" }}
        className="absolute inset-0 z-20 bg-[#080807]"
      />

      <motion.div style={{ scale: photoScale }} className="absolute inset-0 will-change-transform">
        <Image
          src="/fuego/brasa.jpg"
          alt="Brasas de quebracho encendidas con llamas bajas y humo, listas para la parrilla"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          data-cursor="explorar"
        />
        <div aria-hidden className="absolute inset-0 bg-black/45" />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#080807] via-[#080807]/60 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent"
        />
        <motion.div
          aria-hidden
          style={{ opacity: darken }}
          className="absolute inset-0 bg-[#080807]"
        />
      </motion.div>

      <DemoContainer className="relative z-10 flex flex-1 flex-col items-start justify-end pb-28 pt-36 sm:pb-32 lg:pb-36">
        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: EASE }}
          className="flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--demo-gold)]"
        >
          <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/60" />
          {hero.kicker} · {hero.kickerSub}
        </motion.p>

        <h1 className="mt-6 font-demo-serif text-[clamp(2.9rem,8vw,6.2rem)] font-semibold leading-[0.98] tracking-tight text-[var(--demo-paper)]">
          <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
            <motion.span
              initial={reduce ? undefined : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.05, duration: 1, ease: EASE }}
              className="block will-change-transform"
            >
              {hero.titleA}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
            <motion.span
              initial={reduce ? undefined : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.25, duration: 1, ease: EASE }}
              className="block italic text-[var(--demo-gold)] will-change-transform"
            >
              {hero.titleB}
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.75, duration: 0.9, ease: EASE }}
          className="mt-6 max-w-md text-base leading-relaxed text-white/65 sm:text-lg"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.9, ease: EASE }}
          className="mt-10 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center"
        >
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
            Explorar la carta
          </DemoButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1.2 }}
          className="mt-12 flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.24em] text-white/35"
        >
          <motion.span
            animate={reduce ? undefined : { opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
            className="size-1.5 rounded-full bg-[var(--demo-accent-deep)]"
          />
          Sitio demostrativo · restaurante ficticio
        </motion.p>
      </DemoContainer>
    </section>
  );
}