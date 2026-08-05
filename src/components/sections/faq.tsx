import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px hairline-gradient"
      />
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeader
            align="left"
            eyebrow="FAQ"
            title={
              <>
                Preguntas <span className="text-gradient">frecuentes</span>
              </>
            }
            description="Todo lo que necesitas saber antes de dar el primer paso. ¿Tienes otra duda? Escríbenos y te respondemos en menos de 24 horas."
          />
          <Reveal delay={0.15}>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 font-medium text-brand transition-colors hover:text-brand-hover"
            >
              Hacer otra pregunta →
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>
                  <span className="font-display text-lg font-semibold tracking-tight">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
