"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { cartaCategorias } from "./content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FuegoCarta() {
  const [cat, setCat] = useState(0);
  const [hoverItem, setHoverItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const fx = useSpring(mx, { stiffness: 150, damping: 20 });
  const fy = useSpring(my, { stiffness: 150, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    mx.set(e.clientX - 150);
    my.set(e.clientY - 110);
  };

  const categoria = cartaCategorias[cat];
  const fotoPlato = hoverItem !== null ? categoria.platos[hoverItem] : null;

  return (
    <section
      id="carta"
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative scroll-mt-24 overflow-hidden rounded-t-[2.5rem] bg-[var(--demo-ink)] pt-24 sm:pt-32"
    >
      <DemoContainer>
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/50" />
              La carta
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-[clamp(2.6rem,5.5vw,4.4rem)] font-semibold leading-[1.02] tracking-tight text-[var(--demo-paper)]">
              La carta
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--demo-muted)] sm:text-lg">
              Una cocina guiada por el fuego y por lo que encontramos en temporada.
            </p>
          </Reveal>
        </div>

        <div className="sticky top-[72px] z-30 -mx-6 mt-12 border-y border-white/[0.07] bg-[#080807]/90 px-6 backdrop-blur-xl sm:-mx-10 sm:px-10 lg:-mx-12 lg:px-12">
          <div className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {cartaCategorias.map((c, i) => (
              <button
                key={c.name}
                type="button"
                onClick={() => {
                  setCat(i);
                  setHoverItem(null);
                }}
                aria-pressed={cat === i}
                className={`shrink-0 cursor-pointer rounded-full px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300 sm:px-5 ${
                  cat === i
                    ? "bg-[var(--demo-gold)] text-[#1a140c]"
                    : "text-white/45 hover:text-white/80"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 pb-16 sm:pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="mx-auto max-w-3xl"
            >
              {categoria.platos.map((plato, i) => (
                <div
                  key={plato.name}
                  onMouseEnter={() => setHoverItem(i)}
                  onMouseLeave={() => setHoverItem(null)}
                  className="group border-b border-white/[0.08] py-7 sm:py-8"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <div className="min-w-0">
                      <p className="font-demo-serif text-2xl font-semibold tracking-tight text-[var(--demo-paper)] transition-colors duration-300 group-hover:text-[var(--demo-gold)] sm:text-3xl">
                        {plato.name}
                      </p>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--demo-muted)]">
                        {plato.desc}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-sm tracking-[0.12em] text-[var(--demo-gold)]">
                      {plato.price}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </DemoContainer>

      <div aria-hidden className="pointer-events-none fixed inset-0 z-40 hidden xl:block">
        <AnimatePresence>
          {fotoPlato ? (
            <motion.div
              style={{ x: fx, y: fy }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="absolute top-0 left-0"
            >
              <div className="relative h-[240px] w-[340px] overflow-hidden rounded-xl">
                <Image
                  src={categoria.img}
                  alt=""
                  fill
                  sizes="340px"
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-white/15" />
                <div className="absolute bottom-3 left-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/60">
                    {categoria.name} · {fotoPlato.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}