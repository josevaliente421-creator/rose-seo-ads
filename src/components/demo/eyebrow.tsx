import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--demo-gold)]",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-[var(--demo-gold)]/60" />
      {children}
    </p>
  );
}
