"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

type GlassRoseProps = {
  className?: string;
  variant?: "hero" | "cta" | "compact";
  interactive?: boolean;
};

export function GlassRose({
  className,
  variant = "hero",
  interactive = true,
}: GlassRoseProps) {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for subtle 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 20, mass: 0.7 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!interactive || reduce || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex items-center justify-center select-none perspective-[1200px]",
        className
      )}
      role="img"
      aria-label="Escultura botánica de rosa en 3D de alta gama, símbolo de Rose SEO & Ads"
    >
      {/* Ambient Volumetric Backlight */}
      <motion.div
        aria-hidden
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.08, 1],
                opacity: variant === "cta" ? [0.45, 0.75, 0.45] : [0.35, 0.6, 0.35],
              }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-[-10%] -z-10 rounded-full bg-gradient-to-tr from-brand-dark/30 via-brand/25 to-rose-300/20 blur-[70px] dark:from-brand-dark/50 dark:via-brand/35 dark:to-rose-400/25"
      />

      {/* Delicate Luminous Orbital Rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-2 rounded-full border border-brand/15 dark:border-rose-400/20 opacity-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-10 rounded-full border border-dashed border-brand/10 dark:border-rose-400/10 opacity-60 animate-spin"
        style={{ animationDuration: "90s" }}
      />

      {/* Floating Petal Particles */}
      {!reduce && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-5 overflow-visible">
          {[
            { top: "8%", left: "14%", delay: 0, size: "h-2 w-2" },
            { top: "24%", right: "12%", delay: 1.5, size: "h-2.5 w-2.5" },
            { bottom: "22%", left: "12%", delay: 3, size: "h-2 w-2" },
            { bottom: "14%", right: "18%", delay: 2.2, size: "h-3 w-3" },
            { top: "45%", left: "4%", delay: 4, size: "h-1.5 w-1.5" },
            { top: "35%", right: "6%", delay: 2.8, size: "h-2 w-2" },
          ].map((sparkle, idx) => (
            <motion.span
              key={idx}
              style={{
                top: sparkle.top,
                left: sparkle.left,
                right: sparkle.right,
                bottom: sparkle.bottom,
              }}
              animate={{
                y: [0, -16, 0],
                opacity: [0.1, 0.7, 0.1],
                scale: [0.7, 1.1, 0.7],
              }}
              transition={{
                duration: 5,
                delay: sparkle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={cn(
                "absolute rounded-full bg-brand/40 shadow-[0_0_12px_rgba(226,104,143,0.8)] dark:bg-rose-300/50",
                sparkle.size
              )}
            />
          ))}
        </div>
      )}

      {/* 3D Tilted Rose Image Container */}
      <motion.div
        style={
          interactive && !reduce
            ? {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
            : undefined
        }
        animate={
          reduce
            ? undefined
            : {
                y: [0, -9, 0],
                scale: [1, 1.018, 1],
              }
        }
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative h-full w-full flex items-center justify-center will-change-transform"
      >
        <Image
          src="/hero-rose.png"
          alt="Rosa botánica esculpida en 3D para Rose SEO & Ads"
          width={700}
          height={700}
          priority
          className="h-full w-full object-contain drop-shadow-[0_25px_50px_rgba(74,16,37,0.28)] dark:drop-shadow-[0_30px_60px_rgba(226,104,143,0.3)] transition-transform duration-500 hover:scale-[1.03]"
        />
      </motion.div>
    </div>
  );
}
