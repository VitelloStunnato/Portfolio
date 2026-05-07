import { profile } from "@/data/cv";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-32 space-y-16">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Colonna SX: Info e Testo */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center relative">
              <div className="absolute right-full mr-6 w-[100vw] h-[2px] bg-primary"></div>
              <span className="text-xl font-medium text-white tracking-wide">Contacts</span>
            </div>
            <h2 id="contact-heading" className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
              Have a project?<br/>Let's talk!
            </h2>
            <p className="text-muted text-lg pt-2">
              Hai un progetto, un'idea o un'opportunità da discutere? Non esitare a scrivermi.
            </p>
          </div>


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
            Invia Messaggio
          </button>
        </form>
      </div>

      {/* Footer in stile Immagine */}
      <footer id="site-footer" className="pt-24 pb-12 mt-16 flex flex-col items-center text-center gap-8 border-t border-border/50">
        
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            {profile.name}
          </h3>
          <p className="text-muted text-sm md:text-base">
            Designed with love, all rights reserved for {profile.name}.
          </p>
          <p className="text-muted/60 text-xs pt-1">
            All logos and trademarks belong to their respective owners.
          </p>
        </div>

        {/* Pulsanti Social con effetto 3D (Hover / Active) */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 pt-4">
          
          {/* Email */}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Invia Email"
            className="flex items-center justify-center w-14 h-14 bg-surface text-foreground rounded-full border border-border/50 shadow-sm 
                       transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-primary hover:text-primary 
                       active:translate-y-0 active:shadow-sm"
          >
            <Mail size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profilo LinkedIn"
            className="flex items-center justify-center w-14 h-14 bg-surface text-foreground rounded-full border border-border/50 shadow-sm 
                       transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-primary hover:text-primary 
                       active:translate-y-0 active:shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profilo GitHub"
            className="flex items-center justify-center w-14 h-14 bg-surface text-foreground rounded-full border border-border/50 shadow-sm 
                       transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-primary hover:text-primary 
                       active:translate-y-0 active:shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>

          {/* WhatsApp (Pill Button con testo e icona) */}
          <a
            href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chatta su WhatsApp"
            className="flex items-center justify-center gap-3 h-14 px-6 bg-surface text-foreground rounded-full border border-border/50 shadow-sm 
                       transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-primary hover:text-primary 
                       active:translate-y-0 active:shadow-sm"
          >
            <MessageCircle size={24} />
            <span className="font-medium text-sm md:text-base">{profile.phone}</span>
          </a>

        </div>
      </footer>

    </section>
  );
}
