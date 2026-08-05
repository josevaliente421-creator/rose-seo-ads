import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-dark text-white shadow-soft hover:bg-brand hover:shadow-lift dark:bg-brand dark:text-white dark:hover:bg-brand-hover",
        secondary:
          "border border-border bg-card/60 text-foreground backdrop-blur hover:border-brand-soft-2 hover:bg-brand-soft hover:text-brand dark:hover:text-brand",
        ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
        white:
          "bg-white text-brand-dark hover:bg-rose-50 shadow-soft dark:bg-foreground dark:text-background dark:hover:bg-rose-50 dark:hover:text-brand-dark",
      },
      size: {
        md: "h-11 px-6 text-[15px]",
        lg: "h-13 px-8 text-base",
        sm: "h-9 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Shine = ({ className }: { className?: string }) => (
  <span
    aria-hidden
    className={cn(
      "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full",
      className,
    )}
  />
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants };
