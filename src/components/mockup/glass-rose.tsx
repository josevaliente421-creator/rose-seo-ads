"use client";

import { useId, useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

type BotanicalRoseProps = {
  className?: string;
  variant?: "hero" | "cta" | "compact";
  interactive?: boolean;
  stageProgress?: number; // 0 (semilla) to 1 (florecimiento pleno)
};

export function GlassRose({
  className,
  variant = "hero",
  interactive = true,
}: BotanicalRoseProps) {
  const uid = useId().replace(/[:]/g, "");
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mouse tracking with gentle spring physics (strictly bounded)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 65, damping: 22, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const lightShiftX = useTransform(smoothX, [-0.5, 0.5], ["38%", "62%"]);
  const lightShiftY = useTransform(smoothY, [-0.5, 0.5], ["35%", "55%"]);

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

  // Animation Timings for "De semilla a florecimiento"
  const easeCurve = [0.16, 1, 0.3, 1] as const;

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
      aria-label="Escultura botánica de una rosa viva, floreciendo para Rose SEO & Ads"
    >
      {/* ── 1. ATMÓSFERA: Halo de Luz Cálida y Difusa ─────────────── */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          mounted
            ? {
                opacity: variant === "cta" ? [0.4, 0.65, 0.4] : [0.3, 0.5, 0.3],
                scale: [0.96, 1.04, 0.96],
              }
            : {}
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-[-15%] -z-10 rounded-full bg-gradient-to-tr from-brand-dark/25 via-brand/20 to-rose-300/15 blur-[80px] dark:from-brand-dark/40 dark:via-brand/30 dark:to-rose-400/20"
      />

      {/* ── 2. MICRO-PARTÍCULAS BOTÁNICAS SUTILES (NO NEÓN) ────────── */}
      {!reduce && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-5 overflow-visible">
          {[
            { top: "18%", left: "12%", delay: 0.5, d: 6 },
            { top: "28%", right: "10%", delay: 1.8, d: 7.5 },
            { bottom: "24%", left: "16%", delay: 3.2, d: 8 },
            { bottom: "18%", right: "15%", delay: 2.2, d: 6.5 },
          ].map((dust, idx) => (
            <motion.span
              key={idx}
              style={{
                top: dust.top,
                left: dust.left,
                right: dust.right,
                bottom: dust.bottom,
              }}
              animate={{
                y: [0, -18, 0],
                opacity: [0, 0.45, 0],
                scale: [0.6, 1, 0.6],
              }}
              transition={{
                duration: dust.d,
                delay: dust.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute size-1.5 rounded-full bg-brand/35 blur-[0.5px] dark:bg-rose-300/40"
            />
          ))}
        </div>
      )}

      {/* ── 3. CONTENEDOR VIVO CON PARALLAX 3D Y RESPIRACIÓN ───────── */}
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
                y: [0, -7, 0],
                scale: [1, 1.012, 1],
              }
        }
        transition={{
          y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative h-full w-full will-change-transform flex items-center justify-center"
      >
        <svg
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full overflow-visible drop-shadow-[0_24px_48px_rgba(74,16,37,0.18)] dark:drop-shadow-[0_30px_60px_rgba(226,104,143,0.22)]"
        >
          <defs>
            {/* ── GRADIENTES BOTÁNICOS SATINADOS DE ROSE SEO & ADS ── */}
            {/* Capa Exterior: Terciopelo Burdeos Profundo a Carmín Suave */}
            <radialGradient id={`${uid}-petal-outer-1`} cx="50%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#96294a" />
              <stop offset="55%" stopColor="#7a1f3d" />
              <stop offset="100%" stopColor="#4a1025" />
            </radialGradient>

            <radialGradient id={`${uid}-petal-outer-2`} cx="40%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#a33256" />
              <stop offset="60%" stopColor="#7a1f3d" />
              <stop offset="100%" stopColor="#3d0a1b" />
            </radialGradient>

            {/* Capa Media: Aterciopelado con reflejos rosados sutiles */}
            <radialGradient id={`${uid}-petal-mid-1`} cx="45%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#b83a60" />
              <stop offset="50%" stopColor="#872243" />
              <stop offset="100%" stopColor="#4a1025" />
            </radialGradient>

            <radialGradient id={`${uid}-petal-mid-2`} cx="55%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#c2446c" />
              <stop offset="45%" stopColor="#96294a" />
              <stop offset="100%" stopColor="#4a1025" />
            </radialGradient>

            {/* Capa Interior: Copa y Cáliz Cálido */}
            <radialGradient id={`${uid}-petal-inner-1`} cx="50%" cy="30%" r="55%">
              <stop offset="0%" stopColor="#d45b81" />
              <stop offset="45%" stopColor="#96294a" />
              <stop offset="100%" stopColor="#4a1025" />
            </radialGradient>

            <radialGradient id={`${uid}-petal-inner-2`} cx="35%" cy="25%" r="60%">
              <stop offset="0%" stopColor="#e2688f" />
              <stop offset="40%" stopColor="#a82e52" />
              <stop offset="100%" stopColor="#4a1025" />
            </radialGradient>

            {/* Núcleo Profundo / Corazón de la Rosa */}
            <radialGradient id={`${uid}-core`} cx="45%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#f07e9f" />
              <stop offset="35%" stopColor="#b83a60" />
              <stop offset="70%" stopColor="#661330" />
              <stop offset="100%" stopColor="#2c0513" />
            </radialGradient>

            {/* Sombra de Oclusión Botánica entre Capas */}
            <radialGradient id={`${uid}-shadow`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1f030d" stopOpacity="0.75" />
              <stop offset="65%" stopColor="#3d0a1b" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#3d0a1b" stopOpacity="0" />
            </radialGradient>

            {/* Brillo Satinado Especular en Aristas de Pétalos */}
            <linearGradient id={`${uid}-sheen`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#ffd6e0" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Filtro Suave para Sombras de Pétalos */}
            <filter id={`${uid}-drop-shadow`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#3d0a1b" floodOpacity="0.35" />
            </filter>

            <filter id={`${uid}-soft-blur`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>

          {/* Sombra de apoyo en la base */}
          <ellipse
            cx="300"
            cy="460"
            rx="160"
            ry="30"
            fill={`url(#${uid}-shadow)`}
            filter={`url(#${uid}-soft-blur)`}
            opacity="0.6"
          />

          {/* =================================================================== */}
          {/* FASE 4: PÉTALOS EXTERIORES DE GUARDA (Despliegue Final Majestuoso) */}
          {/* =================================================================== */}
          <motion.g
            initial={{ scale: 0.35, opacity: 0, rotate: -22 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              duration: 2.8,
              delay: 1.4,
              ease: easeCurve,
            }}
            style={{ transformOrigin: "300px 300px" }}
          >
            {/* Pétalo Exterior Inferior Izquierdo */}
            <path
              d="M 285 410 C 205 440, 115 395, 110 305 C 105 240, 170 205, 230 220 C 190 280, 210 365, 285 410 Z"
              fill={`url(#${uid}-petal-outer-1)`}
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.8"
            />
            {/* Borde curvado / doblez de pétalo */}
            <path
              d="M 115 305 C 130 365, 195 410, 265 405 C 215 390, 155 350, 125 290 Z"
              fill={`url(#${uid}-petal-outer-2)`}
              opacity="0.85"
            />

            {/* Pétalo Exterior Inferior Derecho */}
            <path
              d="M 315 410 C 395 440, 485 395, 490 305 C 495 240, 430 205, 370 220 C 410 280, 390 365, 315 410 Z"
              fill={`url(#${uid}-petal-outer-2)`}
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="0.8"
            />
            <path
              d="M 485 305 C 470 365, 405 410, 335 405 C 385 390, 445 350, 475 290 Z"
              fill={`url(#${uid}-petal-outer-1)`}
              opacity="0.85"
            />

            {/* Pétalo Exterior Superior (Corona de la rosa) */}
            <path
              d="M 195 190 C 240 115, 360 115, 405 190 C 385 240, 335 255, 300 255 C 265 255, 215 240, 195 190 Z"
              fill={`url(#${uid}-petal-outer-1)`}
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.8"
            />
            {/* Labio superior enrollado suave */}
            <path
              d="M 230 160 C 275 125, 325 125, 370 160 C 340 148, 260 148, 230 160 Z"
              fill={`url(#${uid}-sheen)`}
              opacity="0.5"
            />

            {/* Pétalo Exterior Lateral Izquierdo */}
            <path
              d="M 160 215 C 95 255, 95 345, 165 395 C 185 365, 195 315, 190 270 C 185 245, 175 225, 160 215 Z"
              fill={`url(#${uid}-petal-outer-2)`}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="0.8"
            />

            {/* Pétalo Exterior Lateral Derecho */}
            <path
              d="M 440 215 C 505 255, 505 345, 435 395 C 415 365, 405 315, 410 270 C 415 245, 425 225, 440 215 Z"
              fill={`url(#${uid}-petal-outer-1)`}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="0.8"
            />
          </motion.g>

          {/* =================================================================== */}
          {/* FASE 3: PÉTALOS MEDIOS (Cáliz Abriéndose y Desenrollándose)        */}
          {/* =================================================================== */}
          <motion.g
            initial={{ scale: 0.3, opacity: 0, rotate: 18 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              duration: 2.5,
              delay: 0.9,
              ease: easeCurve,
            }}
            style={{ transformOrigin: "300px 300px" }}
          >
            {/* Sombra de oclusión media */}
            <ellipse cx="300" cy="305" rx="145" ry="125" fill={`url(#${uid}-shadow)`} opacity="0.5" />

            {/* Pétalo Medio Inferior Envolvente */}
            <path
              d="M 175 330 C 210 405, 390 405, 425 330 C 370 380, 230 380, 175 330 Z"
              fill={`url(#${uid}-petal-mid-1)`}
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.9"
            />
            {/* Doblez satinado del borde inferior */}
            <path
              d="M 205 350 C 255 395, 345 395, 395 350 C 350 375, 250 375, 205 350 Z"
              fill={`url(#${uid}-sheen)`}
              opacity="0.4"
            />

            {/* Pétalo Medio Izquierdo Cóncavo */}
            <path
              d="M 170 245 C 135 305, 175 370, 240 375 C 205 335, 205 275, 230 230 C 205 230, 185 235, 170 245 Z"
              fill={`url(#${uid}-petal-mid-2)`}
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.8"
            />

            {/* Pétalo Medio Derecho Cóncavo */}
            <path
              d="M 430 245 C 465 305, 425 370, 360 375 C 395 335, 395 275, 370 230 C 395 230, 415 235, 430 245 Z"
              fill={`url(#${uid}-petal-mid-1)`}
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.8"
            />

            {/* Pétalo Medio Superior */}
            <path
              d="M 215 205 C 260 165, 340 165, 385 205 C 355 240, 245 240, 215 205 Z"
              fill={`url(#${uid}-petal-mid-2)`}
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="0.8"
            />
          </motion.g>

          {/* =================================================================== */}
          {/* FASE 2: PÉTALOS INTERIORES DE COPA (Corazón Desplegándose)         */}
          {/* =================================================================== */}
          <motion.g
            initial={{ scale: 0.25, opacity: 0, rotate: -15 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              duration: 2.2,
              delay: 0.5,
              ease: easeCurve,
            }}
            style={{ transformOrigin: "300px 300px" }}
          >
            {/* Oclusión profunda del centro */}
            <circle cx="300" cy="295" r="95" fill={`url(#${uid}-shadow)`} opacity="0.75" />

            {/* Pétalo de Copa Frontal */}
            <path
              d="M 210 295 C 235 355, 365 355, 390 295 C 350 335, 250 335, 210 295 Z"
              fill={`url(#${uid}-petal-inner-1)`}
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="0.9"
            />

            {/* Pétalo de Copa Lateral Izquierdo */}
            <path
              d="M 215 250 C 190 295, 220 340, 275 340 C 245 305, 245 265, 265 235 C 240 235, 225 240, 215 250 Z"
              fill={`url(#${uid}-petal-inner-2)`}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="0.8"
            />

            {/* Pétalo de Copa Lateral Derecho */}
            <path
              d="M 385 250 C 410 295, 380 340, 325 340 C 355 305, 355 265, 335 235 C 360 235, 375 240, 385 250 Z"
              fill={`url(#${uid}-petal-inner-1)`}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="0.8"
            />

            {/* Pétalo de Copa Superior Abrazador */}
            <path
              d="M 240 225 C 275 195, 325 195, 360 225 C 335 255, 265 255, 240 225 Z"
              fill={`url(#${uid}-petal-inner-2)`}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.9"
            />
          </motion.g>

          {/* =================================================================== */}
          {/* FASE 1: NÚCLEO / CORAZÓN EN ESPIRAL ÁUREA (Semilla & Centro Vivo)   */}
          {/* =================================================================== */}
          <motion.g
            initial={{ scale: 0.1, opacity: 0, rotate: 45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              duration: 1.9,
              delay: 0.15,
              ease: easeCurve,
            }}
            style={{ transformOrigin: "300px 285px" }}
          >
            {/* Espiral central botánica continua */}
            <path
              d="M 255 270 C 245 295, 270 320, 305 320 C 340 320, 360 295, 350 270 C 340 245, 310 235, 285 245 C 265 255, 265 280, 285 290 C 305 300, 325 290, 325 275 C 325 265, 315 258, 302 260 C 292 262, 290 272, 298 276 C 304 279, 310 275, 308 270"
              fill="none"
              stroke={`url(#${uid}-core)`}
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Pétalos envolventes del centro íntimo */}
            <path
              d="M 265 265 C 260 290, 300 305, 320 290 C 335 275, 330 255, 305 250 C 285 245, 270 252, 265 265 Z"
              fill={`url(#${uid}-core)`}
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1"
            />

            {/* Puntos de luz satinada en las curvas del núcleo */}
            <path
              d="M 272 260 C 285 250, 315 250, 328 260"
              fill="none"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M 280 280 C 295 292, 315 290, 325 278"
              fill="none"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </motion.g>

          {/* =================================================================== */}
          {/* LUZ ESPECULAR DINÁMICA / REFLEJOS EN PÉTALOS (SEGUIMIENTO SUAVE)    */}
          {/* =================================================================== */}
          {!reduce && (
            <motion.g
              style={{
                opacity: 0.35,
                transformOrigin: "300px 300px",
              }}
              animate={{
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none mix-blend-screen"
            >
              <ellipse
                cx="300"
                cy="260"
                rx="180"
                ry="120"
                fill="url(#uid-glow-light)"
                opacity="0.3"
              />
            </motion.g>
          )}
        </svg>
      </motion.div>
    </div>
  );
}
