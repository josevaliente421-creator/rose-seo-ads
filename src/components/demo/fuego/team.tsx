"use client";

import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { team } from "./content";

export function FuegoTeam() {
  return (
    <section id="equipo" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-paper)] py-24 text-[var(--demo-ink)] sm:py-32">
      <DemoContainer>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-accent-deep)]">
                <span aria-hidden className="h-px w-8 bg-[var(--demo-accent-deep)]/50" />
                El equipo tras la brasa
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-demo-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                Quién cocina{" "}
                <span className="italic text-[var(--demo-accent-deep)]">importa.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-[15px] leading-relaxed text-[var(--demo-ink)]/60">
              Las mismas manos en el fuego
              desde el primer servicio hasta la última mesa.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={0.08 * i}>
              <article className="group relative overflow-hidden rounded-2xl" data-cursor="conocer">
                <Image
                  src={member.img}
                  alt={`${member.name}, ${member.role}`}
                  width={1000}
                  height={1000}
                  className="aspect-[4/4.4] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[var(--demo-ink)]/10"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--demo-gold-bright)]">
                    {member.role}
                  </p>
                  <h3 className="mt-1.5 font-demo-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {member.name}
                  </h3>
                  <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="max-w-sm pt-3 text-sm leading-relaxed text-white/65">
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                          {member.exp} · {member.specialty}
                        </span>
                        <br />
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </DemoContainer>
    </section>
  );
}
