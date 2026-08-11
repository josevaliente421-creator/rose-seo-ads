"use client";

import { DemoContainer } from "@/components/demo/container";
import { Eyebrow } from "@/components/demo/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { team } from "./content";

export function VitaTeam() {
  return (
    <section id="equipo" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />
      <DemoContainer>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Equipo</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-demo-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--demo-paper)] sm:text-5xl">
                El equipo médico detrás de{" "}
                <span className="italic text-[var(--demo-gold)]">cada consulta</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              Médicos de dedicación exclusiva: los mismos especialistas que te
              ven hoy te ven en seis meses.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={0.06 * i}>
              <article className="group h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--demo-gold)]/35">
                <div
                  aria-hidden
                  className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--demo-accent-deep)] to-[#12060b] font-demo-serif text-xl font-semibold text-[var(--demo-gold)] ring-1 ring-[var(--demo-gold)]/30 transition-all duration-500 group-hover:ring-[var(--demo-gold)]/70"
                >
                  {member.initials}
                </div>
                <h3 className="mt-6 font-demo-serif text-xl font-semibold tracking-tight text-[var(--demo-paper)]">
                  {member.name}
                </h3>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                  {member.role}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </DemoContainer>
    </section>
  );
}
