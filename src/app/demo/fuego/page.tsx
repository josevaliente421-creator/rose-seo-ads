import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import { FuegoHeader } from "@/components/demo/fuego/header";
import { FuegoHero } from "@/components/demo/fuego/hero";
import { FuegoTimeline30 } from "@/components/demo/fuego/timeline";
import { FuegoServices } from "@/components/demo/fuego/services";
import { FuegoHistory } from "@/components/demo/fuego/history";
import { FuegoSpecialties } from "@/components/demo/fuego/specialties";
import { FuegoDay } from "@/components/demo/fuego/day";
import { FuegoAcompanamiento } from "@/components/demo/fuego/acompanamiento";
import { FuegoTeam } from "@/components/demo/fuego/team";
import { FuegoTrust } from "@/components/demo/fuego/trust";
import { FuegoFaq } from "@/components/demo/fuego/faq";
import { FuegoCta } from "@/components/demo/fuego/cta";
import { FuegoFooter } from "@/components/demo/fuego/footer";
import { FuegoCursor } from "@/components/demo/fuego/cursor";
import { FuegoSectionLabel } from "@/components/demo/fuego/section-label";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fuego Parrilla — La brasa que se siente en la mesa",
  description:
    "Demo premium de plantilla: parrilla contemporánea con cortes madurados en casa, brasa de quebracho y maridaje chileno. Sitio demostrativo desarrollado por RoseSEO&Ads.",
  robots: { index: false, follow: false },
};

export default function FuegoDemoPage() {
  return (
    <div className={cn("demo-fuego min-h-screen antialiased", cormorant.variable)}>
      <FuegoCursor />
      <FuegoSectionLabel />
      <FuegoHeader />
      <main>
        <FuegoHero />
        <FuegoTimeline30 />
        <FuegoServices />
        <FuegoHistory />
        <FuegoSpecialties />
        <FuegoDay />
        <FuegoAcompanamiento />
        <FuegoTeam />
        <FuegoTrust />
        <FuegoFaq />
        <FuegoCta />
      </main>
      <FuegoFooter />
    </div>
  );
}