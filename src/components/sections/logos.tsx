import { Container } from "@/components/ui/container";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/motion/reveal";
import { clients } from "@/lib/data";

export function Logos() {
  return (
    <section id="clientes" className="border-y border-border bg-card/50 py-14">
      <Container>
        <Reveal className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Negocios que ya florecen con nosotros
          </p>
        </Reveal>
      </Container>

      <Reveal className="mt-10" blur={false}>
        <Marquee duration={32}>
          {clients.map((client) => (
            <span
              key={client}
              className="mx-8 flex items-center gap-2.5 font-display text-lg font-semibold whitespace-nowrap text-muted-foreground/80 transition-colors hover:text-brand sm:mx-12 sm:text-xl"
            >
              <span aria-hidden className="size-1.5 rounded-full bg-brand/50" />
              {client}
            </span>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
