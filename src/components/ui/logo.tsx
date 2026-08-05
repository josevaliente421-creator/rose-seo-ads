import Image from "next/image";
import { cn } from "@/lib/utils";

type RoseLogoProps = {
  className?: string;
  iconClassName?: string;
};

export function RoseLogo({ className, iconClassName }: RoseLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/LOGO.png"
        alt="Rose SEO & Ads"
        width={40}
        height={40}
        priority
        className={cn("size-10 shrink-0 object-contain", iconClassName)}
      />
      <span className="font-display text-[15px] font-bold tracking-tight text-foreground">
        Rose
        <span className="text-brand"> SEO&nbsp;&&nbsp;Ads</span>
      </span>
    </span>
  );
}
