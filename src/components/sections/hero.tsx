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
import {
  ArrowRight,
  Sprout,
  TrendingUp,
  Sparkles,
  Timer,
  Rocket,
  LineChart,
  Smartphone,
  ChevronDown,
  Flower2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GlassRose } from "@/components/mockup/glass-rose";
import { Magnetic } from "@/components/motion/magnetic";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const roseY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 20 });
  const sy = useSpring(my, { stiffness: 45, damping: 20 });

  function onMouseMove(e: React.MouseEvent) {
    if (reduce) return;
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 12);
    my.set((e.clientY / innerHeight - 0.5) * 12);
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-14"
    >
      {/* Background Subtle Noise & Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-noise opacity-30 dark:opacity-15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[64rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand/12 via-brand-soft/20 to-transparent blur-3xl"
      />

      <Container className="relative z-10 flex-1 flex flex-col justify-center">
        {/* Main Stage Grid: Narrative on Left, Rose Centerpiece with 3 Journey Cards */}
        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-6 min-h-[560px]">
          {/* Left Column: Editorial Headline & Transformation Message */}
          <motion.div style={{ y: textY, opacity }} className="relative z-20 max-w-xl">
            {/* Tag Capsule */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/5 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase text-brand shadow-xs"
            >
              <Flower2 className="size-3.5" aria-hidden />
              EL RECORRIDO
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-[clamp(2.6rem,5.2vw,4.4rem)] font-bold leading-[1.06] tracking-tight text-foreground"
            >
              De semilla a{" "}
              <span className="font-serif italic font-normal text-brand block sm:inline">
                florecimiento
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              No vendemos páginas web. Vendemos la transformación de tu negocio: de{" "}
              <strong className="font-semibold text-foreground">invisible</strong> a{" "}
              <strong className="font-semibold text-brand">inolvidable</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center"
            >
              <Magnetic className="w-full sm:w-auto">
                <Button size="lg" className="w-full justify-center sm:w-auto shadow-lift" asChild>
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
          </motion.div>

          {/* Right/Center Arena: 3D Sculpted Rose + 3 Journey Step Cards with Hairline Pointers */}
          <div className="relative flex items-center justify-center min-h-[480px] lg:min-h-[580px]">
            {/* 3D Rose Centerpiece */}
            <motion.div
              style={{ x: sx, y: sy }}
              className="relative aspect-square w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] flex items-center justify-center"
            >
              <motion.div
                style={{ y: roseY }}
                className="relative h-full w-full flex items-center justify-center"
              >
                <GlassRose className="h-[90%] w-[90%]" variant="hero" interactive={true} />
              </motion.div>

              {/* ── CARD 01: HOY (Top-Right) ───────────────────────── */}
              <motion.div
                initial={{ opacity: 0, x: 25, y: -15 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -right-2 top-0 sm:right-0 sm:top-4 z-30 max-w-[210px] sm:max-w-[240px]"
              >
                {/* Hairline Pointer Line to Rose Core */}
                <div
                  aria-hidden
                  className="hidden lg:block absolute -left-12 top-1/2 w-12 h-px bg-gradient-to-l from-brand/40 to-brand/70"
                >
                  <span className="absolute -left-1 -top-[3px] size-2 rounded-full bg-brand shadow-[0_0_8px_rgba(122,31,61,0.8)]" />
                </div>

                <div className="glass-card flex items-start gap-3 rounded-2xl p-4 shadow-lift border border-border/80 dark:border-white/10 bg-card/85 backdrop-blur-xl">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-xs">
                    <Sprout className="size-4.5" aria-hidden />
                  </span>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-semibold">
                      01
                    </span>
                    <h2 className="font-display text-sm font-bold text-foreground">
                      Hoy
                    </h2>
                    <p className="mt-1 text-xs text-muted-foreground leading-snug">
                      Sin presencia digital, poca confianza y oportunidades perdidas.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ── CARD 02: ROSE SEO & ADS (Mid/Bottom-Left) ────────── */}
              <motion.div
                initial={{ opacity: 0, x: -25, y: 15 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -left-2 bottom-6 sm:left-0 sm:bottom-12 z-30 max-w-[220px] sm:max-w-[250px]"
              >
                {/* Hairline Pointer Line to Rose Mid-Petals */}
                <div
                  aria-hidden
                  className="hidden lg:block absolute -right-12 top-1/2 w-12 h-px bg-gradient-to-r from-brand/40 to-brand/70"
                >
                  <span className="absolute -right-1 -top-[3px] size-2 rounded-full bg-brand shadow-[0_0_8px_rgba(122,31,61,0.8)]" />
                </div>

                <div className="glass-card flex items-start gap-3 rounded-2xl p-4 shadow-lift border border-border/80 dark:border-white/10 bg-card/85 backdrop-blur-xl">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-xs">
                    <TrendingUp className="size-4.5" aria-hidden />
                  </span>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-semibold">
                      02
                    </span>
                    <h2 className="font-display text-sm font-bold text-foreground">
                      Rose SEO & Ads
                    </h2>
                    <p className="mt-1 text-xs text-muted-foreground leading-snug">
                      Diseño estratégico, desarrollo en 7 días y optimización para convertir.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ── CARD 03: MAÑANA (Bottom-Right) ──────────────────── */}
              <motion.div
                initial={{ opacity: 0, x: 25, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -right-2 bottom-0 sm:right-2 sm:bottom-4 z-30 max-w-[210px] sm:max-w-[240px]"
              >
                {/* Hairline Pointer Line to Rose Outer Bloom */}
                <div
                  aria-hidden
                  className="hidden lg:block absolute -left-12 top-1/2 w-12 h-px bg-gradient-to-l from-brand/40 to-brand/70"
                >
                  <span className="absolute -left-1 -top-[3px] size-2 rounded-full bg-brand shadow-[0_0_8px_rgba(122,31,61,0.8)]" />
                </div>

                <div className="glass-card flex items-start gap-3 rounded-2xl p-4 shadow-lift border border-border/80 dark:border-white/10 bg-card/85 backdrop-blur-xl">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-xs">
                    <Sparkles className="size-4.5" aria-hidden />
                  </span>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brand font-semibold">
                      03
                    </span>
                    <h2 className="font-display text-sm font-bold text-foreground">
                      Mañana
                    </h2>
                    <p className="mt-1 text-xs text-muted-foreground leading-snug">
                      Una marca que inspira confianza, destaca y está lista para crecer.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ── BOTTOM DOCK: 4 PILARES EDITORIALES ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 mt-14 sm:mt-16 mx-auto w-full max-w-4xl"
        >
          <div className="glass-card grid grid-cols-2 gap-4 rounded-3xl border border-border/80 dark:border-white/10 bg-card/80 p-4 shadow-soft sm:grid-cols-4 sm:p-5 backdrop-blur-xl">
            {/* Pillar 1: 7 Días */}
            <div className="flex items-center gap-3.5 px-2">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <Timer className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-display text-sm font-bold leading-tight">7 DÍAS</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Entrega garantizada
                </p>
              </div>
            </div>

            {/* Pillar 2: Diseño Premium */}
            <div className="flex items-center gap-3.5 px-2 border-l border-border/40">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <Rocket className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-display text-sm font-bold leading-tight">DISEÑO</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Premium a medida
                </p>
              </div>
            </div>

            {/* Pillar 3: SEO Incluido */}
            <div className="flex items-center gap-3.5 px-2 border-l-0 sm:border-l border-border/40">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <LineChart className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-display text-sm font-bold leading-tight">SEO</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Incluido desde día 1
                </p>
              </div>
            </div>

            {/* Pillar 4: 100% Responsive */}
            <div className="flex items-center gap-3.5 px-2 border-l border-border/40">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <Smartphone className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-display text-sm font-bold leading-tight">100%</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Responsive & rápido
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── BOTTOM SCROLL CTA ────────────────────────────────────────── */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 mt-10 sm:mt-12 flex justify-center"
        >
          <motion.a
            href="#clientes"
            aria-label="Bajar a descubrir más"
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="group flex flex-col items-center gap-1.5 text-muted-foreground transition-colors hover:text-brand"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] font-medium text-brand/80 group-hover:text-brand">
              Descubre cómo podemos hacer florecer tu negocio
            </span>
            <ChevronDown className="size-4 text-brand/70 group-hover:text-brand transition-transform group-hover:translate-y-0.5" />
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
