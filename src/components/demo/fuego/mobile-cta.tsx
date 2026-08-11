"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FuegoMobileCta() {
  const [show, setShow] = React.useState(false);
  const [nearReservas, setNearReservas] = React.useState(false);

  React.useEffect(() => {
    const reservas = document.getElementById("reservas");
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.8);
      if (reservas) {
        const r = reservas.getBoundingClientRect();
        setNearReservas(r.top < window.innerHeight * 0.55 && r.bottom > 0);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && !nearReservas ? (
        <motion.a
          href="#reservas"
          data-cursor="reservar"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "fixed inset-x-4 bottom-4 z-50 flex h-13 items-center justify-center rounded-full bg-[var(--demo-gold)] font-mono text-[12px] font-medium uppercase tracking-[0.2em] text-[#1a140c] shadow-2xl shadow-black/50 sm:hidden",
          )}
        >
          Reservar mesa
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}