"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DemoContainer } from "@/components/demo/container";
import { Eyebrow } from "@/components/demo/eyebrow";
import { DemoButton } from "@/components/demo/button";
import { FacadeScene } from "@/components/demo/scenes";
import { CountUp } from "@/components/motion/count-up";

const stats = [
  { value: 900, prefix: "+", label: "casos asesorados" },
  { value: 98, suffix: "%", label: "satisfacción de clientes" },
  { value: 15, suffix: " años", label: "de experiencia" },
];

function MaskedLine({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className={className}>
      <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
        <motion.span
          initial={{ y: "105%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
          className="block will-change-transform"
        >
          {children}
        </motion.span>
      </span>
    </span>
  );
}

export function LexHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pt-[72px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 h-[32rem] w-[40rem] rounded-full bg-[var(--demo-burgundy)]/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--demo-gold)]/30 to-transparent"
      />

      <DemoContainer className="grid min-h-[calc(100vh-72px)] items-center gap-14 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-24 lg:pt-20">
        <motion.div style={{ y: textY, opacity }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow>Estudio jurídico · Derecho Corporativo</Eyebrow>
          </motion.div>

          <h1 className="mt-7 font-demo-serif text-[clamp(2.6rem,6vw,4.6rem)] font-semibold leading-[1.04] tracking-tight text-[#f6f1ea]">
            <MaskedLine delay={0.15}>La tranquilidad legal</MaskedLine>
            <MaskedLine delay={0.28}>comienza con una</MaskedLine>
            <MaskedLine delay={0.41} className="text-[var(--demo-gold)]">
              buena estrategia.
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/60"
          >
            Asesoramos empresas, emprendedores y organizaciones con soluciones
            jurídicas claras, rápidas y orientadas a resultados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center"
          >
            <DemoButton size="lg" href="#contacto" className="w-full sm:w-auto">
              Agendar reunión
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </DemoButton>
            <DemoButton size="lg" variant="outline" href="#servicios" className="w-full sm:w-auto">
              Ver áreas de práctica
            </DemoButton>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.9 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-white/[0.08] pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-demo-serif text-3xl font-semibold tracking-tight text-[#f6f1ea] sm:text-4xl">
                  <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </dd>
                <dd className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <motion.div style={{ y: sceneY }} className="relative">
            <FacadeScene className="aspect-[4/5] w-full rounded-2xl" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 backdrop-blur">
              <span aria-hidden className="size-1.5 rounded-full bg-[var(--demo-gold)]" />
              Av. Apoquindo 4800 · Santiago
            </div>
          </motion.div>
        </motion.div>
      </DemoContainer>

      <div className="lg:hidden">
        <FacadeScene className="mx-6 aspect-[4/3] rounded-2xl sm:mx-10" />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mt-12 flex justify-center pb-10 lg:mt-6"
      >
        <motion.a
          href="#servicios"
          aria-label="Bajar a servicios"
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-[var(--demo-gold)]"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.28em]">Explorar</span>
          <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-current p-1">
            <motion.span
              animate={reduce ? undefined : { y: [0, 10, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="size-1.5 rounded-full bg-current"
            />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
