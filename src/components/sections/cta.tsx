import { ArrowRight, MessageCircle, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { Magnetic } from "@/components/motion/magnetic";
import { GlassRose } from "@/components/mockup/glass-rose";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24 sm:py-32 lg:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px hairline-gradient"
      />
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-b from-card via-card to-brand/8 px-6 py-20 text-center shadow-lift sm:px-12 sm:py-28">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[46rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand/14 to-transparent blur-3xl"
            />
            <div className="bg-noise pointer-events-none absolute inset-0 opacity-30" />

            <div className="relative flex flex-col items-center">
              <div className="pointer-events-none relative mx-auto flex h-36 w-36 items-center justify-center opacity-90 sm:h-44 sm:w-44">
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-gradient-to-b from-brand/20 to-transparent blur-2xl"
                />
                <GlassRose className="h-full w-full" />
              </div>

              <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-6xl">
                Tu negocio merece{" "}
                <span className="text-gradient">florecer</span> hoy
              </h2>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                En 7 días puedes tener una presencia digital que inspire
                confianza, aparezca en Google y convierta visitas en clientes.
                Empezamos la próxima semana.
              </p>

              <div className="mt-10 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
                <Magnetic className="w-full sm:w-auto">
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(
                      "Quiero mi sitio web en 7 días",
                    )}`}
                    className="group inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-brand-dark px-9 text-base font-medium text-white shadow-soft transition-all hover:bg-brand hover:shadow-lift sm:w-auto"
                  >
                    Agendar mi llamada gratis
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Magnetic>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full border border-border bg-card/70 px-8 text-base font-medium text-foreground backdrop-blur transition-all hover:border-brand-soft-2 hover:text-brand sm:w-auto"
                >
                  <MessageCircle className="size-5" aria-hidden />
                  Escribir por WhatsApp
                </a>
              </div>

              <p className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <CalendarClock className="size-3.5" aria-hidden />
                Respuesta en menos de 24 horas · Sin compromiso
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
