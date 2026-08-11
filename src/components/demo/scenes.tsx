import { cn } from "@/lib/utils";

export type SceneTone = "rose" | "teal" | "navy" | "stone" | "amber";

const tones: Record<
  SceneTone,
  {
    ink: string;
    ink2: string;
    deep: string;
    accent: string;
    gold: string;
    goldBright: string;
  }
> = {
  rose: {
    ink: "#0b0608",
    ink2: "#170a11",
    deep: "#2a0815",
    accent: "#4a1025",
    gold: "#c9a86a",
    goldBright: "#e3c890",
  },
  teal: {
    ink: "#0b1211",
    ink2: "#10211f",
    deep: "#0c2b29",
    accent: "#146c6a",
    gold: "#c9a86a",
    goldBright: "#e6d3a8",
  },
  navy: {
    ink: "#070a14",
    ink2: "#0e1426",
    deep: "#141d3d",
    accent: "#3b4c9a",
    gold: "#c9a86a",
    goldBright: "#e6d3a8",
  },
  stone: {
    ink: "#0c0b0a",
    ink2: "#171412",
    deep: "#262220",
    accent: "#57534e",
    gold: "#c9a86a",
    goldBright: "#e6d3a8",
  },
  amber: {
    ink: "#120b07",
    ink2: "#1c110a",
    deep: "#331a08",
    accent: "#b45309",
    gold: "#e8a35c",
    goldBright: "#f4c98e",
  },
};

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

export function FacadeScene({
  tone = "rose",
  className,
}: {
  tone?: SceneTone;
  className?: string;
}) {
  const t = tones[tone];
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
          fill={hot ? t.goldBright : t.gold}
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
          <linearGradient id={`facade-bg-${tone}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={t.ink2} />
            <stop offset="0.55" stopColor={t.deep} />
            <stop offset="1" stopColor={t.ink} />
          </linearGradient>
          <linearGradient id={`facade-shaft-${tone}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
            <stop offset="0.45" stopColor={t.goldBright} stopOpacity="0.1" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id={`facade-vig-${tone}`} cx="0.5" cy="0.4" r="0.85">
            <stop offset="0.55" stopColor="#000" stopOpacity="0" />
            <stop offset="1" stopColor="#000" stopOpacity="0.55" />
          </radialGradient>
          <linearGradient id={`facade-ent-${tone}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={t.goldBright} stopOpacity="0.4" />
            <stop offset="1" stopColor={t.gold} stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <rect width="800" height="1000" fill={`url(#facade-bg-${tone})`} />

        <rect
          x="40"
          y="0"
          width="620"
          height="1000"
          fill={t.ink}
          opacity="0.6"
        />
        <rect
          x="40"
          y="0"
          width="620"
          height="1000"
          fill="none"
          stroke={t.gold}
          strokeOpacity="0.14"
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
          fill={`url(#facade-shaft-${tone})`}
          opacity="0.5"
        />

        <rect
          x="700"
          y="0"
          width="100"
          height="1000"
          fill={`url(#facade-ent-${tone})`}
        />
        <line
          x1="700"
          y1="0"
          x2="700"
          y2="1000"
          stroke={t.goldBright}
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />

        <rect width="800" height="1000" fill={`url(#facade-vig-${tone})`} />
      </svg>
    </SceneFrame>
  );
}

export function ArchScene({
  tone = "rose",
  className,
}: {
  tone?: SceneTone;
  className?: string;
}) {
  const t = tones[tone];
  const arches = [];
  for (let i = 0; i < 5; i++) {
    const x0 = 20 + i * 160;
    const w = 120;
    const mid = x0 + w / 2;
    arches.push(
      <g key={`a-${i}`}>
        <path
          d={`M ${x0} 520 V 190 A ${w / 2} ${w / 2} 0 0 1 ${x0 + w} 190 V 520`}
          fill={`url(#arch-inner-${tone})`}
          stroke={t.gold}
          strokeOpacity="0.28"
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
          fill={t.goldBright}
          fillOpacity="0.05"
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
          <linearGradient id={`arch-bg-${tone}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={t.ink2} />
            <stop offset="1" stopColor={t.ink} />
          </linearGradient>
          <linearGradient id={`arch-inner-${tone}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={t.accent} stopOpacity="0.85" />
            <stop offset="1" stopColor={t.ink2} stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id={`arch-glow-${tone}`} cx="0.5" cy="0.35" r="0.7">
            <stop offset="0" stopColor={t.gold} stopOpacity="0.1" />
            <stop offset="1" stopColor={t.gold} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="800" height="520" fill={`url(#arch-bg-${tone})`} />
        <rect width="800" height="520" fill={`url(#arch-glow-${tone})`} />
        {arches}
        <line
          x1="0"
          y1="520"
          x2="800"
          y2="520"
          stroke={t.gold}
          strokeOpacity="0.12"
        />
      </svg>
    </SceneFrame>
  );
}

export function EditorialTexture({
  tone = "rose",
  className,
}: {
  tone?: SceneTone;
  className?: string;
}) {
  const t = tones[tone];
  return (
    <SceneFrame className={className}>
      <svg
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={`tex-bg-${tone}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={t.deep} />
            <stop offset="0.6" stopColor={t.ink2} />
            <stop offset="1" stopColor={t.ink} />
          </linearGradient>
          <radialGradient id={`tex-glow-${tone}`} cx="0.5" cy="0.25" r="0.65">
            <stop offset="0" stopColor={t.goldBright} stopOpacity="0.16" />
            <stop offset="1" stopColor={t.goldBright} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="800" height="800" fill={`url(#tex-bg-${tone})`} />
        <rect width="800" height="800" fill={`url(#tex-glow-${tone})`} />
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={90 + i * 80}
            x2="800"
            y2={90 + i * 80}
            stroke={t.gold}
            strokeOpacity="0.05"
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
            stroke={t.gold}
            strokeOpacity="0.05"
            strokeWidth="1"
          />
        ))}
        <circle
          cx="400"
          cy="300"
          r="220"
          fill="none"
          stroke={t.gold}
          strokeOpacity="0.12"
          strokeWidth="1"
        />
        <circle
          cx="400"
          cy="300"
          r="330"
          fill="none"
          stroke={t.gold}
          strokeOpacity="0.07"
          strokeWidth="1"
        />
      </svg>
    </SceneFrame>
  );
}
