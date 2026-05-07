// components/Skills.tsx
// Griglia delle competenze tecniche per area.

import { skills } from "@/data/cv";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-32 space-y-12">
      <div className="space-y-4">
        <h2 id="skills-heading" className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center">
          Competenze Tecniche
        </h2>
        <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
      </div>

      {/* Griglia per area di competenza */}
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {skills.map((skillArea) => (
          <div key={skillArea.area} id={`skills-${skillArea.area.toLowerCase().replace(/\s+/g, "-")}`} className="bg-surface p-6 md:p-8 rounded-xl border border-surface-l2">
            {/* Nome area */}
            <dt className="text-xl font-heading font-semibold text-white mb-6">
              {skillArea.area}
            </dt>

            {/* Tool / tecnologie */}
            <dd>
              <ul role="list" aria-label={`Tool per ${skillArea.area}`} className="flex flex-wrap gap-3">
                {skillArea.tools.map((tool) => (
                  <li key={tool} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-muted hover:text-white hover:border-primary/50 transition-colors cursor-default">
                    {tool}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
