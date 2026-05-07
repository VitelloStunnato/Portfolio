// components/Contact.tsx
// Sezione contatti con info dirette e form di contatto base.

import { profile } from "@/data/cv";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-32 space-y-16">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start max-w-5xl mx-auto">
        
        {/* Colonna SX: Info e Testo */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Have a project?<br/>Let's talk!
            </h2>
            <p className="text-muted text-lg pt-2">
              Hai un progetto, un'idea o un'opportunità da discutere? Non esitare a scrivermi.
            </p>
          </div>

          <address id="contact-info" className="not-italic bg-surface p-6 rounded-xl border border-surface-l2">
            <ul role="list" className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-muted font-semibold">Email</span>
                <a href={`mailto:${profile.email}`} id="contact-email" className="text-foreground hover:text-primary transition-colors font-medium">
                  {profile.email}
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-muted font-semibold">Telefono</span>
                <a href={`tel:${profile.phone}`} id="contact-phone" className="text-foreground hover:text-primary transition-colors font-medium">
                  {profile.phone}
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-muted font-semibold">LinkedIn</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  linkedin.com/in/{profile.linkedinHandle}
                </a>
              </li>
            </ul>
          </address>
        </div>

        {/* Colonna DX: Form minimalista */}
        <form
          id="contact-form"
          aria-label="Form di contatto"
          action={`mailto:${profile.email}`}
          method="POST"
          encType="text/plain"
          className="space-y-6 pt-4"
        >
          <div className="space-y-2">
            <label htmlFor="contact-name" className="text-sm font-medium text-muted">Nome</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Il tuo nome"
              className="w-full bg-transparent border-b border-surface-l2 px-0 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-email-input" className="text-sm font-medium text-muted">Email</label>
            <input
              id="contact-email-input"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="la.tua@email.com"
              className="w-full bg-transparent border-b border-surface-l2 px-0 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="contact-message" className="text-sm font-medium text-muted">Messaggio</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              placeholder="Descrivi il tuo progetto o la tua proposta..."
              className="w-full bg-transparent border-b border-surface-l2 px-0 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <button id="contact-submit" type="submit" className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-md transition-colors mt-4">
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer id="site-footer" className="border-t border-border pt-8 mt-24 text-center pb-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name} · {profile.title}
        </p>
      </footer>
    </section>
  );
}
