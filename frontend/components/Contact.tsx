// components/Contact.tsx
// Sezione contatti con info dirette e form di contatto base.

import { profile } from "@/data/cv";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contatti</h2>

      <p>Hai un progetto o un'opportunità da discutere? Scrivimi.</p>

      {/* Info di contatto */}
      <address id="contact-info">
        <ul role="list">
          <li>
            <span aria-label="Email">Email</span>
            <a href={`mailto:${profile.email}`} id="contact-email">
              {profile.email}
            </a>
          </li>
          <li>
            <span aria-label="Telefono">Telefono</span>
            <a href={`tel:${profile.phone}`} id="contact-phone">
              {profile.phone}
            </a>
          </li>
          <li>
            <span aria-label="LinkedIn">LinkedIn</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin"
            >
              linkedin.com/in/{profile.linkedinHandle}
            </a>
          </li>
          <li>
            <span aria-label="Posizione">Posizione</span>
            <span>{profile.location}</span>
          </li>
        </ul>
      </address>

      {/* Form di contatto */}
      <form
        id="contact-form"
        aria-label="Form di contatto"
        action={`mailto:${profile.email}`}
        method="POST"
        encType="text/plain"
      >
        <div>
          <label htmlFor="contact-name">Nome</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Il tuo nome"
          />
        </div>

        <div>
          <label htmlFor="contact-email-input">Email</label>
          <input
            id="contact-email-input"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="la.tua@email.com"
          />
        </div>

        <div>
          <label htmlFor="contact-message">Messaggio</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder="Descrivi il tuo progetto o la tua proposta..."
          />
        </div>

        <button id="contact-submit" type="submit">
          Invia messaggio
        </button>
      </form>

      {/* Footer */}
      <footer id="site-footer">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.title}
        </p>
      </footer>
    </section>
  );
}
