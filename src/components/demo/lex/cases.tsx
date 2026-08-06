"use client";

import { DemoContainer } from "@/components/demo/container";
import { Eyebrow } from "@/components/demo/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";
import { cases } from "./content";

export function LexCases() {
  return (
    <section id="casos" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />
      <DemoContainer>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Casos</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-demo-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#f6f1ea] sm:text-5xl">
              Resultados que se{" "}
              <span className="italic text-[var(--demo-gold)]">explican solos</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 space-y-20">
          {cases.map((item) => (
            <article key={item.n} className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-2 font-demo-serif text-[7rem] font-bold leading-none text-white/[0.035] sm:text-[10rem]"
              >
                {item.n}
              </div>

              <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                <Reveal>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--demo-gold)]">
                      {item.kind}
                    </p>
                    <h3 className="mt-4 font-demo-serif text-3xl font-semibold leading-[1.1] tracking-tight text-[#f6f1ea] sm:text-4xl">
                      {item.title}
                    </h3>
                    <div className="mt-8 border-t border-white/[0.08] pt-7">
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                        Desafío
                      </p>
                      <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                        {item.challenge}
                      </p>
                    </div>
                    <div className="mt-6 border-t border-white/[0.08] pt-7">
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                        Proceso
                      </p>
                      <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                        {item.process}
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
                      Resultado
                    </p>
                    <dl className="grid gap-8">
                      {item.results.map((result, j) => (
                        <div
                          key={result.label}
                          className={`${j > 0 ? "border-t border-white/[0.07] pt-8" : ""}`}
                        >
                          <dd className="font-demo-serif text-4xl font-semibold tracking-tight text-[var(--demo-gold)] sm:text-5xl">
                            {result.prefix ? (
                              <span className="mr-1 font-mono text-lg text-white/40">{result.prefix}</span>
                            ) : null}
                            <CountUp
                              to={parseFloat(result.value.replace(",", ""))}
                              decimals={result.value.includes(",") ? 1 : 0}
                            />
                            <span className="text-2xl sm:text-3xl">{result.suffix}</span>
                          </dd>
                          <dt className="mt-1.5 text-sm text-white/50">{result.label}</dt>
                        </div>
                      ))}
                    </dl>
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </DemoContainer>
    </section>
  );
}
