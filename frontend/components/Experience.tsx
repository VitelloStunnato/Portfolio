// components/Experience.tsx
// Timeline delle esperienze lavorative.

import { experience } from "@/data/cv";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-32 space-y-12">
      <div className="space-y-4">
        <h2 id="experience-heading" className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center">
          Esperienza
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto pl-4 md:pl-0">
        <ol role="list" aria-label="Esperienze lavorative in ordine cronologico" className="relative border-l border-border md:border-l-0 md:space-y-8">
          {experience.map((job, index) => (
            <li key={index} id={`experience-${index}`} className="mb-10 ml-6 md:ml-0 md:mb-0 relative">
              {/* Pallino sulla timeline */}
              <span className="absolute flex items-center justify-center w-3 h-3 bg-primary rounded-full -left-[1.65rem] md:-left-1.5 top-5 ring-4 ring-background"></span>
              
              {/* Card Esperienza */}
              <article className="bg-surface p-6 md:p-8 rounded-xl border border-surface-l2 shadow-sm hover:border-primary/50 transition-colors md:ml-8">
                {/* Header del job */}
                <header className="mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{job.role}</h3>
                    <p className="text-lg font-medium text-primary mt-1">
                      {job.companyFull ?? job.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-muted">
                    <time className="font-mono bg-background px-3 py-1 rounded-full border border-border">{job.period}</time>
                    <div className="mt-2 flex items-center gap-2">
                      <span>{job.location}</span>
                      {job.current && (
                        <mark aria-label="Posizione attuale" className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs font-medium">In corso</mark>
                      )}
                    </div>
                  </div>
                </header>

                {/* Bullet points */}
                <ul className="space-y-3 text-muted">
                  {job.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex gap-3">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
