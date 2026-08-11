import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import { FuegoHeader } from "@/components/demo/fuego/header";
import { FuegoHero } from "@/components/demo/fuego/hero";
import { FuegoSection } from "@/components/demo/fuego/fuego";
import { FuegoIngredientes } from "@/components/demo/fuego/ingredientes";
import { FuegoCarta } from "@/components/demo/fuego/carta";
import { FuegoVino } from "@/components/demo/fuego/vino";
import { FuegoCoctel } from "@/components/demo/fuego/coctel";
import { FuegoExperiencias } from "@/components/demo/fuego/experiencias";
import { FuegoNoche } from "@/components/demo/fuego/noche";
import { FuegoGaleria } from "@/components/demo/fuego/galeria";
import { FuegoReserva } from "@/components/demo/fuego/reserva";
import { FuegoUbicacion } from "@/components/demo/fuego/ubicacion";
import { FuegoCta } from "@/components/demo/fuego/cta";
import { FuegoVenta } from "@/components/demo/fuego/venta";
import { FuegoFooter } from "@/components/demo/fuego/footer";
import { FuegoCursor } from "@/components/demo/fuego/cursor";
import { FuegoScrollIndicator } from "@/components/demo/fuego/scroll-indicator";
import { FuegoMobileCta } from "@/components/demo/fuego/mobile-cta";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FUEGO — Donde el fuego se convierte en cocina",
  description:
    "Demo premium de plantilla: restaurante de autor con brasas, carta guiada por el fuego y reserva por experiencia. Sitio demostrativo desarrollado por RoseSEO&Ads.",
  robots: { index: false, follow: false },
};

export default function FuegoDemoPage() {
  return (
    <div className={cn("demo-fuego min-h-screen antialiased", cormorant.variable)}>
      <FuegoCursor />
      <FuegoScrollIndicator />
      <FuegoHeader />
      <main>
        <FuegoHero />
        <FuegoSection />
        <FuegoIngredientes />
        <FuegoCarta />
        <FuegoVino />
        <FuegoCoctel />
        <FuegoExperiencias />
        <FuegoNoche />
        <FuegoGaleria />
        <FuegoReserva />
        <FuegoUbicacion />
        <FuegoCta />
        <FuegoVenta />
      </main>
      <FuegoFooter />
      <FuegoMobileCta />
    </div>
  );
}