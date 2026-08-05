import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Why } from "@/components/sections/why";
import { Process } from "@/components/sections/process";
import { Marketplace } from "@/components/sections/marketplace";
import { Portfolio } from "@/components/sections/portfolio";
import { Comparison } from "@/components/sections/comparison";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Why />
      <Process />
      <Marketplace />
      <Portfolio />
      <Comparison />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
