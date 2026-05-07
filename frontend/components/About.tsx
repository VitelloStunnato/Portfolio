// components/About.tsx
// Sezione profilo professionale e competenze chiave.

import React from "react";
import { profile } from "@/data/cv";
import { BarChart3, Database, LineChart } from "lucide-react";

export default function About() {
  const services = [
    { name: "BI & Reporting", icon: BarChart3 },
    { name: "Data Engineering", icon: Database },
    { name: "Data Visualization", icon: LineChart },
  ];

  const stats = [
    { number: "8", symbol: "+", label: "Years of\nexperience" },
    { number: "200", symbol: "+", label: "Supported\nusers" },
    { number: "30", symbol: "%", label: "Reporting\ntime reduction" },
  ];

  return (
    <section id="about" aria-labelledby="about-heading" className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 lg:gap-24 scroll-mt-32 items-center">
      {/* Colonna Sinistra (Servizi / Timeline) */}
      <div className="flex flex-col items-start gap-4 py-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <React.Fragment key={index}>
              <div className="flex items-center gap-8">
                {/* Linea arancione */}
                <div className="w-2 flex justify-center">
                  <div className="w-[2px] h-20 bg-primary"></div>
                </div>
                {/* Icona e Testo */}
                <div className="flex items-center gap-6">
                  <Icon className="w-10 h-10 text-white" strokeWidth={1.2} />
                  <span className="text-xl font-medium text-white">{service.name}</span>
                </div>
              </div>
              {/* Punto di connessione (se non è l'ultimo elemento) */}
              {index < services.length - 1 && (
                <div className="w-2 flex justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Colonna Destra (Contenuto e Statistiche) */}
      <div className="space-y-12">
        <div className="space-y-6">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-heading font-bold text-white">
            About me
          </h2>
          
          <div id="about-summary" className="text-lg text-muted leading-relaxed">
            <p>{profile.summary}</p>
          </div>
        </div>

        {/* Statistiche */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold text-white">{stat.number}</span>
                <span className="text-3xl md:text-4xl font-bold text-primary">{stat.symbol}</span>
              </div>
              <p className="text-base text-muted whitespace-pre-line leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
