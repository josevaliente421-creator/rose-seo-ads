import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import { VitaHeader } from "@/components/demo/vita/header";
import { VitaHero } from "@/components/demo/vita/hero";
import { VitaServices } from "@/components/demo/vita/services";
import { VitaSpecialties } from "@/components/demo/vita/specialties";
import { VitaWhy } from "@/components/demo/vita/why";
import { VitaCases } from "@/components/demo/vita/cases";
import { VitaTeam } from "@/components/demo/vita/team";
import { VitaProcess } from "@/components/demo/vita/process";
import { VitaFaq } from "@/components/demo/vita/faq";
import { VitaCta } from "@/components/demo/vita/cta";
import { VitaFooter } from "@/components/demo/vita/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VITA Clínica — Medicina con evidencia, atención con tiempo",
  description:
    "Demo premium de plantilla: clínica médica con medicina preventiva, familiar y especialidades. Sitio demostrativo desarrollado por RoseSEO&Ads.",
  robots: { index: false, follow: false },
};

export default function VitaDemoPage() {
  return (
    <div className={cn("demo-vita min-h-screen antialiased", cormorant.variable)}>
      <VitaHeader />
      <main>
        <VitaHero />
        <VitaServices />
        <VitaSpecialties />
        <VitaWhy />
        <VitaCases />
        <VitaTeam />
        <VitaProcess />
        <VitaFaq />
        <VitaCta />
      </main>
      <VitaFooter />
    </div>
  );
}
