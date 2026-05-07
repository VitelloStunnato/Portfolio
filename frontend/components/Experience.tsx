// components/Experience.tsx
// Timeline delle esperienze lavorative.

import { experience } from "@/data/cv";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Esperienza</h2>

      {/* Timeline */}
      <ol role="list" aria-label="Esperienze lavorative in ordine cronologico">
        {experience.map((job, index) => (
          <li key={index} id={`experience-${index}`}>
            <article>
              {/* Header del job */}
              <header>
                <h3>{job.role}</h3>
                <p>
                  <strong>{job.companyFull ?? job.company}</strong>
                </p>
                <div>
                  <time>{job.period}</time>
                  <span aria-hidden="true">·</span>
                  <span>{job.location}</span>
                  {job.current && (
                    <mark aria-label="Posizione attuale">In corso</mark>
                  )}
                </div>
              </header>

              {/* Bullet points */}
              <ul>
                {job.bullets.map((bullet, bIndex) => (
                  <li key={bIndex}>{bullet}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
