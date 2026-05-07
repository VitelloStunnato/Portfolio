# Direttiva: Build Portfolio Website

## Obiettivo

Costruire un sito portfolio personale per **Andrea Ballestrero** (Senior BI Consultant) basato sul CV fornito in formato Markdown. Il sito è una single-page application con navigazione ad ancoraggi.

## Stack

- **Frontend**: Next.js (App Router) + React + Tailwind CSS
- **Dati**: file `frontend/data/cv.ts` — unica fonte di verità per tutti i contenuti
- **Backend**: non richiesto in questa fase

## Input

- CV in formato Markdown (vedi `.tmp/cv_source.md`)
- `brand-guidelines.md` nella root (da compilare prima di applicare la grafica)

## Struttura delle Pagine

Il sito è **single-page** con le seguenti sezioni ancorate:

| Sezione | Anchor | Componente |
|---|---|---|
| Navbar | — | `Navbar.tsx` |
| Hero | `#hero` | `Hero.tsx` |
| About | `#about` | `About.tsx` |
| Experience | `#experience` | `Experience.tsx` |
| Skills | `#skills` | `Skills.tsx` |
| Certifications | `#certifications` | `Certifications.tsx` |
| Contact | `#contact` | `Contact.tsx` |

## Struttura Directory

```
frontend/
├── app/
│   ├── layout.tsx          # Layout root con metadata SEO
│   ├── page.tsx            # Pagina principale (assembla tutte le sezioni)
│   └── globals.css         # CSS globale (da completare in fase grafica)
├── components/
│   ├── Navbar.tsx          # Navigazione fissa con link alle sezioni
│   ├── Hero.tsx            # Nome, titolo, CTA (email + LinkedIn)
│   ├── About.tsx           # Profilo professionale
│   ├── Experience.tsx      # Timeline esperienze lavorative
│   ├── Skills.tsx          # Tabella competenze tecniche
│   ├── Certifications.tsx  # Lista certificazioni
│   └── Contact.tsx         # Info contatto
├── data/
│   └── cv.ts               # Tutti i dati del CV come oggetti TypeScript
└── public/
    └── (asset statici)
```

## Fonte Dati: cv.ts

Tutti i contenuti del sito provengono da `frontend/data/cv.ts`. Struttura:

```typescript
export const profile = { name, title, phone, email, linkedin, location, summary }
export const experience = [{ company, role, period, location, bullets[] }]
export const skills = [{ area, tools[] }]
export const certifications = [{ name, issuer, date, url }]
export const education = [{ institution, degree, period }]
export const languages = [{ language, level }]
export const navigation = [{ label, href }]
```

## Output

- Progetto Next.js funzionante in `frontend/`
- Componenti strutturali completi con dati reali dal CV
- Nessuno stile grafico definitivo (CSS da completare dopo definizione brand)

## Casi Limite

- Se `brand-guidelines.md` è vuoto/template → procedere senza stili, solo struttura semantica
- Tailwind è installato ma le classi decorative vengono aggiunte in fase grafica
- Il CSS globale (`globals.css`) contiene solo i reset base di Next.js/Tailwind

## Prossimi Passi (fuori scope di questa direttiva)

1. Compilare `brand-guidelines.md` con font e colori
2. Applicare design system Tailwind ai componenti
3. Aggiungere animazioni e micro-interazioni
4. Deploy su Vercel o piattaforma analoga
