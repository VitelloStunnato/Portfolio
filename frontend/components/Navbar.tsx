// components/Navbar.tsx
// Barra di navigazione fissa con link alle sezioni del portfolio.

import { navigation, profile } from "@/data/cv";

export default function Navbar() {
  return (
    <header id="navbar" role="banner">
      <nav aria-label="Navigazione principale">
        {/* Logo / Nome */}
        <a href="#hero" aria-label="Torna all'inizio">
          {profile.name}
        </a>

        {/* Link di navigazione */}
        <ul role="list">
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA contatto */}
        <a href="#contact" id="navbar-cta">
          Contattami
        </a>
      </nav>
    </header>
  );
}
