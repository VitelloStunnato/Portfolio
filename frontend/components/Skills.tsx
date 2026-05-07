// components/Skills.tsx
// Griglia delle competenze tecniche per area.

import { skills } from "@/data/cv";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Competenze Tecniche</h2>

      {/* Griglia per area di competenza */}
      <dl>
        {skills.map((skillArea) => (
          <div key={skillArea.area} id={`skills-${skillArea.area.toLowerCase().replace(/\s+/g, "-")}`}>
            {/* Nome area */}
            <dt>{skillArea.area}</dt>

            {/* Tool / tecnologie */}
            <dd>
              <ul role="list" aria-label={`Tool per ${skillArea.area}`}>
                {skillArea.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
