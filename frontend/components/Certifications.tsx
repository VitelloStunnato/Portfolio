// components/Certifications.tsx
// Lista delle certificazioni professionali.

import { certifications } from "@/data/cv";

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading">
      <h2 id="certifications-heading">Certificazioni</h2>

      <ul role="list" aria-label="Certificazioni professionali">
        {certifications.map((cert, index) => (
          <li key={index} id={`cert-${index}`}>
            <article>
              <h3>{cert.name}</h3>
              <p>
                <span>{cert.issuer}</span>
                <span aria-hidden="true">·</span>
                <time>{cert.date}</time>
              </p>

              {/* Link Credly se disponibile */}
              {cert.credlyUrl && (
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Verifica certificazione ${cert.name} su Credly`}
                >
                  Verifica su Credly
                </a>
              )}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
