import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import { VitaHeader } from "@/components/demo/vita/header";
import { VitaHero } from "@/components/demo/vita/hero";
import { VitaTimeline30 } from "@/components/demo/vita/timeline";
import { VitaServices } from "@/components/demo/vita/services";
import { VitaHistory } from "@/components/demo/vita/history";
import { VitaSpecialties } from "@/components/demo/vita/specialties";
import { VitaDay } from "@/components/demo/vita/day";
import { VitaAcompanamiento } from "@/components/demo/vita/acompanamiento";
import { VitaTeam } from "@/components/demo/vita/team";
import { VitaTrust } from "@/components/demo/vita/trust";
import { VitaFaq } from "@/components/demo/vita/faq";
import { VitaCta } from "@/components/demo/vita/cta";
import { VitaFooter } from "@/components/demo/vita/footer";
import { VitaCursor } from "@/components/demo/vita/cursor";
import { VitaSectionLabel } from "@/components/demo/vita/section-label";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VITA Clínica — La salud que te escucha",
  description:
    "Demo premium de plantilla: clínica médica con consultas de 30 minutos, especialistas que conocen tu historia y medicina preventiva. Sitio demostrativo desarrollado por RoseSEO&Ads.",
  robots: { index: false, follow: false },
};

export default function VitaDemoPage() {
  return (
    <div className={cn("demo-vita min-h-screen antialiased", cormorant.variable)}>
      <VitaCursor />
      <VitaSectionLabel />
      <VitaHeader />
      <main>
        <VitaHero />
        <VitaTimeline30 />
        <VitaServices />
        <VitaHistory />
        <VitaSpecialties />
        <VitaDay />
        <VitaAcompanamiento />
        <VitaTeam />
        <VitaTrust />
        <VitaFaq />
        <VitaCta />
      </main>
      <VitaFooter />
    </div>
  );
}
