import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { BrowserMockup } from "@/components/mockup/browser-mockup";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

function ProjectMockup({ gradient }: { gradient: string }) {
  return (
    <div className={cn("relative aspect-[16/11] overflow-hidden", gradient)}>
      <div className="bg-noise absolute inset-0 opacity-20" />
      <div className="absolute inset-0 flex flex-col gap-3 p-6">
        <div className="flex items-center justify-between">
          <span className="size-8 rounded-full bg-white/20 backdrop-blur" />
          <div className="flex gap-2">
            <span className="h-2.5 w-12 rounded-full bg-white/30" />
            <span className="h-2.5 w-12 rounded-full bg-white/30" />
            <span className="h-2.5 w-16 rounded-full bg-white/50" />
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-2.5">
          <span className="h-3 w-2/3 rounded-full bg-white/45" />
          <span className="h-2.5 w-1/2 rounded-full bg-white/30" />
          <div className="mt-2 flex gap-2">
            <span className="h-7 w-24 rounded-full bg-white/80 backdrop-blur" />
            <span className="h-7 w-24 rounded-full bg-white/20 ring-1 ring-white/40" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectStory({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const leading = index === 0;
  const flip = index % 2 === 1;

  return (
    <article>
      <div
        className={cn(
          "grid items-center gap-10",
          leading ? "lg:grid-cols-[1.25fr_0.75fr] lg:gap-16" : "lg:grid-cols-2 lg:gap-20",
        )}
      >
        <div
          className={cn(
            "relative",
            flip && !leading && "lg:order-2",
          )}
        >
          <Parallax
            offset={leading ? 40 : 70}
            aria-hidden
            className="pointer-events-none absolute -top-20 left-0 -z-10 select-none sm:-left-8 lg:-top-28"
          >
            <span className="font-display text-[6.5rem] font-bold leading-none tracking-tighter text-brand/[0.055] sm:text-[10rem] lg:text-[15rem]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </Parallax>

          <BrowserMockup
            url={`${project.id.toLowerCase()}.com`}
            className={cn(
              "transition-transform duration-700",
              leading
                ? "rounded-[2rem]"
                : "hover:-translate-y-1.5 hover:shadow-glow",
            )}
          >
            <ProjectMockup gradient={project.gradient} />
          </BrowserMockup>

          {leading ? (
            <div className="glass absolute -bottom-7 left-6 flex items-center gap-4 rounded-2xl border border-border px-6 py-4 shadow-lift sm:left-9">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand text-white">
                <TrendingUp className="size-4.5" aria-hidden />
              </span>
              <div>
                <p className="font-display text-2xl font-bold leading-none">
                  {project.result}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {project.resultLabel}
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <div className={cn("mt-6 lg:mt-0", flip && !leading && "lg:order-1")}>
          <Reveal delay={0.1}>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand">
              {project.industry}
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {project.name}
            </h3>

            <dl
              className={cn(
                "mt-8 grid gap-6 border-t border-border pt-8 text-sm",
                leading && "sm:grid-cols-2",
              )}
            >
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                  El problema
                </dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">
                  {project.problem}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                  La solución
                </dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">
                  {project.solution}
                </dd>
              </div>
            </dl>

            {!leading ? (
              <div className="mt-8 flex items-end justify-between gap-6 border-t border-border pt-8">
                <div>
                  <p className="flex items-center gap-2 font-display text-4xl font-bold tracking-tight text-brand">
                    <TrendingUp className="size-6" aria-hidden />
                    {project.result}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.resultLabel}
                  </p>
                </div>
              </div>
            ) : null}

            <a
              href={project.visit}
              className="group mt-9 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all hover:border-brand-soft-2 hover:bg-brand-soft hover:text-brand"
            >
              Visitar proyecto
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export function Portfolio() {
  return (
    <section id="trabajos" className="relative bg-card/40 py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px hairline-gradient"
      />
      <Container>
        <SectionHeader
          eyebrow="Portafolio"
          title={
            <>
              Resultados que <span className="text-gradient">hablan</span>
            </>
          }
          description="Cada proyecto empieza con un problema y termina con números que se ven en el negocio, no solo en la web."
        />

        <div className="mt-24 space-y-28 lg:mt-32 lg:space-y-44">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={0.05} blur={false}>
              <ProjectStory project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
