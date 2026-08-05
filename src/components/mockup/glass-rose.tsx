"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

type GlassRoseProps = {
  className?: string;
};

export function GlassRose({ className }: GlassRoseProps) {
  const uid = useId().replace(/[:]/g, "");
  const reduce = useReducedMotion();

  const petals = [
    { layer: 0, count: 6, r: 88, w: 58, h: 88, op: 0.5, rotate: 0 },
    { layer: 1, count: 7, r: 62, w: 50, h: 76, op: 0.62, rotate: 26 },
    { layer: 2, count: 6, r: 42, w: 42, h: 64, op: 0.74, rotate: 10 },
    { layer: 3, count: 5, r: 24, w: 34, h: 46, op: 0.86, rotate: 36 },
    { layer: 4, count: 4, r: 10, w: 24, h: 32, op: 0.95, rotate: 20 },
  ];

  return (
    <div className={className} role="img" aria-label="Rosa de vidrio, símbolo de la marca Rose SEO & Ads">
      <motion.svg
        viewBox="-185 -185 370 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        animate={
          reduce
            ? undefined
            : {
                y: [0, -14, 0],
                rotate: [-3.5, 3.5, -3.5],
              }
        }
        transition={{
          y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 16, repeat: Infinity, ease: "easeInOut" },
        }}
        className="h-full w-full"
      >
        <defs>
          <radialGradient id={`${uid}-bg`} cx="50%" cy="42%" r="60%">
            <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.16" />
            <stop offset="55%" stopColor="var(--brand)" stopOpacity="0.07" />
            <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
          </radialGradient>

          <linearGradient id={`${uid}-petal`} x1="0" y1="0" x2="0.25" y2="1">
            <stop offset="0%" stopColor="#b05273" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#7a1f3d" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#4a1025" stopOpacity="0.78" />
          </linearGradient>

          <linearGradient id={`${uid}-petalInner`} x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="#c47e97" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#96294a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4a1025" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id={`${uid}-stem`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#3f5d42" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6d8f70" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id={`${uid}-leaf`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7d9c7f" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3f5d42" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id={`${uid}-shine`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <radialGradient id={`${uid}-glow`} cx="38%" cy="32%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <filter id={`${uid}-blur`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <circle cx="0" cy="-40" r="118" fill={`url(#${uid}-bg)`} />

        <g stroke="rgba(255,255,255,0.28)" strokeWidth="0.9">
          {petals.map((layer, li) =>
            Array.from({ length: layer.count }).map((_, i) => {
              const angle = (360 / layer.count) * i + layer.rotate;
              return (
                <path
                  key={`${li}-${i}`}
                  d={`M 0 0 C ${layer.w * 0.42} ${-layer.h * 0.28}, ${
                    layer.w * 0.42
                  } ${-layer.h * 0.72}, 0 ${-layer.h} C ${-layer.w * 0.42} ${
                    -layer.h * 0.72
                  }, ${-layer.w * 0.42} ${-layer.h * 0.28}, 0 0 Z`}
                  fill={
                    li >= 3 ? `url(#${uid}-petalInner)` : `url(#${uid}-petal)`
                  }
                  fillOpacity={layer.op}
                  transform={`rotate(${angle} 0 0) translate(0 ${-layer.r})`}
                />
              );
            }),
          )}

          <path
            d="M 0 0 C 2.5 -20, 2.5 -34, 0 -42 C -2.5 -34, -2.5 -20, 0 0 Z"
            fill="#4a1025"
            fillOpacity="0.9"
          />
        </g>

        <motion.g
          animate={reduce ? undefined : { opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse
            cx="-34"
            cy="-86"
            rx="26"
            ry="40"
            transform="rotate(24 -34 -86)"
            fill={`url(#${uid}-glow)`}
            filter={`url(#${uid}-blur)`}
          />
          <path
            d="M -52 -118 C -30 -128, -12 -120, -4 -102 C -26 -104, -44 -112, -52 -118 Z"
            fill={`url(#${uid}-shine)`}
          />
        </motion.g>

        <path
          d="M 0 0 C 3 34, 3 62, 0 86"
          stroke={`url(#${uid}-stem)`}
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M 0 44 C 20 46, 36 40, 48 26 C 44 46, 30 56, 0 54 Z"
          fill={`url(#${uid}-leaf)`}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.8"
        />
      </motion.svg>
    </div>
  );
}
