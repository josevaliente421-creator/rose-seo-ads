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
import { ArrowRight, BadgeCheck, TrendingUp, Gauge, Timer } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassRose } from "@/components/mockup/glass-rose";
import { TextReveal } from "@/components/motion/text-reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { CountUp } from "@/components/motion/count-up";

function FloatingCard({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <div className="animate-float" style={{ animationDelay: `${delay}s` }}>
        {children}
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
  const roseY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  function onMouseMove(e: React.MouseEvent) {
    if (reduce) return;
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 18);
    my.set((e.clientY / innerHeight - 0.5) * 18);
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
        className="pointer-events-none absolute inset-0 bg-noise opacity-40 dark:opacity-20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand/12 to-transparent blur-3xl"
      />

      <Container className="relative z-10 grid flex-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div style={{ y: textY, opacity }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge className="mb-8">
              <span aria-hidden className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
              </span>
              Agenda abierta · 2 cupos este mes
            </Badge>
          </motion.div>

          <h1 className="font-display text-[clamp(2.9rem,7vw,6rem)] font-bold leading-[1.02] tracking-tight text-balance">
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
            Diseño, desarrollo y SEO en una sola semana — sin excusas.
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
            {["Diseño a medida", "SEO incluido", "Soporte 24h"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-brand" aria-hidden />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-14 flex justify-center sm:hidden"
            aria-hidden
          >
            <div
              aria-hidden
              className="absolute top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-gradient-to-b from-brand/14 to-transparent blur-2xl"
            />
            <GlassRose className="h-40 w-40" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-[360px] items-center justify-center sm:flex lg:max-w-[520px]"
        >
          <motion.div style={{ x: sx, y: sy }} className="relative h-full w-full">
            <motion.div style={{ y: roseY }} className="absolute inset-0 flex items-center justify-center">
              <GlassRose className="h-[72%] w-[72%]" />
            </motion.div>

            <FloatingCard delay={1.1} className="absolute left-0 top-[16%]">
              <div className="glass flex items-center gap-3 rounded-2xl border border-border px-4 py-3 shadow-soft">
                <span className="flex size-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <TrendingUp className="size-4.5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-lg font-bold leading-none">
                    +<CountUp to={38} suffix="%" />
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    más conversión
                  </p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={1.35} className="absolute right-0 top-[38%]">
              <div className="glass flex items-center gap-3 rounded-2xl border border-border px-4 py-3 shadow-soft">
                <span className="flex size-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Timer className="size-4.5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-lg font-bold leading-none">7 días</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    entrega garantizada
                  </p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={1.6} className="absolute bottom-[8%] left-[10%]">
              <div className="glass flex items-center gap-3 rounded-2xl border border-border px-4 py-3 shadow-soft">
                <span className="flex size-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Gauge className="size-4.5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-lg font-bold leading-none">
                    <CountUp to={98} suffix="/100" />
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Performance
                  </p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={1.85} className="absolute right-[6%] bottom-[22%]">
              <div className="glass flex items-center gap-3 rounded-2xl border border-border px-4 py-3 shadow-soft">
                <span className="flex size-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <BadgeCheck className="size-4.5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-lg font-bold leading-none">SEO</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    desde el día 1
                  </p>
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        </motion.div>
      </Container>

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
