"use client";

import { useId, useRef } from "react";
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
  const uid = useId().replace(/[:]/g, "");
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for dynamic 3D specular light and tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 25, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const lightX = useTransform(smoothX, [-0.5, 0.5], ["25%", "75%"]);
  const lightY = useTransform(smoothY, [-0.5, 0.5], ["20%", "65%"]);

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
        "relative flex items-center justify-center select-none perspective-[1000px]",
        className
      )}
      role="img"
      aria-label="Rosa facetada de cristal rubí, isotipo oficial animado de Rose SEO & Ads"
    >
      {/* Dynamic Ambient Glow Behind Rose */}
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
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-brand-dark/40 via-brand/35 to-rose-400/25 blur-3xl"
      />

      {/* Floating Crystal Sparkles */}
      {!reduce && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-5 overflow-visible">
          {[
            { top: "12%", left: "18%", delay: 0, size: "h-2 w-2" },
            { top: "22%", right: "14%", delay: 1.5, size: "h-2.5 w-2.5" },
            { bottom: "20%", left: "15%", delay: 3, size: "h-2 w-2" },
            { bottom: "16%", right: "22%", delay: 2.2, size: "h-3 w-3" },
            { top: "48%", left: "6%", delay: 4, size: "h-1.5 w-1.5" },
            { top: "35%", right: "8%", delay: 2.8, size: "h-2 w-2" },
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
                scale: [0, 1.2, 0],
                opacity: [0, 0.95, 0],
                rotate: [0, 90, 180],
              }}
              transition={{
                duration: 4,
                delay: sparkle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={cn(
                "absolute rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.95),0_0_24px_rgba(226,104,143,0.7)]",
                sparkle.size
              )}
            />
          ))}
        </div>
      )}

      {/* 3D Animated Faceted Rose SVG Container */}
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
                y: [0, -10, 0],
                rotateZ: [-1.5, 1.5, -1.5],
              }
        }
        transition={{
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative h-full w-full will-change-transform"
      >
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full drop-shadow-[0_20px_35px_rgba(74,16,37,0.35)] dark:drop-shadow-[0_25px_45px_rgba(226,104,143,0.35)]"
        >
          <defs>
            {/* Shaders and Gradients for Faceted Ruby Glass */}
            <linearGradient id={`${uid}-ruby-1`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d94b76" />
              <stop offset="45%" stopColor="#96294a" />
              <stop offset="100%" stopColor="#4a1025" />
            </linearGradient>

            <linearGradient id={`${uid}-ruby-2`} x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f4729b" />
              <stop offset="35%" stopColor="#b02f57" />
              <stop offset="100%" stopColor="#5c132f" />
            </linearGradient>

            <linearGradient id={`${uid}-ruby-3`} x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#e25d86" />
              <stop offset="50%" stopColor="#7a1f3d" />
              <stop offset="100%" stopColor="#3b0a1c" />
            </linearGradient>

            <linearGradient id={`${uid}-ruby-core`} x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#fb7185" />
              <stop offset="40%" stopColor="#9f1239" />
              <stop offset="100%" stopColor="#4c0519" />
            </linearGradient>

            <linearGradient id={`${uid}-ruby-highlight`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#881337" />
              <stop offset="60%" stopColor="#be123c" />
              <stop offset="100%" stopColor="#fda4af" />
            </linearGradient>

            {/* Specular Shimmer Sweep Effect */}
            <linearGradient id={`${uid}-light-sweep`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="40%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="0.85" />
              <stop offset="55%" stopColor="#ffe4e6" stopOpacity="0.95" />
              <stop offset="60%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            {/* Soft Ambient Inner Glow */}
            <radialGradient id={`${uid}-glow`} cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#ff7597" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#96294a" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#4a1025" stopOpacity="0" />
            </radialGradient>

            {/* Bevel Stroke Filter for Crystal Edge Shimmer */}
            <filter id={`${uid}-crystal-glow`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#ffe4e6" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Background Ambient Radial Pool */}
          <circle cx="250" cy="245" r="190" fill={`url(#${uid}-glow)`} />

          {/* ========================================================= */}
          {/* FACETED GEOMETRY - FAITHFUL TO THE ROSE LOGO ISOTYPE     */}
          {/* ========================================================= */}

          {/* BASE & LOWER FACETS */}
          <g className="transition-all duration-500">
            {/* Bottom-right base diamond facet */}
            <path
              d="M 215 352 L 275 350 L 305 408 L 225 418 Z"
              fill={`url(#${uid}-ruby-3)`}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Bottom-center base trapezoid */}
            <path
              d="M 198 358 L 225 418 L 195 408 L 180 365 Z"
              fill={`url(#${uid}-ruby-1)`}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Bottom-left outer wing */}
            <path
              d="M 180 365 L 195 408 L 138 395 L 140 360 Z"
              fill={`url(#${uid}-ruby-2)`}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </g>

          {/* LEFT WING FACETS */}
          <g>
            {/* Leftmost outer shield petal */}
            <path
              d="M 130 350 L 140 270 L 175 295 L 180 365 L 130 350 Z"
              fill={`url(#${uid}-ruby-1)`}
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Left mid-upper curved flank facet */}
            <path
              d="M 140 270 L 170 205 L 202 245 L 175 295 Z"
              fill={`url(#${uid}-ruby-2)`}
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Left top outer corner */}
            <path
              d="M 170 205 L 210 170 L 225 210 L 202 245 Z"
              fill={`url(#${uid}-ruby-3)`}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </g>

          {/* TOP CROWN FACETS */}
          <g>
            {/* Top-left crest */}
            <path
              d="M 210 170 L 265 150 L 275 190 L 225 210 Z"
              fill={`url(#${uid}-ruby-highlight)`}
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            {/* Top center apex */}
            <path
              d="M 265 150 L 315 162 L 325 200 L 275 190 Z"
              fill={`url(#${uid}-ruby-2)`}
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Top right crown facet */}
            <path
              d="M 315 162 L 355 185 L 348 230 L 325 200 Z"
              fill={`url(#${uid}-ruby-1)`}
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </g>

          {/* RIGHT WING & LOWER FLANK FACETS */}
          <g>
            {/* Right upper wing */}
            <path
              d="M 355 185 L 382 235 L 350 280 L 348 230 Z"
              fill={`url(#${uid}-ruby-3)`}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Right lateral broad petal */}
            <path
              d="M 382 235 L 392 310 L 330 328 L 350 280 Z"
              fill={`url(#${uid}-ruby-2)`}
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Right lower wing corner */}
            <path
              d="M 392 310 L 365 372 L 305 348 L 330 328 Z"
              fill={`url(#${uid}-ruby-1)`}
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </g>

          {/* MIDDLE LAYER FACETED SPIRAL */}
          <g>
            {/* Lower mid-horizontal shelf petal (characteristic logo bar) */}
            <path
              d="M 180 300 L 290 280 L 320 325 L 210 345 Z"
              fill={`url(#${uid}-ruby-highlight)`}
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            {/* Right mid wrap facet */}
            <path
              d="M 290 280 L 338 235 L 348 275 L 320 325 Z"
              fill={`url(#${uid}-ruby-3)`}
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Upper mid inner collar */}
            <path
              d="M 225 210 L 285 200 L 305 240 L 250 250 Z"
              fill={`url(#${uid}-ruby-1)`}
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Left mid inner wedge */}
            <path
              d="M 195 250 L 250 250 L 225 285 L 180 280 Z"
              fill={`url(#${uid}-ruby-2)`}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </g>

          {/* INNER CORE / SPIRAL HEART */}
          <g>
            {/* Core spiral wrap 1 */}
            <path
              d="M 245 220 L 280 215 L 295 248 L 260 255 Z"
              fill={`url(#${uid}-ruby-core)`}
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            {/* Core spiral wrap 2 */}
            <path
              d="M 235 235 L 260 228 L 272 260 L 245 268 Z"
              fill={`url(#${uid}-ruby-highlight)`}
              stroke="rgba(255,255,255,0.65)"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            {/* Central jewel diamond apex */}
            <path
              d="M 252 238 L 268 242 L 260 255 L 248 250 Z"
              fill="#ffe4e6"
              fillOpacity="0.95"
              stroke="white"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </g>

          {/* DYNAMIC SHIMMER SWEEP OVERLAY */}
          {!reduce && (
            <motion.g
              animate={{
                x: [-350, 450],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
              className="pointer-events-none mix-blend-overlay"
            >
              <rect
                x="50"
                y="100"
                width="160"
                height="320"
                transform="rotate(28 130 260)"
                fill={`url(#${uid}-light-sweep)`}
              />
            </motion.g>
          )}

          {/* BEVEL SPECULAR ACCENTS (Delicate Crystal Edge Highlights) */}
          <g stroke="rgba(255,255,255,0.7)" strokeWidth="1" strokeLinecap="round">
            <line x1="210" y1="170" x2="265" y2="150" />
            <line x1="180" y1="300" x2="290" y2="280" />
            <line x1="140" y1="270" x2="175" y2="295" />
            <line x1="315" y1="162" x2="355" y2="185" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
