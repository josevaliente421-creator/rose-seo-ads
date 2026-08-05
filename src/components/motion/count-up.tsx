"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
} from "react";
import {
  animate,
  useInView,
  useReducedMotion,
  type UseInViewOptions,
} from "framer-motion";

type CountUpProps = ComponentProps<"span"> & {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  viewport?: UseInViewOptions;
};

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  viewport,
  className,
  ...props
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px", ...viewport });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: reduce ? 0 : duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  const formatted = `${prefix}${value.toLocaleString("es-MX", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${suffix}`;

  return (
    <span ref={ref} className={className} {...props}>
      {formatted}
    </span>
  );
}
