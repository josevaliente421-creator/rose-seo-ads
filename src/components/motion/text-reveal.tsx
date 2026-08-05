"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

export function TextReveal({
  text,
  className,
  delay = 0,
  stagger = 0.04,
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <motion.span
      className={cn("block", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: reduce ? 0 : stagger, delayChildren: delay }}
      aria-label={text}
      role="text"
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
