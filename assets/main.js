/* Carrega métricas e publicações dos JSONs locais e renderiza a página.
   Depende de i18n.js (t, tType, locale, evento 'langchange'). */

async function loadJSON(path) {
  const r = await fetch(path);
  if (!r.ok) throw new Error(`${path}: HTTP ${r.status}`);
  return r.json();
}

/* ————— Métricas ————— */
function renderMetrics(m) {
  const fmt = n => (n === null || n === undefined) ? '—' : n.toLocaleString(locale());
  document.getElementById('m-works').textContent = fmt(m.orcid?.works);
  document.getElementById('m-citations').textContent = fmt(m.google_scholar?.citations);
  document.getElementById('m-h').textContent = fmt(m.google_scholar?.h_index);
  document.getElementById('m-i10').textContent = fmt(m.google_scholar?.i10);
  if (m.updated) {
    const [y, mo, d] = m.updated.split('-');
    document.getElementById('updated').textContent = `${d}/${mo}/${y}`;
  }
}

/* ————— Publicações ————— */
let pubs = [];
let metricsData = null;
let activeYear = null;

function pubItemHTML(p) {
  const title = p.doi
    ? `<a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">${escapeHTML(p.title)}</a>`
    : escapeHTML(p.title);
  const journal = p.journal ? `<em>${escapeHTML(p.journal)}</em>` : '';
  const doi = p.doi ? ` · doi: <a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">${escapeHTML(p.doi)}</a>` : '';
  return `<li class="pub-item">
    <span class="pub-year">${p.year ?? t('pubs.nodate')}</span>
    <div class="pub-body">
      <div class="pub-title">${title}</div>
      <div class="pub-meta"><span class="pub-type">${escapeHTML(tType(p.type))}</span>${journal}${doi}</div>
    </div>
  </li>`;
}

function escapeHTML(s) {
  return String(s ?? '').replace(/[&<>"']/g,
    c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function renderPubs() {
  const q = document.getElementById('pub-search').value.trim().toLowerCase();
  const list = pubs.filter(p => {
    if (activeYear && p.year !== activeYear) return false;
    if (q && !(`${p.title} ${p.journal}`.toLowerCase().includes(q))) return false;
    return true;
  });
  document.getElementById('pub-list').innerHTML = list.length
    ? list.map(pubItemHTML).join('')
    : `<p class="pub-empty">${t('pubs.empty')}</p>`;
  document.getElementById('pub-count').textContent = list.length === pubs.length
    ? pubs.length : `${list.length} ${t('pubs.of')} ${pubs.length}`;
}

function renderYearButtons() {
  const years = [...new Set(pubs.map(p => p.year).filter(Boolean))].sort((a, b) => b - a);
  const box = document.getElementById('pub-years');
  const mk = (label, year) => {
    const b = document.createElement('button');
    b.className = 'year-btn' + (year === activeYear ? ' active' : '');
    b.textContent = label;
    b.onclick = () => { activeYear = year; renderYearButtons(); renderPubs(); };
    return b;
  };
  box.innerHTML = '';
  box.appendChild(mk(t('pubs.all'), null));
  years.forEach(y => box.appendChild(mk(y, y)));
}

/* Re-renderiza conteúdo dinâmico ao trocar de idioma */
document.addEventListener('langchange', () => {
  if (metricsData) renderMetrics(metricsData);
  if (pubs.length) { renderYearButtons(); renderPubs(); }
});

/* ————— Boot ————— */
(async () => {
  try {
    const [metrics, publications] = await Promise.all([
      loadJSON('data/metrics.json'),
      loadJSON('data/publications.json'),
    ]);
    metricsData = metrics;
    renderMetrics(metricsData);
    pubs = publications;
    renderYearButtons();
    renderPubs();
    document.getElementById('pub-search').addEventListener('input', renderPubs);
  } catch (e) {
    console.error(e);
    document.getElementById('pub-list').innerHTML =
      `<p class="pub-empty">${t('pubs.error')}</p>`;
  }
})();
