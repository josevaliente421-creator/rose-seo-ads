import { Mail, MapPin, Phone } from "lucide-react";
import { DemoContainer } from "@/components/demo/container";
import { site } from "@/lib/site";

const areas = [
  { label: "Servicios", href: "#servicios" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Casos", href: "#casos" },
  { label: "Equipo", href: "#equipo" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
];

export function VitaFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#070405]">
      <DemoContainer className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-20">
          <div>
            <p className="flex items-baseline gap-2">
              <span className="font-demo-serif text-3xl font-bold tracking-tight text-[var(--demo-gold)]">
                VITA
              </span>
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
                Clínica
              </span>
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Medicina con evidencia, atención con tiempo.
            </p>
          </div>

          <nav aria-label="Áreas del sitio">
            <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-white/40">
              Áreas
            </h3>
            <ul className="mt-5 space-y-2.5">
              {areas.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[var(--demo-gold)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-white/40">
              Contacto
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--demo-gold)]/70" aria-hidden />
                Av. Isidora Goyenechea 3000 · Las Condes, Santiago
              </li>
              <li>
                <a
                  href="mailto:hola@vitaclinica.cl"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[var(--demo-gold)]"
                >
                  <Mail className="size-4 text-[var(--demo-gold)]/70" aria-hidden />
                  hola@vitaclinica.cl
                </a>
              </li>
              <li>
                <a
                  href="                  tel:+56223456789"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[var(--demo-gold)]"
                >
                  <Phone className="size-4 text-[var(--demo-gold)]/70" aria-hidden />
                  +56 2 2345 6789
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
            © {new Date().getFullYear()} VITA Clínica · Sitio demostrativo
          </p>
          <a
            href={site.url}
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-[var(--demo-gold)]"
          >
            Sitio demostrativo desarrollado por RoseSEO&Ads
          </a>
        </div>
      </DemoContainer>
    </footer>
  );
}
