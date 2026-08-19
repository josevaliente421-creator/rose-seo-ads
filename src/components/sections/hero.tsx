"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassRose } from "@/components/mockup/glass-rose";
import { TextReveal } from "@/components/motion/text-reveal";
import { Magnetic } from "@/components/motion/magnetic";

function EditorialAnnotation({
  number,
  title,
  subtitle,
  className,
  delay = 0,
  align = "left",
}: {
  number: string;
  title: string;
  subtitle: string;
  className?: string;
  delay?: number;
  align?: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <div
        className={`group relative flex flex-col gap-1 transition-transform duration-300 hover:scale-[1.02] ${
          align === "right" ? "items-end text-right" : "items-start text-left"
        }`}
      >
        <span className="font-mono text-[10px] tracking-[0.25em] text-brand/80 font-medium">
          [{number}]
        </span>
        <p className="font-display text-xs font-bold tracking-wider uppercase text-foreground/90">
          {title}
        </p>
        <p className="font-sans text-[11px] text-muted-foreground leading-tight max-w-[140px]">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const roseY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 20 });
  const sy = useSpring(my, { stiffness: 45, damping: 20 });

  function onMouseMove(e: React.MouseEvent) {
    if (reduce) return;
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 14);
    my.set((e.clientY / innerHeight - 0.5) * 14);
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen flex-col overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-noise opacity-35 dark:opacity-20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[58rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand/10 to-transparent blur-3xl"
      />

      <Container className="relative z-10 grid flex-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left Column: Editorial Copy */}
        <motion.div style={{ y: textY, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge className="mb-8 gap-2 bg-brand/5 border-brand/20 text-brand">
              <span aria-hidden className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
              </span>
              De semilla a florecimiento · Tu presencia digital
            </Badge>
          </motion.div>

          <h1 className="font-display text-[clamp(2.8rem,6.8vw,5.8rem)] font-bold leading-[1.03] tracking-tight text-balance">
            <TextReveal text="Tu negocio" delay={0.1} />
            <TextReveal text="online, listo" delay={0.3} />
            <span className="inline-flex items-baseline">
              <TextReveal text="en " delay={0.45} />
              <span className="text-gradient">
                <TextReveal text="7 días." delay={0.5} />
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Sitios web premium que convierten visitantes en clientes.
            Diseño artesanal, desarrollo a medida y SEO desde el lanzamiento — sin excusas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center"
          >
            <Magnetic className="w-full sm:w-auto">
              <Button size="lg" className="w-full justify-center sm:w-auto" asChild>
                <a href="#contacto">
                  Quiero mi sitio web
                  <ArrowRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </Magnetic>
            <Button size="lg" variant="secondary" className="w-full justify-center sm:w-auto" asChild>
              <a href="#trabajos">Ver trabajos</a>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted-foreground"
          >
            {["Diseño exclusivo", "SEO incluido", "Soporte dedicado"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-brand" aria-hidden />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* Mobile Rose View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-12 flex justify-center sm:hidden"
            aria-hidden
          >
            <div className="relative h-64 w-64">
              <GlassRose className="h-full w-full" variant="hero" interactive={false} />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Editorial Botanical Rose Art Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-[420px] items-center justify-center sm:flex lg:max-w-[560px]"
        >
          {/* Subtle Ambient Circular Orbit Hairline */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-8 rounded-full border border-border/40 dark:border-white/5 opacity-70"
          />

          <motion.div style={{ x: sx, y: sy }} className="relative h-full w-full">
            {/* The Botanical Rose Centerpiece */}
            <motion.div
              style={{ y: roseY }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative h-[86%] w-[86%]">
                <GlassRose className="h-full w-full" variant="hero" interactive={true} />
              </div>
            </motion.div>

            {/* Editorial Hairline Connectors & Annotations */}
            {/* Top Left: 100% Responsive */}
            <EditorialAnnotation
              number="01"
              title="100% Responsive"
              subtitle="Rendimiento fluido y perfecto en móvil y desktop"
              align="left"
              delay={1.2}
              className="absolute -left-2 top-[12%]"
            />

            {/* Top Right: Entrega en 7 días */}
            <EditorialAnnotation
              number="02"
              title="Entrega en 7 Días"
              subtitle="Lanzamiento puntual garantizado sin demoras"
              align="right"
              delay={1.4}
              className="absolute -right-2 top-[18%]"
            />

            {/* Bottom Left: Diseño a Medida */}
            <EditorialAnnotation
              number="03"
              title="Diseño a Medida"
              subtitle="Dirección de arte única para tu marca"
              align="left"
              delay={1.6}
              className="absolute -left-2 bottom-[14%]"
            />

            {/* Bottom Right: SEO desde el día 1 */}
            <EditorialAnnotation
              number="04"
              title="SEO Estructural"
              subtitle="Preparado para posicionar en Google desde el inicio"
              align="right"
              delay={1.8}
              className="absolute -right-2 bottom-[14%]"
            />
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mt-16 flex justify-center lg:mt-6"
      >
        <motion.a
          href="#clientes"
          aria-label="Bajar a la siguiente sección"
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-brand"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
            Scroll
          </span>
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
