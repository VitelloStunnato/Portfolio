export default function ClientsMarquee() {
  const clients = [
    { name: "Ermenegildo Zegna", logo: "/logos/ermenegildo-zegna.svg" },
    { name: "Medacta International", logo: "/logos/Medacta Group Logo SVG.svg" },
    { name: "SNAM", logo: "/logos/Snam Symbol PNG.png" },
    { name: "A2A", logo: "/logos/a2a-seeklogo.svg" },
    { name: "Italgas", logo: "/logos/Italgas Logo PNG.png" },
    { name: "Edison", logo: "/logos/Edison Logo SVG.svg" },
    { name: "Nippon Express (Tramo Group)", logo: "/logos/Nippon Express Logo SVG.svg" },
    { name: "Unareti", logo: "/logos/unareti-seeklogo.svg" },
    { name: "Acinque / ACSM AGAM", logo: "/logos/Acinque Logo SVG.svg" },
    { name: "Valentino", logo: "/logos/Valentino-OeemEYrrv_brandlogos.net.svg" },
  ];

  return (
    <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-surface/50 border-y border-border py-8 overflow-hidden flex flex-col group">
      
      {/* Titolo Descrittivo */}
      <div className="w-full mb-6">
        <p className="text-center text-xs md:text-sm font-semibold text-muted/60 uppercase tracking-[0.2em]">
          Clienti e aziende con cui ho collaborato
        </p>
      </div>

      <div className="relative w-full flex items-center">
        {/* Sfumature ai bordi per un ingresso/uscita fluido */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee whitespace-nowrap items-center">
          {/* Ripetiamo la lista due volte per creare il loop infinito continuo */}
          {[...clients, ...clients].map((client, idx) => (
            <div key={idx} className="mx-12 flex-shrink-0 flex items-center justify-center">
              <img 
                src={client.logo} 
                alt={client.name} 
                title={client.name}
                className="h-10 w-auto object-contain filter brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" 
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
            width: max-content;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused !important;
          }
        `}
      </style>
    </div>
  );
}
