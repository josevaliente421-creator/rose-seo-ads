"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Casos", href: "#casos" },
  { label: "Equipo", href: "#equipo" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
];

export function LexHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-[var(--demo-ink)]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-12">
        <a href="#top" className="flex items-baseline gap-2" aria-label="LEX Abogados — inicio">
          <span className="font-demo-serif text-2xl font-bold tracking-tight text-[var(--demo-gold)]">
            LEX
          </span>
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
            Abogados
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-white"
            >
              {link.label}
              <span
                aria-hidden
                className="absolute -bottom-1.5 left-0 h-px w-0 bg-[var(--demo-gold)] transition-all duration-300 group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden h-10 items-center rounded-full border border-[var(--demo-gold)]/40 px-5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--demo-gold)] transition-all hover:border-[var(--demo-gold)] hover:bg-[var(--demo-gold)]/10 sm:inline-flex"
          >
            Agendar reunión
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white/80 lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-[var(--demo-ink)]/95 backdrop-blur-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-6 sm:px-10">
              <span className="flex items-baseline gap-2">
                <span className="font-demo-serif text-2xl font-bold text-[var(--demo-gold)]">LEX</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                  Abogados
                </span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white/80"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav aria-label="Menú móvil" className="flex flex-1 flex-col justify-center px-6 sm:px-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-white/[0.06] py-4 font-demo-serif text-3xl font-semibold text-white/85 transition-colors hover:text-[var(--demo-gold)]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-6 pb-10 sm:px-10">
              <motion.a
                href="#contacto"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-13 w-full items-center justify-center rounded-full bg-[var(--demo-gold)] font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-[#1a0b10]"
              >
                Agendar reunión
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
