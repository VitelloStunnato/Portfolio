// components/Experience.tsx
// Timeline delle esperienze lavorative.

import { experience } from "@/data/cv";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-32 space-y-16 relative">
      
      {/* Background glow per l'intera sezione */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="space-y-4 relative z-10">
        <h2 id="experience-heading" className="text-3xl md:text-5xl font-heading font-bold text-foreground text-center tracking-tight">
          Esperienza
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto opacity-70"></div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto px-4 md:px-0 relative z-10">
        <div className="relative space-y-10">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-10 md:pl-16 group cursor-default">
              
              {/* Linea verticale che connette gli elementi */}
              {index !== experience.length - 1 && (
                <div className="absolute left-[11px] top-12 bottom-[-2.5rem] w-[2px] bg-gradient-to-b from-surface-l2 to-transparent group-hover:from-primary/50 transition-colors duration-700"></div>
              )}
              
              {/* Pallino Glow Attivo */}
              <div className="absolute left-0 top-7 flex items-center justify-center w-6 h-6">
                {/* Outer ring animato (Radar effect) */}
                <div className="absolute inset-0 rounded-full border border-primary/30 scale-50 opacity-0 group-hover:scale-[2.5] group-hover:opacity-0 transition-all duration-1000 ease-out"></div>
                {/* Inner ring per hover */}
                <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
                {/* Pallino solido */}
                <div className="w-3 h-3 bg-surface border border-surface-l2 rounded-full group-hover:bg-primary group-hover:border-primary group-hover:scale-125 transition-all duration-300 z-10 shadow-[0_0_0_0_rgba(255,46,147,0)] group-hover:shadow-[0_0_15px_rgba(255,46,147,0.8)]"></div>
              </div>
              
              {/* Card Esperienza 3D */}
              <article className="relative bg-surface/30 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-surface-l2 shadow-sm transition-all duration-500 ease-out 
                                 group-hover:-translate-y-2 group-hover:bg-surface/50 group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/5 overflow-hidden">
                
                {/* Spotlight interno alla card su hover */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Header del job */}
                <header className="mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative z-10">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-white transition-colors duration-300">{job.role}</h3>
                    <p className="text-lg font-medium text-primary mt-1">
                      {job.companyFull ?? job.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-muted">
                    <time className="font-mono bg-background/60 px-4 py-1.5 rounded-full border border-surface-l2 shadow-inner group-hover:border-primary/20 transition-colors duration-300">
                      {job.period}
                    </time>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="flex items-center gap-1.5 text-muted/80">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        {job.location}
                      </span>
                      {job.current && (
                        <mark aria-label="Posizione attuale" className="bg-primary/10 border border-primary/20 text-primary px-2.5 py-0.5 rounded-md text-xs font-semibold tracking-wide shadow-[0_0_10px_rgba(255,46,147,0.1)]">Attuale</mark>
                      )}
                    </div>
                  </div>
                </header>

                {/* Bullet points */}
                <ul className="space-y-4 text-muted/80 relative z-10">
                  {job.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex gap-4 group/bullet hover:text-muted transition-colors duration-200">
                      <span className="text-primary/40 mt-1.5 group-hover/bullet:text-primary transition-all transform group-hover/bullet:scale-125 duration-300">▹</span>
                      <span className="leading-relaxed text-[15px]">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
