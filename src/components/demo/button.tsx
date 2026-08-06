"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type DemoButtonProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
} & Omit<React.ComponentProps<typeof motion.a>, "ref">;

export function DemoButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: DemoButtonProps) {
  const reduce = useReducedMotion();
  return (
    <motion.a
      whileHover={reduce ? undefined : { y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(
        "group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-mono text-[13px] font-medium uppercase tracking-[0.16em] transition-colors duration-300",
        size === "lg" ? "h-14 px-9" : "h-12 px-7",
        variant === "primary" &&
          "bg-[var(--demo-gold)] text-[#1a0b10] hover:bg-[var(--demo-gold-bright)]",
        variant === "outline" &&
          "border border-[var(--demo-gold)]/40 text-[var(--demo-gold)] hover:border-[var(--demo-gold)] hover:bg-[var(--demo-gold)]/10",
        variant === "ghost" &&
          "border border-white/12 text-white/80 hover:border-white/30 hover:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}
