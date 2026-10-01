#!/usr/bin/env python3
"""Atualiza data/publications.json a partir do registro público do ORCID.

Uso:
    python3 scripts/update_orcid.py

Para atualizar os indicadores do Google Scholar (citações, índice-h, i10),
edite manualmente o arquivo data/metrics.json — o Google Scholar não
disponibiliza API pública.
"""
import json
import urllib.request
from datetime import date
from pathlib import Path

ORCID_ID = "0000-0003-1174-178X"
ROOT = Path(__file__).resolve().parent.parent

TYPE_LABEL = {
    "journal-article": "Artigo",
    "conference-paper": "Anais de congresso",
    "book": "Livro",
    "book-chapter": "Capítulo de livro",
    "report": "Relatório técnico",
    "preprint": "Preprint",
    "dissertation": "Tese/Dissertação",
    "other": "Outro",
}


def fetch_orcid_works():
    url = f"https://pub.orcid.org/v3.0/{ORCID_ID}/record"
    req = urllib.request.Request(url, headers={"Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=60) as r:
        record = json.load(r)

    pubs = []
    for group in record["activities-summary"]["works"]["group"]:
        ws = group["work-summary"][0]
        year = ((ws.get("publication-date") or {}).get("year") or {}).get("value")
        doi = next(
            (x["external-id-value"]
             for x in group.get("external-ids", {}).get("external-id", [])
             if x["external-id-type"] == "doi"),
            None,
        )
        pubs.append({
            "title": (ws.get("title") or {}).get("title", {}).get("value") or "",
            "journal": (ws.get("journal-title") or {}).get("value") or "",
            "year": int(year) if year and year.isdigit() else None,
            "doi": doi,
            "type": TYPE_LABEL.get(ws.get("type"), "Outro"),
        })
    pubs.sort(key=lambda p: (p["year"] or 0, p["title"]), reverse=True)
    return pubs


def main():
    pubs = fetch_orcid_works()
    (ROOT / "data" / "publications.json").write_text(
        json.dumps(pubs, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")

    metrics_path = ROOT / "data" / "metrics.json"
    metrics = json.loads(metrics_path.read_text(encoding="utf-8"))
    metrics["updated"] = date.today().isoformat()
    metrics.setdefault("orcid", {})["works"] = len(pubs)
    metrics["orcid"]["id"] = ORCID_ID
    metrics_path.write_text(
        json.dumps(metrics, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")

    print(f"OK: {len(pubs)} publicações gravadas em data/publications.json")


if __name__ == "__main__":
    main()
