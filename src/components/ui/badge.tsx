import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Badge({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-brand-soft-2 bg-brand-soft px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-brand dark:text-brand",
        className,
      )}
      {...props}
    />
  );
}

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
        "flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand",
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-current opacity-60" />
      {children}
    </p>
  );
}
