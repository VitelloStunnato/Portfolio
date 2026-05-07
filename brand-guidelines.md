# Brand Guidelines

> File compilato in base al mockup fornito (Dark Theme con accenti Coral). Questo design system verrà applicato allo sviluppo del frontend.

---

## Palette Colori

```
Primario:    #FF6A55   (Coral/Orange - usato per bottoni, hover, accenti grafici e "Hello.")
Secondario:  #1A1F26   (Deep Slate/Navy - usato come Background principale)
Accent:      #FF8A75   (Light Coral - per hover states dei bottoni)
Background:  #1A1F26   (Background globale dell'app)
Surface:     #212832   (Colore di sfondo per le card, navbar, e sezioni evidenziate)
Surface L2:  #2A323D   (Per bordi o elementi UI leggermente più chiari del surface)
Testo:       #FFFFFF   (Bianco puro per testi principali e titoli)
Testo muted: #A0A8B5   (Grigio/Azzurro chiaro per paragrafi, sub-titoli e meta-info)
```

## Tipografia

```
Font primario:    Outfit o Plus Jakarta Sans  (Per Titoli e Headings - moderno e geometrico)
Font secondario:  Inter                       (Per corpo del testo e bottoni - altissima leggibilità)
Fonte:            Google Fonts

Titoli (H1):      3.5 rem / 56px — weight 700 (Bold)
Titoli (H2):      2.5 rem / 40px — weight 600 (SemiBold)
Titoli (H3):      1.5 rem / 24px — weight 600 (SemiBold)
Corpo:            1 rem / 16px   — weight 400 (Regular)
Caption/Meta:     0.875 rem / 14px — weight 400 (Regular)
```

## Logo / Elementi Visivi

```
Stile: Tipografico (nome testuale o monogramma)
Immagine Profilo: Circolare con cerchio decorativo color "Primario" (come da mockup)
Stile Card: Bordi arrotondati (circa 8px-12px), nessun drop shadow invasivo, flat design scuro.
Dettagli UI: Linee sottili (1px/2px) color "Primario" per separare le sezioni o sottolineare i titoli (es. riga sotto "I'm Jensen").
```

## Tono di Voce

```
[x] Professionale e formale
[ ] Amichevole e accessibile
[x] Tecnico e preciso
[ ] Altro: Minimalista e diretto, focalizzato sui dati e sui risultati.
```

## Note Aggiuntive

- **Dark Theme Nativo**: L'applicazione nasce direttamente in dark mode, senza toggle per il light mode (come da mockup).
- **Layout**: Centrato con container max-width (es. `max-w-6xl` in Tailwind), ampio respiro tra le sezioni (`py-20` o `py-24`).
- Le skill e le certificazioni dovranno avere uno stile a "badge" o "pill" (es. sfondo trasparente con bordo o sfondo `Surface L2`).
