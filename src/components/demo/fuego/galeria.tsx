"use client";

import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { galeria } from "./content";

export function FuegoGaleria() {
  return (
    <section id="galeria" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-ink-2)] py-24 sm:py-32">
      <DemoContainer>
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/50" />
              La galería
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight text-[var(--demo-paper)]">
              Lo que pasa entre{" "}
              <span className="italic text-[var(--demo-gold)]">la brasa y la mesa.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {galeria.map((foto, i) => {
            const isBig = foto.size === "big";
            return (
              <Reveal
                key={foto.img + i}
                delay={0.05 * (i % 4)}
                className={isBig ? "col-span-2 row-span-2" : ""}
              >
                <figure
                  className={`group relative overflow-hidden rounded-2xl ${isBig ? "h-full" : ""}`}
                  data-cursor="ver"
                >
                  <Image
                    src={foto.img}
                    alt={foto.alt}
                    width={isBig ? 1400 : 800}
                    height={isBig ? 1400 : 800}
                    className={`w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05] ${
                      isBig ? "aspect-square lg:h-full lg:min-h-[420px]" : "aspect-square"
                    }`}
                    sizes={isBig ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                  />
                  <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90"
                  />
                  <figcaption className="absolute bottom-4 left-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/50 transition-colors duration-500 group-hover:text-[var(--demo-gold)]">
                      {String(i + 1).padStart(2, "0")} — {foto.label}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </DemoContainer>
    </section>
  );
}