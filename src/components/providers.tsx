"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

export function Providers({ children }: { children: React.ReactNode }) {
  const lenisRef = React.useRef<Lenis | null>(null);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const instance = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    lenisRef.current = instance;

    let raf = 0;
    function loop(time: number) {
      instance.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      instance.destroy();
      lenisRef.current = null;
    };
  }, []);

  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenisRef.current?.scrollTo(el as HTMLElement, { offset: -88, duration: 1.4 });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeProvider>
  );
}
