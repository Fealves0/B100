// netlify/functions/anp-proxy.js — B100 Dashboard
//
// ?tipo=producao&ano=YYYY  → produção mensal B100 por Grande Região (m³)
// ?tipo=geojson            → GeoJSON estados brasileiros

exports.handler = async (event) => {
  const { tipo, ano } = event.queryStringParameters || {};
  let url, maxAge, isJson = false;

  if (tipo === 'producao') {
    const y = parseInt(ano);
    if (!y || y < 2005 || y > 2030)
      return { statusCode: 400, headers: cors(), body: 'Ano inválido' };
    // ANP publica producao-biodiesel-m3-{ANO}.csv com dados do ano anterior
    // ex: -2025.csv contém 2023+2024; -2024.csv contém 2022+2023
    url    = `https://www.gov.br/anp/pt-br/centrais-de-conteudo/dados-abertos/arquivos/arquivos-producao-de-biocombustiveis/producao-biodiesel-m3-${y}.csv`;
    maxAge = 60 * 60 * 24 * 7;
  } else if (tipo === 'geojson') {
    url     = 'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson';
    maxAge  = 60 * 60 * 24 * 30;
    isJson  = true;
  } else {
    return { statusCode: 400, headers: cors(), body: 'tipo= deve ser "producao" ou "geojson"' };
  }

  try {
    const r = await fetch(url, {
      headers: { 'User-Agent': 'B100-Dashboard/1.0 (dados publicos ANP)' }
    });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);

    let body;
    if (isJson) {
      body = await r.text();
    } else {
      const buf = await r.arrayBuffer();
      body = new TextDecoder('windows-1252').decode(buf);
    }

    const ct = isJson ? 'application/json; charset=utf-8' : 'text/csv; charset=utf-8';
    return {
      statusCode: 200,
      headers: { ...cors(), 'Content-Type': ct, 'Cache-Control': `public, max-age=${maxAge}` },
      body,
    };
  } catch (e) {
    return { statusCode: 502, headers: cors(), body: JSON.stringify({ error: e.message }) };
  }
};

function cors() {
  return { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,OPTIONS' };
}
