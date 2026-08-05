import { Check, X } from "lucide-react";
import { InstagramIcon } from "@/components/ui/social-icons";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";
import { comparisonWith, comparisonWithout } from "@/lib/data";

export function Comparison() {
  return (
    <section id="comparacion" className="relative py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px hairline-gradient"
      />
      <Container>
        <SectionHeader
          eyebrow="La realidad"
          title={
            <>
              Solo Instagram no es una <span className="text-gradient">empresa online</span>
            </>
          }
          description="Tu página en redes es prestada. Tu sitio web es el edificio de tu marca. Esto es lo que pierdes (y ganas) con cada opción."
        />

        <div className="relative mt-16 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card/60 p-8 shadow-soft sm:p-10">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl border border-border bg-muted text-muted-foreground">
                  <InstagramIcon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    Solo Instagram
                  </h3>
                  <p className="text-sm text-muted-foreground">Tu negocio prestado</p>
                </div>
              </div>
              <ul className="mt-8 flex flex-col gap-4">
                {comparisonWithout.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <X className="size-3" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                70% de los clientes investigan tu empresa antes de contactarte
              </p>
            </div>
          </Reveal>

          <div className="relative z-10 flex flex-col items-center justify-center gap-4">
            <Reveal delay={0.15} className="flex w-full justify-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-brand-dark text-white shadow-glow sm:size-20">
                <span className="font-mono text-xs font-bold tracking-widest sm:text-sm">VS</span>
              </div>
            </Reveal>
            <div aria-hidden className="h-px w-full bg-border lg:hidden" />
          </div>

          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-soft-2 bg-card p-8 shadow-lift sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-gradient-to-br from-brand/14 to-transparent blur-3xl"
              />
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-brand text-white">
                  <Check className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    Con sitio web
                  </h3>
                  <p className="text-sm text-brand">Tu negocio, en propiedad</p>
                </div>
              </div>
              <ul className="mt-8 flex flex-col gap-4">
                {comparisonWith.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] font-medium text-foreground">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                      <Check className="size-3" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 flex items-baseline gap-2 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <CountUp to={38} suffix="%" className="text-xl font-bold text-brand" />
                más conversión con una web profesional
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
