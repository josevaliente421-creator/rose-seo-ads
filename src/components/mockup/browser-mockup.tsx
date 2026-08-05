import { cn } from "@/lib/utils";

type BrowserMockupProps = {
  url?: string;
  children?: React.ReactNode;
  className?: string;
  barClassName?: string;
  bodyClassName?: string;
};

export function BrowserMockup({
  url = "tusitio.com",
  children,
  className,
  barClassName,
  bodyClassName,
}: BrowserMockupProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-lift",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 border-b border-border bg-muted/60 px-4 py-2.5",
          barClassName,
        )}
      >
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-xs items-center justify-center rounded-md bg-card px-3">
          <span className="truncate font-mono text-[11px] text-muted-foreground">
            {url}
          </span>
        </div>
        <div className="w-8" aria-hidden />
      </div>
      <div className={cn("relative", bodyClassName)}>{children}</div>
    </div>
  );
}
