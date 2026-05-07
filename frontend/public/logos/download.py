import urllib.request
import os

clients = {
    "Zegna": "zegna.com",
    "Medacta": "medacta.com",
    "SNAM": "snam.it",
    "A2A": "a2a.eu",
    "Italgas": "italgas.it",
    "Edison": "edison.it",
    "Rodacciai": "rodacciai.com",
    "Tramo": "tramogroup.com",
    "MedicAir": "medicair.it",
    "Roelmi": "roelmihpc.com",
    "Valera": "valera.com",
    "Unareti": "unareti.it",
    "SandroVanini": "sandrovanini.ch",
    "Edilgroup": "edilgroup.ch",
    "ACSM_AGAM": "acsm-agam.it"
}

for name, domain in clients.items():
    url = f"https://logo.clearbit.com/{domain}"
    path = f"/Users/andeaballestrero/Portfolio/frontend/public/logos/{name}.png"
    try:
        urllib.request.urlretrieve(url, path)
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed {name}: {e}")

