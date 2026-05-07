// components/Skills.tsx
// Griglia delle competenze tecniche per area.

import { skills } from "@/data/cv";
import { BarChart3, Database, LayoutDashboard, Cloud } from "lucide-react";

// Mappatura delle aree con icone specifiche
const iconMap: Record<string, React.ReactNode> = {
  "BI & Reporting": <BarChart3 size={28} strokeWidth={1.5} />,
  "Data Engineering": <Database size={28} strokeWidth={1.5} />,
  "Visualization": <LayoutDashboard size={28} strokeWidth={1.5} />,
  "Cloud & Integration": <Cloud size={28} strokeWidth={1.5} />,
};

// Watermark di sfondo giganti
const watermarkMap: Record<string, React.ReactNode> = {
  "BI & Reporting": <BarChart3 size={180} strokeWidth={1} />,
  "Data Engineering": <Database size={180} strokeWidth={1} />,
  "Visualization": <LayoutDashboard size={180} strokeWidth={1} />,
  "Cloud & Integration": <Cloud size={180} strokeWidth={1} />,
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-32 space-y-16 relative">
      <div className="space-y-4 relative z-10">
        <h2 id="skills-heading" className="text-3xl md:text-5xl font-heading font-bold text-foreground text-center tracking-tight">
          Competenze Tecniche
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto opacity-70"></div>
      </div>

      {/* Layout a Griglia "Bento" */}
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto px-4 md:px-0">
        {skills.map((skillArea, idx) => (
          <div 
            key={skillArea.area} 
            id={`skills-${skillArea.area.toLowerCase().replace(/\s+/g, "-")}`} 
            className="group relative bg-surface p-8 rounded-[2rem] border border-surface-l2 overflow-hidden hover:border-primary/40 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
          >
            {/* Sfondo Animato Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            {/* Watermark Gigante Icona */}
            <div className="absolute -bottom-10 -right-10 text-white/5 group-hover:text-primary/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 pointer-events-none">
              {watermarkMap[skillArea.area]}
            </div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Header Card con Icona */}
              <div className="flex items-center gap-5 mb-10">
                {/* Contenitore Icona */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-background border border-surface-l2 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(255,46,147,0.5)] group-hover:scale-110">
                  {iconMap[skillArea.area]}
                </div>
                {/* Titolo Area */}
                <dt className="text-2xl font-heading font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary/80 transition-all duration-300">
                  {skillArea.area}
                </dt>
              </div>

              {/* Tool / tecnologie (Pills interattivi) */}
              <dd className="mt-auto">
                <ul role="list" aria-label={`Tool per ${skillArea.area}`} className="flex flex-wrap gap-2.5">
                  {skillArea.tools.map((tool, tIdx) => (
                    <li 
                      key={tool} 
                      className="px-4 py-2 bg-background/80 backdrop-blur-sm border border-surface-l2 rounded-full text-sm font-medium text-muted 
                                 group-hover:border-primary/20 group-hover:bg-background/90 group-hover:-translate-y-0.5
                                 hover:!translate-y-0 hover:!text-white hover:!border-primary hover:!bg-surface-l2 hover:shadow-[0_0_15px_rgba(255,46,147,0.3)] 
                                 transition-all duration-300 cursor-default"
                      style={{ transitionDelay: `${tIdx * 20}ms` }}
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
