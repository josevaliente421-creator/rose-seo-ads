"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
import { DemoContainer } from "@/components/demo/container";
import { Reveal } from "@/components/motion/reveal";
import { experiencias, reservaSection } from "./content";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const DIAS_SEMANA = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"];
const NOMBRES_DIA = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function diasMes(offsetInicio: number, total: number, disponibles: number[]) {
  const celdas: (number | null)[] = [
    ...Array.from({ length: offsetInicio }, () => null),
    ...Array.from({ length: total }, (_, i) => i + 1),
  ];
  return { celdas, disponibles };
}

const calendario = diasMes(2, 31, [3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 26, 27, 28, 29]);

export function FuegoReserva() {
  const reduce = useReducedMotion();
  const [paso, setPaso] = React.useState(0);
  const [exp, setExp] = React.useState(0);
  const [dia, setDia] = React.useState<number | null>(null);
  const [turno, setTurno] = React.useState<string | null>(null);
  const [personas, setPersonas] = React.useState(2);
  const [confirmado, setConfirmado] = React.useState(false);

  const canContinue =
    paso === 3 ||
    (paso === 0 && exp !== null) ||
    (paso === 1 && dia !== null) ||
    (paso === 2 && turno !== null);

  const fechaResumen = dia
    ? `${NOMBRES_DIA[new Date(2026, 7, dia).getDay()]} ${dia} Agosto`
    : null;

  const experiencia = experiencias[exp];

  return (
    <section id="reservas" className="relative scroll-mt-24 rounded-t-[2.5rem] bg-[var(--demo-ink)] py-24 sm:py-32">
      <DemoContainer>
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/50" />
              {reservaSection.kicker}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight text-[var(--demo-paper)]">
              {reservaSection.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic text-[var(--demo-gold)]">
                {reservaSection.title.split(" ").slice(-1)[0].replace(".", "")}.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {reservaSection.escasez.map((msg) => (
                <p key={msg} className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                  {msg}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <div>
            <div className="mb-8 flex items-center gap-3">
              {["Experiencia", "Fecha", "Turno", "Mesa"].map((label, i) => (
                <React.Fragment key={label}>
                  <div className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        "flex size-7 items-center justify-center rounded-full border font-mono text-[10px]",
                        i < paso
                          ? "border-[var(--demo-gold)] bg-[var(--demo-gold)] text-[#1a140c]"
                          : i === paso
                            ? "border-[var(--demo-gold)]/70 text-[var(--demo-gold)]"
                            : "border-white/15 text-white/35",
                      )}
                    >
                      {i < paso ? <Check className="size-3.5" /> : i + 1}
                    </span>
                    <span
                      className={cn(
                        "hidden font-mono text-[9px] uppercase tracking-[0.2em] sm:block",
                        i <= paso ? "text-[var(--demo-paper)]/80" : "text-white/30",
                      )}
                    >
                      {label}
                    </span>
                  </div>
                  {i < 3 ? <span aria-hidden className="h-px w-4 bg-white/15 sm:w-6" /> : null}
                </React.Fragment>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={paso}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                {paso === 0 ? (
                  <div>
                    <h3 className="font-demo-serif text-2xl font-semibold text-[var(--demo-paper)]">
                      Elige tu experiencia
                    </h3>
                    <div className="mt-6 space-y-3">
                      {experiencias.map((e, i) => (
                        <button
                          key={e.n}
                          type="button"
                          onClick={() => setExp(i)}
                          aria-pressed={exp === i}
                          className={cn(
                            "group flex w-full cursor-pointer items-center justify-between gap-6 border px-6 py-5 text-left transition-all duration-500",
                            exp === i
                              ? "border-[var(--demo-gold)]/60 bg-[var(--demo-gold)]/[0.06]"
                              : "border-white/[0.09] opacity-45 hover:opacity-80",
                          )}
                        >
                          <span>
                            <span className="block font-mono text-[9px] uppercase tracking-[0.26em] text-[var(--demo-gold)]">
                              {e.n} — {e.name}
                            </span>
                            <span className="mt-1.5 block max-w-sm text-sm leading-relaxed text-white/60">
                              {e.desc}
                            </span>
                          </span>
                          <motion.span
                            animate={exp === i ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            className="size-2.5 shrink-0 rounded-full bg-[var(--demo-gold)]"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {paso === 1 ? (
                  <div>
                    <h3 className="font-demo-serif text-2xl font-semibold text-[var(--demo-paper)]">
                      Elige tu fecha
                    </h3>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--demo-gold)]/80">
                      {reservaSection.mes}
                    </p>
                    <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.09]">
                      <div className="grid grid-cols-7 border-b border-white/[0.08]">
                        {DIAS_SEMANA.map((d) => (
                          <p
                            key={d}
                            className="py-3 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-white/40"
                          >
                            {d}
                          </p>
                        ))}
                      </div>
                      <div className="grid grid-cols-7">
                        {calendario.celdas.map((d, i) => {
                          if (d === null) return <span key={`v-${i}`} />;
                          const disponible = calendario.disponibles.includes(d);
                          const selected = dia === d;
                          return (
                            <button
                              key={d}
                              type="button"
                              disabled={!disponible}
                              onClick={() => setDia(d)}
                              aria-pressed={selected}
                              className={cn(
                                "relative aspect-square cursor-pointer transition-all duration-300",
                                disponible
                                  ? "text-white/70 hover:text-[var(--demo-paper)]"
                                  : "cursor-not-allowed text-white/15",
                                selected &&
                                  "bg-[var(--demo-gold)] text-[#1a140c] hover:text-[#1a140c]",
                              )}
                            >
                              <span className="flex size-full items-center justify-center font-mono text-[13px] tabular-nums">
                                {d}
                              </span>
                              {disponible && !selected ? (
                                <span
                                  aria-hidden
                                  className="absolute bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-[var(--demo-gold)]/60"
                                />
                              ) : null}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                      {reservaSection.demoNote}
                    </p>
                  </div>
                ) : null}

                {paso === 2 ? (
                  <div>
                    <h3 className="font-demo-serif text-2xl font-semibold text-[var(--demo-paper)]">
                      Elige tu turno
                    </h3>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {reservaSection.turnos.map((t) => (
                        <button
                          key={t.hora}
                          type="button"
                          onClick={() => setTurno(t.hora)}
                          aria-pressed={turno === t.hora}
                          className={cn(
                            "flex cursor-pointer flex-col items-center gap-1.5 rounded-2xl border px-4 py-6 text-center transition-all duration-300",
                            turno === t.hora
                              ? "border-[var(--demo-gold)]/60 bg-[var(--demo-gold)]/[0.06]"
                              : "border-white/[0.09] opacity-50 hover:opacity-90",
                          )}
                        >
                          <span className="font-demo-serif text-2xl font-semibold text-[var(--demo-paper)]">
                            {t.hora}
                          </span>
                          <span
                            className={cn(
                              "font-mono text-[9px] uppercase tracking-[0.2em]",
                              t.estado === "Disponible"
                                ? "text-[var(--demo-muted)]"
                                : "text-[var(--demo-gold)]",
                            )}
                          >
                            {t.estado}
                          </span>
                        </button>
                      ))}
                    </div>
                    <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                      {reservaSection.demoNote}
                    </p>
                  </div>
                ) : null}

                {paso === 3 ? (
                  <div>
                    <h3 className="font-demo-serif text-2xl font-semibold text-[var(--demo-paper)]">
                      ¿Cuántos serán?
                    </h3>
                    <div className="mt-6 grid grid-cols-3 gap-3 sm:flex sm:flex-wrap">
                      {reservaSection.personas.map((n) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setPersonas(n)}
                          aria-pressed={personas === n}
                          className={cn(
                            "flex size-16 cursor-pointer flex-col items-center justify-center rounded-2xl border transition-all duration-300",
                            personas === n
                              ? "border-[var(--demo-gold)]/60 bg-[var(--demo-gold)]/[0.06]"
                              : "border-white/[0.09] opacity-50 hover:opacity-90",
                          )}
                        >
                          <span className="font-demo-serif text-2xl font-semibold text-[var(--demo-paper)]">
                            {n}
                          </span>
                          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                            {n === 1 ? "persona" : "personas"}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  setPaso((p) => Math.max(0, p - 1));
                }}
                disabled={paso === 0}
                className={cn(
                  "flex h-12 cursor-pointer items-center gap-2 rounded-full border border-white/15 px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-white/60 transition-all",
                  paso === 0 ? "cursor-not-allowed opacity-30" : "hover:border-white/35 hover:text-white",
                )}
              >
                <ArrowLeft className="size-4" />
                Atrás
              </button>
              <button
                type="button"
                disabled={!canContinue}
                onClick={() => {
                  if (paso < 3) setPaso((p) => p + 1);
                  else setConfirmado(true);
                }}
                className={cn(
                  "flex h-12 cursor-pointer items-center gap-2 rounded-full bg-[var(--demo-gold)] px-7 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#1a140c] transition-all",
                  !canContinue && "cursor-not-allowed opacity-40",
                )}
              >
                {paso < 3 ? "Continuar" : "Solicitar reserva"}
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="lg:pt-14">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-white/[0.09] bg-[var(--demo-ink-2)] p-7">
                <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-white/40">
                  Tu reserva
                </p>
                <div className="mt-5 space-y-4">
                  <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.08] pb-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">Restaurante</p>
                    <p className="font-demo-serif text-lg font-semibold text-[var(--demo-paper)]">FUEGO</p>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.08] pb-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">Experiencia</p>
                    <p className="text-right text-sm text-white/75">{experiencia.name}</p>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.08] pb-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">Fecha</p>
                    <p className="text-right text-sm text-white/75">{fechaResumen ?? "—"}</p>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.08] pb-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">Turno</p>
                    <p className="text-right text-sm text-white/75">{turno ?? "—"}</p>
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">Mesa</p>
                    <p className="text-right text-sm text-white/75">
                      {personas} {personas === 1 ? "persona" : "personas"}
                    </p>
                  </div>
                </div>
                <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                  {reservaSection.demoNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DemoContainer>

      <AnimatePresence>
        {confirmado ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Confirmación de reserva"
            onClick={() => setConfirmado(false)}
          >
            <motion.div
              initial={reduce ? undefined : { opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0e0e0c] p-9 text-center"
            >
              <motion.div
                aria-hidden
                animate={reduce ? undefined : { opacity: [0.2, 0.5, 0.2], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-36 w-64 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(233,138,54,0.3),transparent_70%)] blur-2xl"
              />
              <div className="relative">
                <motion.div
                  initial={reduce ? undefined : { scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: EASE }}
                  className="mx-auto flex size-14 items-center justify-center rounded-full bg-[var(--demo-gold)] text-[#1a140c]"
                >
                  <Check className="size-7" />
                </motion.div>
                <h3 className="mt-7 font-demo-serif text-3xl font-semibold text-[var(--demo-paper)]">
                  Tu solicitud está lista.
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[var(--demo-muted)]">
                  Esta es una demostración de la experiencia de reserva de FUEGO.
                </p>
                <div className="mt-8 space-y-3">
                  <a
                    href="#carta"
                    onClick={() => setConfirmado(false)}
                    className="flex h-12 w-full items-center justify-center rounded-full border border-white/15 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 transition-all hover:border-white/35 hover:text-white"
                  >
                    Volver a la carta
                  </a>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--demo-gold)] font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#1a140c]"
                    data-cursor="agendar"
                  >
                    <MessageCircle className="size-4" aria-hidden />
                    Solicitar reserva real
                  </a>
                </div>
                <p className="mt-6 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                  <Sparkles className="size-3" aria-hidden />
                  Demo · no se envió ninguna reserva
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}