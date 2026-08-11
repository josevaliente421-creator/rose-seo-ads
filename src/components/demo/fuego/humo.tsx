import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Humo({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <motion.div
        animate={reduce ? undefined : { x: [0, 40, 0], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-16 -top-10 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl"
      />
      <motion.div
        animate={reduce ? undefined : { x: [0, -50, 0], y: [0, 24, 0], opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-white/[0.025] blur-3xl"
      />
      <motion.div
        animate={reduce ? undefined : { x: [0, 30, 0], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-white/[0.02] blur-3xl"
      />
    </div>
  );
}