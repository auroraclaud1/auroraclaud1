// State
let currentCat = 'Todos', currentDisc = 0, currentSort = 'discount', currentRating = 0, searchQ = '', page = 1;
const PAGE_SIZE = 25;

// ── Smart search ──────────────────────────────
const SYNONYMS = {
  // Smartphones
  'celular':      'Smartphones', 'celulares':   'Smartphones', 'movil':       'Smartphones',
  'telefono':     'Smartphones', 'telefonos':   'Smartphones', 'iphone':      'Smartphones',
  'android':      'Smartphones', 'smartphone':  'Smartphones', 'smartphones': 'Smartphones',
  'xiaomi':       'Smartphones', 'motorola':    'Smartphones', 'pixel':       'Smartphones',
  // Televisores
  'television':   'Televisores', 'televisor':   'Televisores', 'tele':        'Televisores',
  'televisores':  'Televisores', 'tv':          'Televisores', 'oled':        'Televisores',
  'qled':         'Televisores', 'pantalla':    'Televisores', 'smart tv':    'Televisores',
  // Laptops
  'laptop':       'Laptops',     'laptops':     'Laptops',     'computadora': 'Laptops',
  'notebook':     'Laptops',     'portatil':    'Laptops',     'macbook':     'Laptops',
  'ordenador':    'Laptops',     'computadoras':'Laptops',     'computador':  'Laptops',
  // Audio
  'auricular':    'Audio',       'auriculares': 'Audio',       'audifono':    'Audio',
  'audifonos':    'Audio',       'parlante':    'Audio',       'altavoz':     'Audio',
  'bocina':       'Audio',       'bocinas':     'Audio',       'speaker':     'Audio',
  'headphone':    'Audio',       'earphone':    'Audio',       'earbuds':     'Audio',
  'sonido':       'Audio',
  // Tablets
  'tablet':       'Tablets',     'tablets':     'Tablets',     'ipad':        'Tablets',
  // Gaming
  'juego':        'Gaming',      'juegos':      'Gaming',      'consola':     'Gaming',
  'videojuego':   'Gaming',      'videojuegos': 'Gaming',      'playstation': 'Gaming',
  'xbox':         'Gaming',      'nintendo':    'Gaming',      'mando':       'Gaming',
  'control':      'Gaming',      'gaming':      'Gaming',      'gamer':       'Gaming',
  // Cámaras
  'camara':       'Cámaras',     'camaras':     'Cámaras',     'foto':        'Cámaras',
  'fotografia':   'Cámaras',     'dslr':        'Cámaras',     'mirrorless':  'Cámaras',
  // Hogar
  'hogar':        'Hogar',       'aspiradora':  'Hogar',       'alexa':       'Hogar',
  'robot':        'Hogar',       'casa':        'Hogar',       'cocina':      'Hogar',
  'aspirador':    'Hogar',
  // Wearables
  'reloj':        'Wearables',   'relojes':     'Wearables',   'smartwatch':  'Wearables',
  'pulsera':      'Wearables',   'fitness':     'Wearables',   'watch':       'Wearables',
  'wearable':     'Wearables',
  // Accesorios
  'cable':        'Accesorios',  'cables':      'Accesorios',  'cargador':    'Accesorios',
  'mouse':        'Accesorios',  'teclado':     'Accesorios',  'raton':       'Accesorios',
  'accesorio':    'Accesorios',  'accesorios':  'Accesorios',
  // Monitores
  'monitor':      'Monitores',   'monitores':   'Monitores',
  // Música
  'guitarra':     'Música',      'instrumento': 'Música',      'musica':      'Música',
  // Belleza
  'belleza':      'Belleza',     'maquillaje':  'Belleza',     'cosmetico':   'Belleza',
  'cosmeticos':   'Belleza',     'piel':        'Belleza',     'cabello':     'Belleza',
  'skincare':     'Belleza',
};

function norm(s) {
  return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

function searchMatch(p, query) {
  if (!query) return true;
  const q = norm(query);
  const words = q.split(/\s+/).filter(Boolean);
  if (!words.length) return true;

  const fullText = norm([
    p.nombre, p.categoria, p.descripcion || '',
    ...(p.features || [])
  ].join(' '));

  return words.every(word => {
    const synCat = SYNONYMS[word];
    if (synCat && norm(p.categoria) === norm(synCat)) return true;
    return fullText.includes(word);
  });
}

function pct(b, n) { return Math.round((b - n) / b * 100); }
function fmt(n) { return '$' + n.toFixed(2); }
function stars(r) {
  const f = Math.floor(r), h = r % 1 >= 0.5 ? 1 : 0, e = 5 - f - h;
  return '★'.repeat(f) + (h ? '½' : '') + '☆'.repeat(e);
}
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
    if (searchQ && !searchMatch(p, searchQ)) return false;
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

function pagPages(cur, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (cur <= 4)         return [1, 2, 3, 4, 5, '…', total];
  if (cur >= total - 3) return [1, '…', total-4, total-3, total-2, total-1, total];
  return [1, '…', cur-1, cur, cur+1, '…', total];
}

function renderPagination(total) {
  const pag = document.getElementById('pagination');
  if (!pag) return;
  const totalPages = Math.ceil(total / PAGE_SIZE);
  if (totalPages <= 1) { pag.innerHTML = ''; return; }
  const prev = page > 1        ? `<button class="pag-btn pag-arr" onclick="goPage(${page-1})">&#8249;</button>` : `<button class="pag-btn pag-arr" disabled>&#8249;</button>`;
  const next = page < totalPages ? `<button class="pag-btn pag-arr" onclick="goPage(${page+1})">&#8250;</button>` : `<button class="pag-btn pag-arr" disabled>&#8250;</button>`;
  const nums = pagPages(page, totalPages).map(p =>
    p === '…' ? `<span class="pag-gap">…</span>`
              : `<button class="pag-btn${p === page ? ' active' : ''}" onclick="goPage(${p})">${p}</button>`
  ).join('');
  pag.innerHTML = prev + nums + next;
}

function goPage(n) {
  page = n;
  renderGrid();
  document.getElementById('grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.goPage = goPage;

function renderGrid() {
  const data = filtered();
  const start = (page - 1) * PAGE_SIZE;
  const chunk = data.slice(start, start + PAGE_SIZE);
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  document.getElementById('noRes').style.display = data.length === 0 ? 'block' : 'none';
  document.getElementById('showing').textContent = chunk.length;
  document.getElementById('total').textContent = data.length;
  renderPagination(data.length);

  chunk.forEach((p, i) => {
    const disc = pct(p.precioAntes, p.precioAhora);
    const saved = (p.precioAntes - p.precioAhora).toFixed(2);
    const bc = badgeClass(p.badge);
    const el = document.createElement('div');
    el.className = 'card';
    el.style.animationDelay = (i % PAGE_SIZE) * 0.035 + 's';
    el.innerHTML = `
      ${p.badge ? `<span class="card-badge ${bc}">${p.badge}</span>` : ''}
      <div class="card-img card-img-link" onclick="window.location.href='product.html?id=${p.id}'"><img src="${p.imagen}" onerror="imgErr(this)" alt="${p.nombre}" loading="lazy"></div>
      <div class="card-body">
        <div class="card-cat">${p.categoria}</div>
        <div class="card-name card-title-link" onclick="window.location.href='product.html?id=${p.id}'">${p.nombre}</div>
        <div class="stars-row"><span class="stars">${stars(p.rating)}</span><span class="rev-n">(${p.reviews.toLocaleString()})</span></div>
        <div class="price-area">
          <div class="price-before">Antes: ${fmt(p.precioAntes)}</div>
          <div class="price-row"><span class="price-now">${fmt(p.precioAhora)}</span><span class="disc-tag">-${disc}%</span></div>
          <div class="savings">Ahorras $${saved}</div>
        </div>
      </div>
      <div class="card-foot">
        <button class="btn-cart" onclick="cartAddById(${p.id})">🛒 Agregar</button>
        <button class="btn-detail" onclick="window.location.href='product.html?id=${p.id}'">Ver oferta →</button>
      </div>
      <div class="watchers" style="padding:0 12px 10px;font-size:11px;color:var(--muted)"><span>${WATCHERS[p.id]}</span> personas viendo esto</div>`;
    grid.appendChild(el);
  });
}


// Countdown
function tick() {
  const ch = document.getElementById('ch');
  if (!ch) return;
  const now = new Date(), end = new Date();
  end.setHours(23, 59, 59, 0);
  let d = Math.max(0, end - now);
  const h = Math.floor(d / 3600000); d -= h * 3600000;
  const m = Math.floor(d / 60000);   d -= m * 60000;
  const s = Math.floor(d / 1000);
  ch.textContent = String(h).padStart(2, '0');
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

document.getElementById('lastUpdate').textContent = new Date().toLocaleDateString('es-ES', {
  day: 'numeric', month: 'long', year: 'numeric'
});

renderGrid();

// ── Hero Slider ───────────────────────────
(function () {
  const slides = document.querySelectorAll('.hs-slide');
  const dots   = document.querySelectorAll('.hs-dot');
  if (!slides.length) return;

  let cur = 0, timer = null, paused = false;

  function goSlide(n) {
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = ((n % slides.length) + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');
    resetTimer();
  }

  function nextSlide() { goSlide(cur + 1); }
  function prevSlide() { goSlide(cur - 1); }

  function resetTimer() {
    clearInterval(timer);
    if (!paused) timer = setInterval(nextSlide, 5000);
  }

  window.goSlide   = goSlide;
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  const wrap = document.getElementById('heroSlider');
  if (wrap) {
    wrap.addEventListener('mouseenter', () => { paused = true; clearInterval(timer); });
    wrap.addEventListener('mouseleave', () => { paused = false; resetTimer(); });
  }

  resetTimer();
})();

