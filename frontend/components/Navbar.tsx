// components/Navbar.tsx
// Barra di navigazione fissa con link alle sezioni del portfolio.

import { navigation, profile } from "@/data/cv";

export default function Navbar() {
  return (
    <header id="navbar" role="banner" className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav aria-label="Navigazione principale" className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 h-24 flex items-center justify-between">
        {/* Logo / Nome testuale */}
        <a href="#hero" aria-label="Torna all'inizio" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <svg 
            viewBox="0 0 100 100" 
            fill="none" 
            className="w-12 h-12"
          >
            <defs>
              <linearGradient id="gradA" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF8A75" />
                <stop offset="100%" stopColor="#FF2E93" />
              </linearGradient>
              <linearGradient id="gradB" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF2E93" />
                <stop offset="100%" stopColor="#8A2BE2" />
              </linearGradient>
              <clipPath id="logo-clip">
                <rect x="0" y="10" width="100" height="80" />
              </clipPath>
            </defs>

            <g clipPath="url(#logo-clip)" strokeWidth="16" strokeLinecap="butt" strokeLinejoin="miter">
              {/* B loops (Drawn FIRST so they are BEHIND the A) */}
              <path 
                d="M 45 18 L 70 18 A 16 16 0 0 1 70 50 L 55 50 M 55 50 L 75 50 A 16 16 0 0 1 75 82 L 60 82" 
                stroke="url(#gradB)" 
              />
              
              {/* A framework (Drawn SECOND so it overlaps the B) */}
              <path 
                d="M 20 100 L 45 0 L 70 100 M 32 65 L 58 65" 
                stroke="url(#gradA)" 
              />
            </g>
          </svg>
          <span className="text-xl font-heading font-bold tracking-wide">{profile.name}</span>
        </a>

        {/* Link di navigazione (Desktop) */}
        <ul role="list" className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm font-medium text-muted hover:text-primary transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA contatto rapido (opzionale sulla navbar, ma nel mockup c'è una lista di link. Usiamo i contatti in alto a destra) */}
        <a href="#contact" id="navbar-cta" className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-foreground bg-surface border border-border rounded-md hover:border-primary hover:text-primary transition-all">
          Contattami
        </a>
      </nav>
    </header>
  );
}
