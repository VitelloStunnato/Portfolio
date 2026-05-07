// components/Hero.tsx
// Sezione hero: nome, titolo, tagline e CTA principali.

import { profile } from "@/data/cv";

export default function Hero() {
  return (
    <section id="hero" aria-label="Presentazione">
      {/* Titolo principale — unico H1 della pagina */}
      <h1>{profile.name}</h1>

      {/* Titolo professionale */}
      <p role="doc-subtitle">{profile.title}</p>

      {/* Tagline breve ricavata dal profilo */}
      <p>
        Senior BI Analyst &amp; Qlik Developer · Energy, Manufacturing &amp; Healthcare
      </p>

      {/* Call to action */}
      <nav aria-label="Azioni principali">
        <a href={`mailto:${profile.email}`} id="hero-cta-email">
          Scrivimi una mail
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          id="hero-cta-linkedin"
        >
          LinkedIn
        </a>
        <a href="#experience" id="hero-cta-work">
          Guarda il mio lavoro
        </a>
      </nav>

      {/* Info di contatto rapido */}
      <address>
        <span>{profile.location}</span>
        <span aria-hidden="true">·</span>
        <a href={`tel:${profile.phone}`}>{profile.phone}</a>
      </address>
    </section>
  );
}
