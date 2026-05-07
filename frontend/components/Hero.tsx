// components/Hero.tsx
// Sezione hero: nome, titolo, tagline e CTA principali.

import { profile } from "@/data/cv";
import HeroAnimation from "./HeroAnimation";

export default function Hero() {
  const firstName = profile.name.split(" ")[0]; // "Andrea"

  return (
    <section id="hero" aria-label="Presentazione" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="flex flex-col gap-8 order-2 lg:order-1">
        <div className="space-y-4">
          {/* Hello con puntino colorato come da mockup */}
          <p className="text-4xl md:text-5xl font-heading font-bold">
            Hello<span className="text-primary">.</span>
          </p>

          {/* Riga decorativa + I'm Name */}
          <div className="flex items-center relative text-2xl md:text-3xl font-medium text-muted">
            <div className="absolute right-full mr-6 w-[100vw] h-[2px] bg-primary"></div>
            <p>I'm {firstName}</p>
          </div>

          {/* Titolo principale — unico H1 della pagina */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight">
            {profile.title}
          </h1>
        </div>

        {/* Tagline breve ricavata dal profilo */}
        <p className="max-w-2xl text-lg text-muted leading-relaxed">
          BI Analyst &amp; Qlik Developer · Energy, Manufacturing &amp; Healthcare<br />
          Appassionato di AI e costantemente attivo su progetti personali.
        </p>

      </div>

      <div className="order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-full">
        <HeroAnimation />
      </div>
    </section>
  );
}
