import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function DemoContainer({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-12", className)}
      {...props}
    />
  );
}
