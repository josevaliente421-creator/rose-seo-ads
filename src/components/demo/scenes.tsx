import { cn } from "@/lib/utils";

export function SceneFrame({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--demo-ink-2)]",
        className,
      )}
    >
      {children}
      <div
        aria-hidden
        className="bg-noise pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/[0.06]"
      />
    </div>
  );
}

export function FacadeScene({ className }: { className?: string }) {
  const cols = 8;
  const rows = 15;
  const windows = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const seed = r * 7 + c * 13;
      const lit = seed % 43 < 11;
      const dim = seed % 17 < 4;
      const hot = c === 3 && r % 3 === 1;
      const opacity = hot ? 0.55 : lit ? 0.22 : dim ? 0.05 : 0.11;
      const w = hot ? 58 : 52;
      const h = hot ? 46 : 42;
      windows.push(
        <rect
          key={`w-${r}-${c}`}
          x={58 + c * 62}
          y={86 + r * 62}
          width={w}
          height={h}
          rx={2}
          fill={hot ? "#e3c890" : "#c9a86a"}
          fillOpacity={opacity}
        />,
      );
    }
  }
  return (
    <SceneFrame className={className}>
      <svg
        viewBox="0 0 800 1000"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="facade-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#170a11" />
            <stop offset="0.55" stopColor="#2a0815" />
            <stop offset="1" stopColor="#0b0608" />
          </linearGradient>
          <linearGradient id="facade-shaft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
            <stop offset="0.45" stopColor="#e3c890" stopOpacity="0.1" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="facade-vignette" cx="0.5" cy="0.4" r="0.85">
            <stop offset="0.55" stopColor="#000" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity="0.55" />
          </radialGradient>
          <linearGradient id="facade-entrance" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e3c890" stopOpacity="0.4" />
            <stop offset="1" stopColor="#c9a86a" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <rect width="800" height="1000" fill="url(#facade-bg)" />

        <rect
          x="40"
          y="0"
          width="620"
          height="1000"
          fill="#0d0709"
          opacity="0.6"
        />
        <rect
          x="40"
          y="0"
          width="620"
          height="1000"
          fill="none"
          stroke="rgba(201,168,106,0.14)"
          strokeWidth="1.5"
        />

        {windows}

        {Array.from({ length: rows + 1 }, (_, i) => (
          <line
            key={`f-${i}`}
            x1="40"
            y1={86 + i * 62 - 25}
            x2="660"
            y2={86 + i * 62 - 25}
            stroke="rgba(255,255,255,0.035)"
            strokeWidth="1"
          />
        ))}

        <polygon
          points="0,0 320,0 760,1000 0,1000"
          fill="url(#facade-shaft)"
          opacity="0.5"
        />

        <rect
          x="700"
          y="0"
          width="100"
          height="1000"
          fill="url(#facade-entrance)"
        />
        <line
          x1="700"
          y1="0"
          x2="700"
          y2="1000"
          stroke="rgba(227,200,144,0.35)"
          strokeWidth="1.5"
        />

        <rect width="800" height="1000" fill="url(#facade-vignette)" />
      </svg>
    </SceneFrame>
  );
}

export function ArchScene({ className }: { className?: string }) {
  const arches = [];
  for (let i = 0; i < 5; i++) {
    const x0 = 20 + i * 160;
    const w = 120;
    const mid = x0 + w / 2;
    arches.push(
      <g key={`a-${i}`}>
        <path
          d={`M ${x0} 520 V 190 A ${w / 2} ${w / 2} 0 0 1 ${x0 + w} 190 V 520`}
          fill="url(#arch-inner)"
          stroke="rgba(201,168,106,0.28)"
          strokeWidth="1.5"
        />
        <line
          x1={x0 + 10}
          y1="520"
          x2={x0 + w - 10}
          y2="520"
          stroke="rgba(255,255,255,0.05)"
        />
        <ellipse
          cx={mid}
          cy="520"
          rx="46"
          ry="10"
          fill="rgba(227,200,144,0.05)"
        />
      </g>,
    );
  }
  return (
    <SceneFrame className={className}>
      <svg
        viewBox="0 0 800 520"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="arch-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#170a11" />
            <stop offset="1" stopColor="#0b0608" />
          </linearGradient>
          <linearGradient id="arch-inner" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4a1025" stopOpacity="0.85" />
            <stop offset="1" stopColor="#170a11" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="arch-glow" cx="0.5" cy="0.35" r="0.7">
            <stop offset="0" stopColor="#c9a86a" stopOpacity="0.1" />
            <stop offset="1" stopColor="#c9a86a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="800" height="520" fill="url(#arch-bg)" />
        <rect width="800" height="520" fill="url(#arch-glow)" />
        {arches}
        <line
          x1="0"
          y1="520"
          x2="800"
          y2="520"
          stroke="rgba(201,168,106,0.12)"
        />
      </svg>
    </SceneFrame>
  );
}

export function EditorialTexture({ className }: { className?: string }) {
  return (
    <SceneFrame className={className}>
      <svg
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="tex-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2a0815" />
            <stop offset="0.6" stopColor="#170a11" />
            <stop offset="1" stopColor="#0b0608" />
          </linearGradient>
          <radialGradient id="tex-glow" cx="0.5" cy="0.25" r="0.65">
            <stop offset="0" stopColor="#e3c890" stopOpacity="0.16" />
            <stop offset="1" stopColor="#e3c890" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="800" height="800" fill="url(#tex-bg)" />
        <rect width="800" height="800" fill="url(#tex-glow)" />
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={90 + i * 80}
            x2="800"
            y2={90 + i * 80}
            stroke="rgba(201,168,106,0.05)"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={`v-${i}`}
            x1={90 + i * 80}
            y1="0"
            x2={90 + i * 80}
            y2="800"
            stroke="rgba(201,168,106,0.05)"
            strokeWidth="1"
          />
        ))}
        <circle
          cx="400"
          cy="300"
          r="220"
          fill="none"
          stroke="rgba(201,168,106,0.12)"
          strokeWidth="1"
        />
        <circle
          cx="400"
          cy="300"
          r="330"
          fill="none"
          stroke="rgba(201,168,106,0.07)"
          strokeWidth="1"
        />
      </svg>
    </SceneFrame>
  );
}
