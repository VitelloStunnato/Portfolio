// components/Certifications.tsx
// Lista delle certificazioni professionali.

import { certifications } from "@/data/cv";

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="scroll-mt-32 space-y-12">
      <div className="space-y-4">
        <h2 id="certifications-heading" className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center">
          Certificazioni
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
      </div>

      <ul role="list" aria-label="Certificazioni professionali" className="max-w-4xl mx-auto space-y-6">
        {certifications.map((cert, index) => (
          <li key={index} id={`cert-${index}`}>
            <article className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-8 bg-surface border border-surface-l2 rounded-xl hover:border-primary/50 transition-colors">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="flex items-center gap-2 text-muted">
                  <span className="font-medium text-foreground">{cert.issuer}</span>
                  <span aria-hidden="true" className="w-1 h-1 rounded-full bg-muted"></span>
                  <time className="font-mono text-sm">{cert.date}</time>
                </p>
              </div>

              {/* Link Credly se disponibile */}
              {cert.credlyUrl && (
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Verifica certificazione ${cert.name} su Credly`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-full hover:bg-primary/10 transition-colors shrink-0 w-max"
                >
                  Verifica su Credly
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              )}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
