// components/About.tsx
// Sezione profilo professionale e lingue.

import { profile, languages, education } from "@/data/cv";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 lg:gap-24 scroll-mt-32">
      {/* Colonna Sinistra (Titolo) */}
      <div className="space-y-4">
        <h2 id="about-heading" className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          About me
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full"></div>
      </div>

      {/* Colonna Destra (Contenuto) */}
      <div className="space-y-12">
        {/* Profilo professionale */}
        <div id="about-summary" className="text-base text-muted leading-relaxed">
          <p>{profile.summary}</p>
        </div>

        {/* Griglia "Stats" / Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
          {/* Formazione */}
          <div id="about-education" className="space-y-4">
            <h3 className="text-xl font-heading font-semibold text-foreground">Formazione</h3>
            {education.map((item, index) => (
              <article key={index} className="space-y-1">
                <h4 className="font-medium text-white">{item.degree}</h4>
                <p className="text-sm text-muted">{item.institution}</p>
                <time className="text-xs font-mono text-primary">{item.period}</time>
              </article>
            ))}
          </div>

          {/* Lingue */}
          <div id="about-languages" className="space-y-4">
            <h3 className="text-xl font-heading font-semibold text-foreground">Lingue</h3>
            <ul role="list" className="space-y-3">
              {languages.map((lang) => (
                <li key={lang.language} className="flex flex-col">
                  <span className="font-medium text-white">{lang.language}</span>
                  <span className="text-sm text-primary">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
