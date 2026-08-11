"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";

const recordRows = [
  { label: "Última consulta", value: "12 JUN" },
  { label: "Antecedentes", value: "Actualizados" },
  { label: "Próximo control", value: "18 JUL" },
  { label: "Especialista", value: "Dra. Valentina Soto" },
];

export function VitaHistory() {
  const reduce = useReducedMotion();

  return (
    <section id="historia" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-paper)] py-24 text-[var(--demo-ink)] sm:py-32">
      <DemoContainer className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src="/vita/historia.jpg"
                alt="Médico conversando con una paciente mayor en una sala iluminada con luz natural"
                width={1400}
                height={1400}
                data-cursor="ver"
                className="aspect-[4/4.6] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[var(--demo-ink)]/10 sm:rounded-3xl"
              />
            </div>
            <motion.p
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-5 left-6 rounded-full border border-[var(--demo-ink)]/10 bg-[var(--demo-paper)] px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--demo-ink)]/60 shadow-sm sm:left-8"
            >
              Conversar también es medicina
            </motion.p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-accent-deep)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-accent-deep)]/50" />
              Tu historia importa
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold leading-[1.05] tracking-tight">
              Tu médico no empieza desde cero{" "}
              <span className="italic text-[var(--demo-accent-deep)]">
                cada vez que te ve.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--demo-ink)]/70">
              En VITA, cada consulta continúa la anterior. No tienes que repetir
              tu historia cada vez que vuelves.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--demo-ink)]/10 bg-white/60">
              <div className="flex items-center justify-between border-b border-[var(--demo-ink)]/10 px-6 py-4">
                <p className="font-demo-serif text-lg font-semibold tracking-tight">
                  VITA <span className="text-[var(--demo-ink)]/50">· Historia del paciente</span>
                </p>
                <span aria-hidden className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[var(--demo-gold)]" />
                  <span className="size-1.5 rounded-full bg-[var(--demo-gold)]/50" />
                  <span className="size-1.5 rounded-full bg-[var(--demo-ink)]/15" />
                </span>
              </div>
              <dl>
                {recordRows.map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={reduce ? undefined : { opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-between gap-6 border-b border-[var(--demo-ink)]/[0.07] px-6 py-4 last:border-b-0"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--demo-ink)]/50">
                      {row.label}
                    </dt>
                    <dd className="flex items-center gap-2 font-demo-serif text-lg font-semibold tracking-tight">
                      <span aria-hidden className="size-1 rounded-full bg-[var(--demo-accent-deep)]" />
                      {row.value}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--demo-ink)]/35">
              Interfaz demostrativa · datos ficticios
            </p>
          </Reveal>
        </div>
      </DemoContainer>
    </section>
  );
}
