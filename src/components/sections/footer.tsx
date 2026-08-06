import { Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { RoseLogo } from "@/components/ui/logo";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/ui/social-icons";
import { site } from "@/lib/site";

const footerNav = [
  {
    title: "Navegación",
    links: [
      { label: "Por qué nosotros", href: "#por-que" },
      { label: "Proceso", href: "#proceso" },
      { label: "Plantillas", href: "#plantillas" },
      { label: "Trabajos", href: "#trabajos" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Sitio web en 7 días", href: "#contacto" },
      { label: "SEO", href: "#contacto" },
      { label: "Google Ads", href: "#contacto" },
      { label: "Plantillas", href: "#plantillas" },
    ],
  },
] as const;

const socials = [
  { label: "Facebook", href: site.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: site.social.instagram, icon: InstagramIcon },
  { label: "LinkedIn", href: site.social.linkedin, icon: LinkedinIcon },
].filter((s) => s.href) as { label: string; href: string; icon: (props: { className?: string }) => React.ReactElement }[];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-24">
          <div>
            <RoseLogo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Convertimos negocios en marcas memorables. Sitios web premium,
              SEO y publicidad para empresas que merecen destacar.
            </p>
            <div className="mt-7 flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-brand-soft-2 hover:bg-brand-soft hover:text-brand"
                >
                  <social.icon className="size-4.5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] text-foreground/80 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Contacto
            </h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 text-foreground/80 transition-colors hover:text-brand"
                >
                  <Phone className="size-4 text-brand" aria-hidden />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-foreground/80 transition-colors hover:text-brand"
                >
                  <Mail className="size-4 text-brand" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-foreground/80 transition-colors hover:text-brand"
                >
                  <MessageCircle className="size-4 text-brand" aria-hidden />
                  WhatsApp directo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Hecho para que tu negocio florezca
          </p>
        </div>
      </Container>
    </footer>
  );
}
