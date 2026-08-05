"use client";

import { useId, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Eyebrow } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";
import { journey, whyCards, stats } from "@/lib/data";

function JourneyCurve() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 55%"],
  });
  const draw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const uid = useId().replace(/[:]/g, "");

  const points = [
    { x: 9.2, y: 79, index: 0 },
    { x: 50, y: 35, index: 1 },
    { x: 90.8, y: 25.5, index: 2 },
  ];

  return (
    <div ref={ref} className="relative mx-auto mt-20 hidden h-[430px] w-full max-w-5xl lg:block">
      <svg
        viewBox="0 0 1200 430"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id={`${uid}-path`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--brand-dark)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="var(--brand)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d0608b" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path
          d="M 110 340 C 260 180, 420 90, 600 150 C 780 210, 930 60, 1090 110"
          stroke="var(--border)"
          strokeWidth="1.5"
        />
        <motion.path
          d="M 110 340 C 260 180, 420 90, 600 150 C 780 210, 930 60, 1090 110"
          stroke={`url(#${uid}-path)`}
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength: draw }}
        />
      </svg>

      {points.map((point) => {
        const step = journey[point.index];
        const alignLeft = point.index === 0;
        const alignRight = point.index === 2;
        return (
          <div
            key={step.title}
            className="absolute"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
          >
            <div className="-translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: point.index * 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div
                  aria-hidden
                  className="absolute -inset-5 rounded-full bg-brand/10 blur-2xl"
                />
                <span className="relative flex size-14 items-center justify-center rounded-full border border-brand-soft-2 bg-background text-brand shadow-glow">
                  <step.icon className="size-5.5" aria-hidden />
                </span>
              </motion.div>
            </div>

            <div
              className={`absolute w-64 ${
                alignLeft
                  ? "left-0 top-full mt-6 text-left"
                  : alignRight
                    ? "right-0 top-full mt-6 text-right"
                    : "left-1/2 -translate-x-1/2 bottom-full mb-6 text-center"
              }`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-brand">
                {String(point.index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function JourneyMobile() {
  return (
    <ol className="relative mt-16 space-y-12 lg:hidden">
      <div
        aria-hidden
        className="absolute left-[19px] top-2 h-full w-px bg-border"
      />
      {journey.map((step, i) => (
        <li key={step.title} className="relative pl-14">
          <span className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border border-brand-soft-2 bg-background text-brand shadow-soft">
            <step.icon className="size-4.5" aria-hidden />
          </span>
          <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-brand">
            {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-1 font-display text-xl font-bold tracking-tight">
            {step.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function Why() {
  return (
    <section id="por-que" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px hairline-gradient"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-64 top-1/3 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-brand/8 to-transparent blur-3xl"
      />

      <Container className="relative">
        <SectionHeader
          eyebrow="El recorrido"
          title={
            <>
              De semilla a <span className="text-gradient">florecimiento</span>
            </>
          }
          description="No vendemos páginas web. Vendemos la transformación de tu negocio: de invisible a inolvidable."
        />
        <JourneyCurve />
        <JourneyMobile />
      </Container>

      <Container className="relative mt-28 lg:mt-40">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <Eyebrow>Por qué Rose</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                Razones para <span className="text-gradient">elegirnos</span>
              </h2>
              <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Cada argumento de esta lista es una promesa que cumplimos con
                cada proyecto. Sin letras pequeñas.
              </p>

              <dl className="mt-10 flex flex-col gap-6 border-y border-border py-8 sm:grid sm:grid-cols-3 sm:gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-0"
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                      <CountUp
                        to={stat.value}
                        prefix={stat.prefix ?? ""}
                        suffix={stat.suffix}
                      />
                    </dd>
                    <p className="mt-0 text-right text-xs leading-snug text-muted-foreground sm:mt-1.5 sm:text-left">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </dl>

              <a
                href="#contacto"
                className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
              >
                Agenda tu llamada gratuita
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          <ol className="border-t border-border">
            {whyCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.05} blur={false}>
                <li className="group relative border-b border-border transition-colors duration-500">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative flex items-center gap-5 py-6 sm:gap-8 lg:py-9">
                    <span className="font-mono text-xs tracking-widest text-muted-foreground transition-colors duration-300 group-hover:text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      {card.title}
                    </h3>
                    <span className="ml-auto hidden size-11 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-500 group-hover:border-brand-soft-2 group-hover:bg-brand group-hover:text-white group-hover:shadow-glow sm:flex">
                      <card.icon className="size-4.5" aria-hidden />
                    </span>
                  </div>
                  <div className="max-h-40 opacity-100 transition-all duration-500 ease-out lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100">
                    <p className="relative pb-8 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
