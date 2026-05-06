# Execution

Questa cartella contiene gli **script Python deterministici** — i tool che l'agente chiama per svolgere il lavoro reale.

## Filosofia

Gli script qui sono:
- **Deterministici**: dato lo stesso input, producono sempre lo stesso output
- **Testabili**: possono essere eseguiti autonomamente e validati
- **Ben commentati**: ogni script spiega cosa fa, quali input accetta e cosa produce
- **Affidabili**: gestiscono errori, edge case e logging

## Struttura di uno script

```python
#!/usr/bin/env python3
"""
Script: nome_script.py
Scopo: descrizione breve
Input: descrizione degli input
Output: descrizione dell'output
Dipendenze: librerie richieste
"""

import os
from dotenv import load_dotenv

load_dotenv()

def main():
    # logica principale
    pass

if __name__ == "__main__":
    main()
```

## Convenzioni di naming

```
execution/
├── <azione>_<soggetto>.py    # es. scrape_single_site.py
├── <azione>_<soggetto>.py    # es. export_to_sheets.py
└── ...
```

## Note

- Le variabili d'ambiente e le chiavi API sono sempre in `.env` (mai hardcoded)
- Prima di creare un nuovo script, verificare se ne esiste già uno adatto
