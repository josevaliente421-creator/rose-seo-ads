import { Mail, MapPin, Phone } from "lucide-react";
import { DemoContainer } from "@/components/demo/container";
import { site } from "@/lib/site";
import { nav, footerContact } from "./content";

export function FuegoFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#080807]">
      <DemoContainer className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-20">
          <div>
            <p className="flex items-baseline gap-2">
              <span className="font-demo-serif text-3xl font-bold tracking-tight text-[var(--demo-paper)]">
                {nav.brand}
              </span>
              <span className="font-mono text-[9px] font-medium uppercase tracking-[0.3em] text-white/50">
                {nav.brandSub}
              </span>
            </p>
            <p className="mt-5 max-w-xs font-demo-serif text-lg italic leading-snug text-white/50">
              La cocina empieza antes del primer bocado.
            </p>
          </div>

          <nav aria-label="Áreas del sitio">
            <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-white/40">
              Áreas
            </h3>
            <ul className="mt-5 space-y-2.5">
              {[...nav.links, { label: "Reservar mesa", href: "#reservas" }].map((link) => (
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
                {footerContact.address}
              </li>
              <li>
                <a
                  href={`mailto:${footerContact.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[var(--demo-gold)]"
                >
                  <Mail className="size-4 text-[var(--demo-gold)]/70" aria-hidden />
                  {footerContact.email}
                </a>
              </li>
              <li>
                <a
                  href={footerContact.phoneHref}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-[var(--demo-gold)]"
                >
                  <Phone className="size-4 text-[var(--demo-gold)]/70" aria-hidden />
                  {footerContact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
            © {new Date().getFullYear()} FUEGO · Sitio demostrativo · Restaurante ficticio
          </p>
          <a
            href={site.url}
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-[var(--demo-gold)]"
          >
            Experiencia digital creada por Rose SEO &amp; Ads
          </a>
        </div>
      </DemoContainer>
    </footer>
  );
}