"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [selected, setSelected] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="testimonios" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px hairline-gradient"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[54rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-brand/8 to-transparent blur-3xl"
      />

      <Container className="relative">
        <SectionHeader
          eyebrow="Testimonios"
          title={
            <>
              Clientes que ya <span className="text-gradient">florecieron</span>
            </>
          }
          description="Historias reales de negocios que pasaron de invisibles a inolvidables."
        />

        <Reveal className="mt-16" blur={false}>
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex items-stretch">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="flex min-w-0 shrink-0 grow-0 basis-full items-center justify-center"
                  aria-hidden={selected !== i}
                >
                  <figure className="flex min-h-72 w-full max-w-4xl flex-col items-center justify-center px-2 text-center sm:min-h-80">
                    <Quote
                      className="size-10 text-brand/25 sm:size-12"
                      aria-hidden
                      strokeWidth={1.5}
                    />
                    <blockquote className="mt-7 text-pretty font-display text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl lg:text-[2.6rem]">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-9 flex items-center gap-3.5">
                      <span
                        className={cn(
                          "flex size-11 items-center justify-center rounded-full font-display text-sm font-bold text-white",
                          t.color,
                        )}
                        aria-hidden
                      >
                        {t.initials}
                      </span>
                      <div className="text-left">
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-col items-center gap-7">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Testimonio anterior"
                className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-brand-soft-2 hover:bg-brand-soft hover:text-brand"
              >
                <ArrowLeft className="size-4.5" aria-hidden />
              </button>

              <div
                role="tablist"
                aria-label="Seleccionar testimonio"
                className="scrollbar-none flex max-w-full gap-2 overflow-x-auto px-2 py-1"
              >
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    role="tab"
                    aria-selected={selected === i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={cn(
                      "shrink-0 cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                      selected === i
                        ? "border-transparent bg-brand-dark text-white shadow-soft"
                        : "border-border bg-card text-muted-foreground hover:border-brand-soft-2 hover:text-foreground",
                    )}
                  >
                    {t.name.split(" ")[0]}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Testimonio siguiente"
                className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-brand-soft-2 hover:bg-brand-soft hover:text-brand"
              >
                <ArrowRight className="size-4.5" aria-hidden />
              </button>
            </div>

            <div className="flex gap-2" aria-hidden>
              {testimonials.map((t, i) => (
                <span
                  key={t.name}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-400",
                    selected === i ? "w-8 bg-brand" : "w-2.5 bg-border",
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
