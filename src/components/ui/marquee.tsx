import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
  duration?: number;
  reverse?: boolean;
};

export function Marquee({
  children,
  duration = 36,
  reverse = false,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("relative flex w-full overflow-hidden", className)}
      {...props}
    >
      <div
        className="animate-marquee flex min-w-full shrink-0 items-center"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
      <div
        aria-hidden
        className="animate-marquee flex min-w-full shrink-0 items-center"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
}
