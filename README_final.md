# B100 Intelligence — Mercado Brasileiro de Biodiesel

Dashboard executivo single-file para análise do mercado de biodiesel B100 no Brasil.

🔗 **Dashboard online:** https://fealves0.github.io/B100/

## Stack
- HTML/CSS/JS puro · single-file · zero build
- Chart.js 4.4.1 (CDN cdnjs)
- D3.js 7.8.5 (CDN cdnjs) — mapa coroplético com GeoJSON inline
- GeoJSON IBGE simplificado embarcado (sem dependência externa)

## Funcionalidades
- KPIs executivos com produção, capacidade, demanda projetada e spread
- Mapa interativo do Brasil com 4 modos: Produção · Capacidade · Utilização · Balanço
- Fluxos logísticos animados (corredores principais)
- Ranking por estado e balanço regional (produção vs. consumo)
- Série histórica 2005–2024 + projeção B15→B20 até 2030
- Mix de matérias-primas, esmagamento de soja e spread B100/Diesel S10
- Evolução do mandato legal e capacidade vs. produção efetiva por região
- Botão "Atualizar ANP" com fallback para múltiplos proxies CORS

## Fontes de dados
- ANP — Anuário Estatístico 2025 (Tabs. 4.9, 4.10, 4.13)
- Abiove — Estatísticas 2025/2026
- CNPE Resolução 9/2025 · Lei 14.993/2024
- EPE — PNE 2050

## Deploy GitHub Pages (2 minutos)
```bash
git init
git add .
git commit -m "feat: B100 Intelligence v2.1"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/B100.git
git push -u origin main
```

Em seguida: **Settings → Pages → Branch: main → / (root) → Save**.
O arquivo `.nojekyll` garante que o GitHub Pages sirva o HTML sem processamento Jekyll.

## Notas técnicas
- Dados por UF são **estimativas** — a ANP publica apenas por Grande Região desde jan/2023 (Decreto 7.724/2012).
- A atualização ao vivo depende de proxies CORS públicos (corsproxy.io, allorigins.win, codetabs.com), cuja disponibilidade pode variar. Em caso de falha, os dados históricos embarcados permanecem ativos.

---
**v2.1** · Correções: tradução PT-BR completa · mapa interativo restaurado (bug de width=0 ao inicializar oculto) · refresh ANP com fallback robusto a 3 proxies · .nojekyll para GitHub Pages.
