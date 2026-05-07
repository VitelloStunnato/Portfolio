// components/Navbar.tsx
// Barra di navigazione fissa con link alle sezioni del portfolio.

import { navigation, profile } from "@/data/cv";

export default function Navbar() {
  return (
    <header id="navbar" role="banner" className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav aria-label="Navigazione principale" className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 h-24 flex items-center justify-between">
        {/* Logo / Nome testuale */}
        <a href="#hero" aria-label="Torna all'inizio" className="text-xl font-heading font-bold tracking-wide">
          {profile.name}
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
