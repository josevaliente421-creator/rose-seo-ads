import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import { LexHeader } from "@/components/demo/lex/header";
import { LexHero } from "@/components/demo/lex/hero";
import { LexServices } from "@/components/demo/lex/services";
import { LexSpecialties } from "@/components/demo/lex/specialties";
import { LexWhy } from "@/components/demo/lex/why";
import { LexCases } from "@/components/demo/lex/cases";
import { LexTeam } from "@/components/demo/lex/team";
import { LexProcess } from "@/components/demo/lex/process";
import { LexFaq } from "@/components/demo/lex/faq";
import { LexCta } from "@/components/demo/lex/cta";
import { LexFooter } from "@/components/demo/lex/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LEX Abogados — La estrategia legal que protege el futuro de tu empresa",
  description:
    "Demo premium de plantilla: estudio jurídico especializado en derecho corporativo. Sitio demostrativo desarrollado por RoseSEO&Ads.",
  robots: { index: false, follow: false },
};

export default function LexDemoPage() {
  return (
    <div className={cn("demo-lex min-h-screen antialiased", cormorant.variable)}>
      <LexHeader />
      <main>
        <LexHero />
        <LexServices />
        <LexSpecialties />
        <LexWhy />
        <LexCases />
        <LexTeam />
        <LexProcess />
        <LexFaq />
        <LexCta />
      </main>
      <LexFooter />
    </div>
  );
}
