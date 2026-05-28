# B100 Intelligence — Mercado Brasileiro de Biodiesel

Dashboard executivo single-file para análise de mercado de biodiesel B100.

**[→ Abrir dashboard](https://SEU_USER.github.io/b100brasil)**

## Deploy GitHub Pages (2 minutos)

```bash
git init && git add . && git commit -m "feat: B100 Intelligence v2"
git remote add origin https://github.com/SEU_USER/b100brasil.git
git push -u origin main
```

GitHub: **Settings → Pages → Branch: main → / (root) → Save**

## Stack
- HTML/CSS/JS · single-file · zero build
- Chart.js 4.4.1 (CDN cdnjs)
- D3.js 7.8.5 (CDN cdnjs) — mapa com GeoJSON inline
- GeoJSON IBGE simplificado (RDP) embutido — sem dependência externa

## Fontes
- ANP Anuário 2025 Tabs.4.9, 4.10, 4.13
- Abiove Estatísticas 2025/2026
- CNPE Res. 9/2025 · Lei 14.993/2024
