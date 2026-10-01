# Página pessoal — Claudia Torres Codeço

Site estático hospedado via **GitHub Pages**:
<https://claudia-codeco.github.io/claudia-codeco/>

## Estrutura

```
index.html               página única (perfil, indicadores, formação, publicações)
assets/style.css         estilos
assets/main.js           carrega os JSONs e renderiza publicações/métricas
data/publications.json   lista de publicações (gerada a partir do ORCID)
data/metrics.json        indicadores (ORCID + Google Scholar)
scripts/update_orcid.py  atualiza publications.json via API pública do ORCID
```

## Atualizar publicações

```bash
python3 scripts/update_orcid.py
git commit -am "Atualiza publicações (ORCID)"
git push
```

## Atualizar indicadores do Google Scholar

O Google Scholar não tem API pública; edite `data/metrics.json`:

```json
"google_scholar": { "citations": 0000, "h_index": 00, "i10": 000, ... }
```

e faça commit + push. Os números estão em
<https://scholar.google.com/citations?user=VEjEF-oAAAAJ>.
