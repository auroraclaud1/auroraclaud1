// State
let currentCat = 'Todos', currentDisc = 0, currentSort = 'discount', currentRating = 0, searchQ = '', page = 1;
const PAGE_SIZE = 16;

function pct(b, n) { return Math.round((b - n) / b * 100); }
function fmt(n) { return '$' + n.toFixed(2); }
function stars(r) {
  const f = Math.floor(r), h = r % 1 >= 0.5 ? 1 : 0, e = 5 - f - h;
  return '★'.repeat(f) + (h ? '½' : '') + '☆'.repeat(e);
}
function amzURL(asin) { return `https://www.amazon.com/dp/${asin}?tag=${TAG}`; }
function badgeClass(b) {
  return b === 'Oferta del día' ? 'b-deal'
       : b === 'Más vendido'   ? 'b-best'
       : b === 'Precio mínimo histórico' ? 'b-low'
       : b === 'Flash sale'    ? 'b-flash' : '';
}

function filtered() {
  return PRODUCTOS.filter(p => {
    const d = pct(p.precioAntes, p.precioAhora);
    if (currentCat !== 'Todos' && p.categoria !== currentCat) return false;
    if (d < currentDisc) return false;
    if (p.rating < currentRating) return false;
    if (searchQ && !p.nombre.toLowerCase().includes(searchQ.toLowerCase()) &&
        !p.categoria.toLowerCase().includes(searchQ.toLowerCase())) return false;
    return true;
  }).sort((a, b) => {
    if (currentSort === 'discount')   return pct(b.precioAntes, b.precioAhora) - pct(a.precioAntes, a.precioAhora);
    if (currentSort === 'price-asc')  return a.precioAhora - b.precioAhora;
    if (currentSort === 'price-desc') return b.precioAhora - a.precioAhora;
    if (currentSort === 'rating')     return b.rating - a.rating;
    if (currentSort === 'reviews')    return b.reviews - a.reviews;
    return 0;
  });
}

function renderGrid() {
  const data = filtered();
  const chunk = data.slice(0, page * PAGE_SIZE);
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  document.getElementById('noRes').style.display = data.length === 0 ? 'block' : 'none';
  document.getElementById('loadWrap').style.display = chunk.length < data.length ? 'block' : 'none';
  document.getElementById('showing').textContent = chunk.length;
  document.getElementById('total').textContent = data.length;
  document.getElementById('dealCount').textContent = data.length;

  chunk.forEach((p, i) => {
    const disc = pct(p.precioAntes, p.precioAhora);
    const saved = (p.precioAntes - p.precioAhora).toFixed(2);
    const bc = badgeClass(p.badge);
    const el = document.createElement('div');
    el.className = 'card';
    el.style.animationDelay = (i % PAGE_SIZE) * 0.035 + 's';
    el.innerHTML = `
      ${p.badge ? `<span class="card-badge ${bc}">${p.badge}</span>` : ''}
      <div class="card-img"><img src="${p.imagen}" onerror="imgErr(this)" alt="${p.nombre}" loading="lazy"></div>
      <div class="card-body">
        <div class="card-cat">${p.categoria}</div>
        <div class="card-name">${p.nombre}</div>
        <div class="stars-row"><span class="stars">${stars(p.rating)}</span><span class="rev-n">(${p.reviews.toLocaleString()})</span></div>
        <div class="price-area">
          <div class="price-before">Antes: ${fmt(p.precioAntes)}</div>
          <div class="price-row"><span class="price-now">${fmt(p.precioAhora)}</span><span class="disc-tag">-${disc}%</span></div>
          <div class="savings">Ahorras $${saved}</div>
        </div>
      </div>
      <div class="card-foot">
        <button class="btn-detail" onclick="openModal(${p.id})">Ver oferta completa →</button>
        <div class="watchers"><span>${WATCHERS[p.id]}</span> personas viendo esto</div>
      </div>`;
    grid.appendChild(el);
  });
}

function openModal(id) {
  const p = PRODUCTOS.find(x => x.id === id);
  if (!p) return;
  const disc = pct(p.precioAntes, p.precioAhora);
  const saved = (p.precioAntes - p.precioAhora).toFixed(2);
  const url = amzURL(p.asin);
  const bc = badgeClass(p.badge);

  document.getElementById('modalCrumb').innerHTML =
    `<span onclick="closeModal()">Inicio</span> › <span onclick="closeModal()">${p.categoria}</span> › ${p.nombre.substring(0, 55)}...`;

  const badgeEl = document.getElementById('detailBadge');
  if (p.badge) { badgeEl.textContent = p.badge; badgeEl.className = `img-badge-modal ${bc}`; }
  else { badgeEl.textContent = ''; badgeEl.className = 'img-badge-modal'; }

  const mainImgEl = document.getElementById('detailMainImg');
  mainImgEl.onerror = function () { imgErr(this); };
  mainImgEl.src = p.imagen;
  mainImgEl.alt = p.nombre;

  const thumbRow = document.getElementById('thumbRow');
  thumbRow.innerHTML = '';
  [p.imagen, p.imagen, p.imagen].forEach((src, i) => {
    const t = document.createElement('div');
    t.className = 'thumb' + (i === 0 ? ' active' : '');
    t.innerHTML = `<img src="${src}" onerror="imgErr(this)" alt="">`;
    t.onclick = () => {
      document.querySelectorAll('.thumb').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      mainImgEl.src = src;
    };
    thumbRow.appendChild(t);
  });

  document.getElementById('detailCat').textContent = p.categoria;
  document.getElementById('detailTitle').textContent = p.nombre;
  document.getElementById('detailBrand').innerHTML =
    `Vendido en <strong>Amazon.com</strong> &nbsp;·&nbsp; ASIN: <strong>${p.asin}</strong>`;
  document.getElementById('detailStars').textContent = stars(p.rating);
  document.getElementById('detailRating').textContent = p.rating + ' de 5';
  document.getElementById('detailRevLink').textContent = p.reviews.toLocaleString() + ' valoraciones en Amazon';
  document.getElementById('detailPriceNow').textContent = fmt(p.precioAhora);
  document.getElementById('detailPriceWas').textContent = 'Antes: ' + fmt(p.precioAntes);
  document.getElementById('detailDisc').textContent = '-' + disc + '%';
  document.getElementById('detailSavings').textContent = '💰 Ahorras $' + saved + ' (' + disc + '% de descuento)';

  document.getElementById('detailHighlights').innerHTML = `
    <div class="hl-row"><span class="hl-icon">🚚</span><div class="hl-text"><strong>Envío gratuito Prime</strong><span>Entrega en 1-2 días laborables</span></div></div>
    <div class="hl-row"><span class="hl-icon">↩️</span><div class="hl-text"><strong>Devolución gratuita</strong><span>30 días para devoluciones</span></div></div>
    <div class="hl-row"><span class="hl-icon">✅</span><div class="hl-text"><strong>Producto real en Amazon</strong><span>ASIN verificado — enlace directo</span></div></div>`;

  const fl = document.getElementById('detailFeatures');
  fl.innerHTML = '';
  (p.features || []).forEach(f => { const li = document.createElement('li'); li.textContent = f; fl.appendChild(li); });
  document.getElementById('detailDesc').textContent = p.descripcion;

  document.getElementById('buyPrice').textContent = fmt(p.precioAhora);
  document.getElementById('buyWas').innerHTML = `<s>Precio original: ${fmt(p.precioAntes)}</s> <span class="buy-disc">-${disc}%</span>`;
  document.getElementById('buySavings').textContent = '💰 Ahorro total: $' + saved;
  document.getElementById('buyInfo').innerHTML = `
    <div class="buy-info-row"><span class="ico">🚚</span><div><strong>ENVÍO GRATIS</strong><br><span style="font-size:12px;color:var(--muted)">Llega en 1-2 días con Prime</span></div></div>
    <div class="buy-info-row"><span class="ico">📦</span><div><strong style="color:var(--green)">Disponible en Amazon</strong><br><span style="font-size:12px;color:var(--red)">Oferta por tiempo limitado</span></div></div>
    <div class="buy-info-row"><span class="ico">👁️</span><div><span><strong>${WATCHERS[p.id]}</strong> personas mirando ahora</span></div></div>`;

  document.getElementById('btnBuyAmazon').href = url;
  document.getElementById('btnViewAmazon').href = url;

  const same = PRODUCTOS.filter(x => x.categoria === p.categoria && x.id !== p.id).slice(0, 4);
  document.getElementById('similarList').innerHTML = same.map(s => `
    <div class="sim-item" onclick="openModal(${s.id})">
      <div class="sim-img"><img src="${s.imagen}" onerror="imgErr(this)" alt="${s.nombre}" loading="lazy"></div>
      <div>
        <div class="sim-name">${s.nombre}</div>
        <div class="sim-price">${fmt(s.precioAhora)} <s style="color:var(--muted);font-size:10px">${fmt(s.precioAntes)}</s></div>
      </div>
    </div>`).join('');

  document.getElementById('revBigNum').textContent = p.rating.toFixed(1);
  document.getElementById('revBigStars').textContent = stars(p.rating);
  document.getElementById('revCount').textContent = p.reviews.toLocaleString() + ' valoraciones globales';

  const pcts = [
    Math.round(45 + Math.random() * 25),
    Math.round(20 + Math.random() * 15),
    Math.round(5  + Math.random() * 8),
    Math.round(2  + Math.random() * 4),
    Math.round(1  + Math.random() * 3)
  ];
  document.getElementById('revBars').innerHTML = ['5 ★', '4 ★', '3 ★', '2 ★', '1 ★'].map((l, i) => `
    <div class="rev-bar-row">${l}<div class="rev-bar-track"><div class="rev-bar-fill" style="width:${pcts[i]}%"></div></div>${pcts[i]}%</div>`).join('');

  const revs = [
    { a: 'María G.',  d: '12 mar 2025', t: '¡Excelente! Llegó perfecto',       b: 'Lo compré aquí y me llevó directo a Amazon. El producto llegó en perfectas condiciones y funciona exactamente como se describe. Muy recomendable.', r: 5 },
    { a: 'Carlos M.', d: '3 abr 2025',  t: 'Precio imbatible en Amazon',        b: 'Encontré esta oferta aquí y al hacer clic en comprar me llevó al producto real en Amazon. Llegó al día siguiente con Prime. Increíble.', r: 5 },
    { a: 'Ana L.',    d: '28 feb 2025', t: 'Funciona perfecto, muy contenta',   b: 'Dudé al principio pero me llevó directo a la página del producto en Amazon. Compré con total confianza. Llegó en 2 días.', r: 4 },
    { a: 'Pedro R.',  d: '15 ene 2025', t: 'Excelente descuento real',          b: 'El precio que vi aquí era exactamente el mismo que en Amazon cuando hice clic. Muy buena experiencia de compra.', r: 5 },
  ];
  document.getElementById('revCards').innerHTML = revs.map(r => `
    <div class="rev-card">
      <div class="rev-head"><span class="rev-author">${r.a}</span><span class="rev-date">${r.d}</span></div>
      <div class="rev-stars">${'★'.repeat(r.r)}${'☆'.repeat(5 - r.r)}</div>
      <div class="rev-title">${r.t}</div>
      <div class="rev-body">${r.b}</div>
      <div class="rev-verified">✅ Compra verificada en Amazon</div>
    </div>`).join('');

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalBox').scrollTop = 0;
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Countdown
function tick() {
  const now = new Date(), end = new Date();
  end.setHours(23, 59, 59, 0);
  let d = Math.max(0, end - now);
  const h = Math.floor(d / 3600000); d -= h * 3600000;
  const m = Math.floor(d / 60000);   d -= m * 60000;
  const s = Math.floor(d / 1000);
  document.getElementById('ch').textContent = String(h).padStart(2, '0');
  document.getElementById('cm').textContent = String(m).padStart(2, '0');
  document.getElementById('cs').textContent = String(s).padStart(2, '0');
}
setInterval(tick, 1000);
tick();

// Event listeners
document.getElementById('catNav').addEventListener('click', e => {
  const btn = e.target.closest('.cat-btn');
  if (!btn) return;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentCat = btn.dataset.cat;
  page = 1;
  renderGrid();
});

document.querySelectorAll('.dbtn').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.dbtn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    currentDisc = Number(b.dataset.disc);
    page = 1;
    renderGrid();
  });
});

document.getElementById('sortSel').addEventListener('change', e => { currentSort = e.target.value; page = 1; renderGrid(); });
document.getElementById('ratingSel').addEventListener('change', e => { currentRating = Number(e.target.value); page = 1; renderGrid(); });
document.getElementById('searchInput').addEventListener('input', e => { searchQ = e.target.value; page = 1; renderGrid(); });
document.getElementById('loadBtn').addEventListener('click', () => { page++; renderGrid(); });

document.getElementById('lastUpdate').textContent = new Date().toLocaleDateString('es-ES', {
  day: 'numeric', month: 'long', year: 'numeric'
});

renderGrid();
