# Portfolio

Sistema di automazione a 3 livelli basato su architettura **Direttiva → Orchestrazione → Esecuzione**.

## Struttura

```
Portfolio/
├── directives/          # SOP in Markdown — cosa fare e come
├── execution/           # Script Python deterministici — il lavoro reale
├── .tmp/                # File intermedi (non committati, sempre rigenerabili)
├── brand-guidelines.md  # Specifiche di brand per app web
├── .env.example         # Template variabili d'ambiente
├── .env                 # Variabili reali (NON committare)
└── GEMINI.md            # Istruzioni operative per l'agente
```

> Quando viene sviluppata un'app web, si aggiungono `frontend/` (Next.js) e `backend/` (FastAPI).

## Come funziona

1. **Direttive** (`directives/`) → descrivono il processo in linguaggio naturale
2. **Orchestrazione** → l'agente legge le direttive, prende decisioni, chiama gli script
3. **Esecuzione** (`execution/`) → gli script Python svolgono il lavoro deterministico

## Setup

```bash
# Copia il template delle variabili d'ambiente
cp .env.example .env
# Compila .env con i valori reali

# (Opzionale) Crea e attiva un virtualenv Python
python3 -m venv .venv
source .venv/bin/activate
```

## Regole operative

- I **deliverable** vivono su Google Sheets / Slides / cloud — non in locale
- Tutto in `.tmp/` può essere cancellato e rigenerato
- Le **direttive** sono documenti vivi: vengono aggiornate quando si impara qualcosa di nuovo
- Prima di creare un nuovo script, verificare se ne esiste già uno in `execution/`
