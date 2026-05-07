// components/Certifications.tsx
// Lista delle certificazioni professionali.

import { certifications } from "@/data/cv";

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="scroll-mt-32 space-y-16 relative">
      
      {/* Intestazione */}
      <div className="space-y-4 relative z-10">
        <h2 id="certifications-heading" className="text-3xl md:text-5xl font-heading font-bold text-foreground text-center tracking-tight">
          Certificazioni
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto opacity-70"></div>
      </div>

      <ul role="list" aria-label="Certificazioni professionali" className="max-w-4xl mx-auto px-4 md:px-0 space-y-8 relative z-10">
        {certifications.map((cert, index) => (
          <li key={index} id={`cert-${index}`} className="group">
            <article className="relative bg-surface/30 backdrop-blur-md border border-surface-l2 p-8 md:p-10 rounded-[2rem] shadow-sm transition-all duration-500 ease-out 
                               hover:-translate-y-2 hover:bg-surface/50 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
              
              {/* Spotlight interno alla card su hover */}
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Immagine Certificazione (Badge) */}
              {cert.imageUrl && (
                <div className="relative shrink-0 w-40 h-40 group-hover:scale-110 transition-transform duration-700 ease-out z-10">
                  {/* Glow circolare dietro il badge che si accende al passaggio del mouse */}
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <img 
                    src={cert.imageUrl} 
                    alt={`Badge ${cert.name}`} 
                    className="w-full h-full object-contain drop-shadow-xl group-hover:drop-shadow-[0_0_15px_rgba(255,46,147,0.3)] transition-all duration-500 relative z-10"
                  />
                </div>
              )}

              {/* Dettagli testuali */}
              <div className="flex-1 text-center md:text-left z-10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary/80 transition-all duration-300 mb-4">
                  {cert.name}
                </h3>
                
                <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start gap-3 md:gap-4 mb-6">
                  {/* Issuer Pill */}
                  <span className="inline-flex items-center justify-center px-4 py-1.5 bg-background border border-surface-l2 rounded-full text-sm font-semibold tracking-wide text-primary shadow-inner group-hover:border-primary/30 transition-colors duration-300">
                    {cert.issuer}
                  </span>
                  
                  <span aria-hidden="true" className="hidden md:block w-1.5 h-1.5 rounded-full bg-surface-l2"></span>
                  
                  {/* Data */}
                  <time className="font-mono text-muted/80 text-sm flex items-center justify-center gap-2 group-hover:text-muted transition-colors duration-300">
                    <svg className="w-4 h-4 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {cert.date}
                  </time>
                </div>

                {/* Pulsante Azione (Credly) */}
                {cert.credlyUrl && (
                  <div className="flex justify-center md:justify-start">
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verifica certificazione ${cert.name} su Credly`}
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-bold tracking-wide bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(255,46,147,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                      Verifica su Credly
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </a>
                  </div>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
