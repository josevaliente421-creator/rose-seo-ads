"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { DemoButton } from "@/components/demo/button";

const copy = "La brasa que se siente en la mesa.";

function Words({
  text,
  delay,
}: {
  text: string;
  delay: number;
}) {
  const words = text.split(" ");
  return (
    <span className="block">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block will-change-transform"
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function FloatChip({
  label,
  value,
  className,
  depth,
  mouseX,
  mouseY,
  delay,
}: {
  label: string;
  value: string;
  className: string;
  depth: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  delay: number;
}) {
  const reduce = useReducedMotion();
  const x = useTransform(mouseX, [-0.5, 0.5], [depth * 10, -depth * 10]);
  const y = useTransform(mouseY, [-0.5, 0.5], [depth * 7, -depth * 7]);

  return (
    <motion.div
      style={{ x, y }}
      initial={reduce ? undefined : { opacity: 0, y: 24, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`pointer-events-none absolute z-20 ${className}`}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 5 + depth, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-xl border border-white/10 bg-black/35 px-3.5 py-2.5 backdrop-blur-md sm:px-4"
      >
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/45">{label}</p>
        <p className="mt-0.5 flex items-center gap-1.5 font-demo-serif text-sm font-semibold text-[var(--demo-paper)]">
          <span aria-hidden className="size-1 rounded-full bg-[var(--demo-gold)]" />
          {value}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function FuegoHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mouseX = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden pt-[72px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--demo-gold)]/30 to-transparent"
      />

      <DemoContainer className="grid min-h-[calc(100vh-72px)] items-center gap-16 pb-16 pt-10 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:pb-24 lg:pt-16">
        <motion.div style={{ y: textY, opacity }} className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]"
          >
            <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/60" />
            Parrilla contemporánea · Santiago
          </motion.p>

          <h1 className="mt-7 font-demo-serif text-[clamp(2.8rem,6.5vw,5rem)] font-semibold leading-[1.02] tracking-tight text-[var(--demo-paper)]">
            <Words text={copy} delay={0.2} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-md text-lg leading-relaxed text-white/60"
          >
            Maduramos despacio, encendemos temprano y servimos
            cortes que no encontrarás en otro lado de la ciudad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center"
          >
            <DemoButton size="lg" href="#contacto" className="w-full sm:w-auto" data-cursor="agendar">
              Reservar una mesa
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </DemoButton>
            <DemoButton size="lg" variant="outline" href="#historia" className="w-full sm:w-auto">
              Conocer la carta
            </DemoButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-12 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35"
          >
            <span aria-hidden className="h-px w-6 bg-white/20" />
            Cortes madurados en casa, siempre
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <motion.div style={{ y: photoY }} className="relative">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src="/fuego/hero.jpg"
                alt="Costillas a la parrilla con humo recién salidas del fuego"
                width={1400}
                height={1400}
                priority
                data-cursor="ver"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/5.4]"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 sm:rounded-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent"
              />
            </div>

            <FloatChip
              label="Reserva"
              value="20:30"
              depth={1}
              mouseX={mouseX}
              mouseY={mouseY}
              delay={1.1}
              className="-left-3 top-10 sm:-left-8"
            />
            <FloatChip
              label="Tu mesa hoy"
              value="Mesa para 4, junto a la parrilla"
              depth={1.8}
              mouseX={mouseX}
              mouseY={mouseY}
              delay={1.3}
              className="right-3 top-1/3 sm:right-2"
            />
            <FloatChip
              label="La brasa"
              value="12 min para el corte"
              depth={0.7}
              mouseX={mouseX}
              mouseY={mouseY}
              delay={1.45}
              className="-bottom-4 left-8 sm:left-12"
            />
            <FloatChip
              label="Bienvenida"
              value="Pisco sour de la casa"
              depth={1.4}
              mouseX={mouseX}
              mouseY={mouseY}
              delay={1.6}
              className="-bottom-4 right-8 hidden sm:block"
            />
          </motion.div>
        </motion.div>
      </DemoContainer>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mt-2 flex justify-center pb-8"
      >
        <motion.a
          href="#experiencia"
          aria-label="Bajar a la experiencia"
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/35 transition-colors hover:text-[var(--demo-gold)]"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Explorar</span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-current p-1">
            <motion.span
              animate={reduce ? undefined : { y: [0, 10, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="size-1.5 rounded-full bg-current"
            />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
