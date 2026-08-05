"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { RoseLogo } from "@/components/ui/logo";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
          ? "glass border-b border-border py-3 shadow-soft"
          : "border-b border-transparent py-5",
      )}
    >
      <Container className="flex items-center justify-between">
        <a
          href="#top"
          aria-label="Rose SEO & Ads — inicio"
          className="shrink-0"
        >
          <RoseLogo />
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Cambiar tema claro u oscuro"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur transition-colors hover:text-brand"
          >
            <Sun className="size-4.5 dark:hidden" />
            <Moon className="hidden size-4.5 dark:block" />
          </button>

          <a
            href="#contacto"
            className="group hidden h-10 items-center gap-2 rounded-full bg-brand-dark px-5 text-sm font-medium text-white transition-all hover:bg-brand hover:shadow-lift sm:inline-flex"
          >
            Empezar hoy
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            <Container className="flex items-center justify-between py-5">
              <RoseLogo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-border bg-card"
              >
                <X className="size-5" />
              </button>
            </Container>

            <nav aria-label="Menú móvil" className="flex flex-1 flex-col justify-center">
              <Container className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="py-3.5 font-display text-4xl font-bold tracking-tight text-foreground transition-colors hover:text-brand"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </Container>
            </nav>

            <Container className="pb-10">
              <motion.a
                href="#contacto"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand-dark text-base font-medium text-white transition-colors hover:bg-brand"
              >
                Empezar hoy
                <ArrowRight className="size-5" />
              </motion.a>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
