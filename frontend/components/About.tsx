// components/About.tsx
// Sezione profilo professionale e lingue.

import { profile, languages, education } from "@/data/cv";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <h2 id="about-heading">Chi sono</h2>

      {/* Profilo professionale */}
      <div id="about-summary">
        <p>{profile.summary}</p>
      </div>

      {/* Formazione */}
      <div id="about-education">
        <h3>Formazione</h3>
        {education.map((item, index) => (
          <article key={index}>
            <h4>{item.degree}</h4>
            <p>{item.institution}</p>
            <time>{item.period}</time>
          </article>
        ))}
      </div>

      {/* Lingue */}
      <div id="about-languages">
        <h3>Lingue</h3>
        <ul role="list">
          {languages.map((lang) => (
            <li key={lang.language}>
              <span>{lang.language}</span>
              <span>{lang.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
