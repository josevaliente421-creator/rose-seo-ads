"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ShoppingCart, Play, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { templates, templateCategories, type Template } from "@/lib/data";
import { cn } from "@/lib/utils";

function Cover({
  template,
  className,
}: {
  template: Template;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        template.gradient,
        className,
      )}
    >
      {template.image ? (
        <div className="absolute inset-0">
          <Image
            src={template.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 92vw, 640px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="bg-noise absolute inset-0 opacity-20" />
      )}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}

function FeaturedTemplate({ template }: { template: Template }) {
  return (
    <motion.article
      key={template.id}
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex h-full min-h-[480px] flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-card shadow-lift lg:min-h-[560px]"
    >
      <Cover template={template} className="absolute inset-0" />
      <div className="bg-noise absolute inset-0 opacity-10" />

      <div className="relative flex items-start justify-between p-7 sm:p-9">
        <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur">
          Destacado · {template.industry}
        </span>
        {template.highlight ? (
          <span className="rounded-full bg-white px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark">
            Popular
          </span>
        ) : null}
      </div>

      <div className="relative p-7 sm:p-9">
        <h3 className="font-display text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
          {template.name}
        </h3>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-white/80">
          {template.pages} · {template.seo}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <p className="font-display text-4xl font-bold text-white">
            ${template.price}
            <span className="ml-1.5 text-base font-medium text-white/70">
              USD · pago único
            </span>
          </p>
          <div className="flex gap-3">
            <a
              href="#contacto"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold text-brand-dark transition-all hover:bg-rose-50"
            >
              <ShoppingCart className="size-4" aria-hidden />
              Comprar
            </a>
            {template.demo ? (
              <a
                href={template.demo}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 text-[15px] font-medium text-white backdrop-blur transition-all hover:bg-white/20"
              >
                <Play className="size-4" aria-hidden />
                Ver demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function TemplateRow({ template }: { template: Template }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex items-center gap-5 border-b border-border py-5 transition-colors duration-300 hover:bg-brand-soft/40 sm:gap-6"
    >
      <div
        className={cn(
          "relative flex aspect-[4/3] w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br sm:w-24",
          template.gradient,
        )}
        aria-hidden
      >
        {template.image ? (
          <Image
            src={template.image}
            alt=""
            fill
            sizes="96px"
            className="object-cover object-top"
          />
        ) : (
          <span className="font-display text-lg font-bold text-white/90 drop-shadow">
            {template.name[0]}
          </span>
        )}
      </div>
      <div className="min-w-0">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          {template.name}
          {template.highlight ? (
            <span className="rounded-full bg-brand-soft px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-brand">
              Top
            </span>
          ) : null}
        </h3>
        <p className="mt-0.5 truncate text-sm text-muted-foreground">
          {template.industry} · {template.pages}
        </p>
      </div>
      <div className="ml-auto flex shrink-0 items-center gap-4">
        <p className="hidden font-display text-xl font-bold tracking-tight sm:block">
          ${template.price}
          <span className="ml-1 text-xs font-medium text-muted-foreground">USD</span>
        </p>
        {template.demo ? (
          <a
            href={template.demo}
            aria-label={`Ver demo de ${template.name}`}
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-brand-soft-2 hover:bg-brand-soft hover:text-brand"
          >
            <Play className="size-3.5" aria-hidden />
          </a>
        ) : null}
        <a
          href="#contacto"
          aria-label={`Comprar ${template.name}`}
          className="flex h-10 items-center gap-1.5 rounded-full bg-brand-dark px-4.5 text-sm font-medium text-white transition-all hover:bg-brand"
        >
          <ShoppingCart className="size-3.5" aria-hidden />
          <span className="hidden sm:inline">Comprar</span>
        </a>
      </div>
    </motion.li>
  );
}

export function Marketplace() {
  const [active, setActive] = React.useState<(typeof templateCategories)[number]>("Todas");

  const filtered = React.useMemo(
    () =>
      active === "Todas"
        ? templates
        : templates.filter((t) => t.category === active),
    [active],
  );

  const [featured, ...rest] = filtered;

  return (
    <section id="plantillas" className="relative py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px hairline-gradient"
      />
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Marketplace"
            title={
              <>
                Plantillas <span className="text-gradient">premium</span>
              </>
            }
            description="Bases estratégicas para tu industria, listas en 7 días. Sin plantillas genéricas: cada una fue diseñada para convertir."
          />
          <Reveal delay={0.15} className="shrink-0">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
            >
              ¿No encuentras la tuya? Diseño a medida
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div
            role="tablist"
            aria-label="Filtrar plantillas por industria"
            className="scrollbar-none flex gap-2 overflow-x-auto pb-2"
          >
            {templateCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                onClick={() => setActive(category)}
                className={cn(
                  "shrink-0 cursor-pointer rounded-full border px-4.5 py-2 text-sm font-medium transition-all duration-300",
                  active === category
                    ? "border-transparent bg-brand-dark text-white shadow-soft"
                    : "border-border bg-card text-muted-foreground hover:border-brand-soft-2 hover:text-foreground",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <AnimatePresence mode="wait">
            <FeaturedTemplate key={featured.id} template={featured} />
          </AnimatePresence>

          <div>
            <Reveal blur={false}>
              <p className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                <ArrowDown className="size-3.5" aria-hidden />
                También disponibles
              </p>
            </Reveal>
            <ol className="border-t border-border">
              <AnimatePresence initial={false} mode="popLayout">
                {rest.map((template) => (
                  <TemplateRow key={template.id} template={template} />
                ))}
              </AnimatePresence>
              {rest.length === 0 ? (
                <li className="border-b border-border py-5 text-sm text-muted-foreground">
                  Solo hay una plantilla en esta categoría. ¿La tuya no está?
                  Pide un diseño a medida.
                </li>
              ) : null}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
