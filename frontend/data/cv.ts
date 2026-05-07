// frontend/data/cv.ts
// Unica fonte di verità per tutti i contenuti del sito portfolio.
// Tutti i componenti leggono da qui — mai hardcodare testo nei componenti.

export const profile = {
  name: "Andrea Ballestrero",
  title: "Senior BI Consultant",
  phone: "+393384626172",
  email: "ballestrero.andrea93@gmail.com",
  linkedin: "https://www.linkedin.com/in/aballestrero",
  linkedinHandle: "aballestrero",
  github: "https://github.com/VitelloStunnato",
  location: "Pero (MI), Italia",
  summary:
    "Senior BI Analyst & Qlik Developer con esperienza nello sviluppo di soluzioni di data visualization e reporting in ambiente Qlik Sense e QlikView. Esperto nella progettazione di dashboard interattive, automazione dei flussi informativi e analisi dei KPI aziendali per i settori Energy & Utilities, manifatturiero e medicale/sanitario. Orientato al miglioramento continuo e all'ottimizzazione dei processi decisionali basati sui dati.",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Esperienza", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certificazioni", href: "#certifications" },
  { label: "Contatti", href: "#contact" },
];

export interface ExperienceItem {
  company: string;
  companyFull?: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "ICE Suisse SA",
    role: "Senior BI Consultant",
    period: "09/2023 – In corso",
    location: "Balerna (CH)",
    current: true,
    bullets: [
      "Consulente Qlik specializzato in progettazione, sviluppo e formazione su Qlik Sense e Qlik NPrinting per clienti del settore industriale, farmaceutico e manifatturiero.",
      "Erogazione di corsi avanzati su scripting, data modeling, visualization design e reporting automation per clienti come Medacta International SA, FCTSA, Edilgroup SA, Roelmi HPC, Sandro Vanini SA e Rodacciai SpA.",
      "Coordinamento e gestione end-to-end di progetti BI, dalla fase di analisi funzionale e fattibilità fino al rilascio in produzione.",
      "Valera CH – Realizzazione completa di una soluzione analitica per la gestione di vendite e contabilità generale, con creazione dei QVD di primo e secondo livello, progettazione UX e dashboard dedicate.",
      "Tramo Group – Installazione e configurazione di Qlik Data Transfer per migrazione dati da Enterprise a Cloud, con formazione su Qlik Cloud Tabular Reporting.",
      "Ermenegildo Zegna – Sviluppo di flussi ETL per l'app Retail Sales e reportistica associata.",
      "MedicAir Italia S.r.l. – Gestione completa della piattaforma Qlik Sense (sviluppo, AMS, manutenzione evolutiva) e realizzazione di dashboard direzionali e KPI aziendali.",
    ],
  },
  {
    company: "PIC / NTT Data",
    companyFull: "PIC Servizi per l'Informatica (presso NTT Data)",
    role: "Senior BI Consultant",
    period: "02/2020 – 08/2023",
    location: "Milano",
    current: false,
    bullets: [
      "Realizzazione di soluzioni BI QlikSense per il monitoraggio dei processi energetici e contabili.",
      "Sviluppo di cruscotti direzionali e KPI aziendali per Unareti e A2A, integrando dati multi-sorgente.",
      "Implementazione di sistemi di Continuous Monitoring e Risk Auditing per SNAM e Italgas.",
      "Integrazione di dati da sistemi ARCHER, One Space e Cartesio Master con ottimizzazione DWH.",
      "Supporto a oltre 200 utenti interni con dashboard self-service e formazione continua.",
    ],
  },
  {
    company: "PIC Servizi per l'Informatica",
    role: "Junior BI Consultant",
    period: "10/2016 – 01/2020",
    location: "Milano",
    current: false,
    bullets: [
      "Sviluppo di dashboard Qlik Sense per il controllo di fatturazione, ratei e ciclo passivo (clienti: Edison, ASCM AGAM).",
      "Gestione e ottimizzazione dei processi di Application Maintenance e reportistica QlikView.",
      "Creazione di sistemi di monitoraggio per il Prospect Journey e miglioramento della visibilità dei flussi commerciali.",
      "Introduzione di automazioni che hanno ridotto del 30% i tempi di reporting e migliorato la qualità dei dati aziendali.",
    ],
  },
];

export interface SkillArea {
  area: string;
  tools: string[];
}

export const skills: SkillArea[] = [
  {
    area: "BI & Reporting",
    tools: ["Qlik Sense", "Qlik Sense Cloud", "QlikView", "Qlik NPrinting"],
  },
  {
    area: "Data Engineering",
    tools: ["Data Modeling", "ETL", "DWH Integration", "QVD Architecture"],
  },
  {
    area: "Visualization",
    tools: ["Data Visualization", "KPI Design", "UX per Dashboard"],
  },
  {
    area: "Cloud & Integration",
    tools: ["Cloud BI", "Qlik Data Transfer", "Qlik Cloud"],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credlyUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "Qlik Sense Business Analyst Certification",
    issuer: "Qlik / Credly",
    date: "February 2021 Release",
    credlyUrl: undefined, // aggiungere URL Credly se disponibile
  },
];

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export const education: EducationItem[] = [
  {
    institution: "IIS Alessandro Volta",
    degree: "Perito Industriale Capotecnico – Informatico",
    period: "2009 – 2014",
  },
];

export interface Language {
  language: string;
  level: string;
}

export const languages: Language[] = [
  { language: "Italiano", level: "Madrelingua" },
  { language: "Inglese", level: "Avanzato" },
];
