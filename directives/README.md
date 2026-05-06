# Directives

Questa cartella contiene le **SOP (Standard Operating Procedures)** scritte in Markdown.

## Struttura di una direttiva

Ogni file `.md` qui dentro descrive un processo specifico e include:

- **Obiettivo**: cosa deve essere raggiunto
- **Input**: cosa serve per avviare il processo
- **Tool/Script**: quali script in `execution/` usare
- **Output**: cosa viene prodotto
- **Casi limite**: errori comuni e come gestirli

## Convenzioni di naming

```
directives/
├── <dominio>_<azione>.md    # es. scrape_website.md
├── <dominio>_<azione>.md    # es. export_to_sheets.md
└── ...
```

## Note

- Le direttive sono **documenti vivi**: vanno aggiornate quando si scoprono nuovi vincoli, errori o approcci migliori.
- Non sovrascrivere una direttiva senza autorizzazione esplicita dell'utente.
