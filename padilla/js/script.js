/* ===========================
   CART STATE
=========================== */
let cart = [];
const yaroa_state = { size: null, ingredient: null };

/* ===========================
   RENDER PRODUCTS
=========================== */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const items = filter === 'all' ? MENU : MENU.filter(p => p.cat === filter);

  items.forEach((product, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String((i % 4) * 80));

    const priceDisplay = product.isYaroa
      ? `<span class="card-price">$9<small>+</small></span>`
      : `<span class="card-price">$${product.price.toFixed(2)}</span>`;

    const selectorHTML = product.isYaroa ? `
      <div class="card-selectors">
        <div>
          <div class="selector-label">Size</div>
          <div class="selector-options" id="size-${product.id}">
            ${Object.keys(product.sizes).map(s =>
              `<button class="sel-btn" onclick="selectOpt('size-${product.id}','${s}',this)">${s}</button>`
            ).join('')}
          </div>
        </div>
        <div>
          <div class="selector-label">Protein</div>
          <div class="selector-options" id="ing-${product.id}">
            ${product.ingredients.map(ing =>
              `<button class="sel-btn" onclick="selectOpt('ing-${product.id}','${ing}',this)">${ing}</button>`
            ).join('')}
          </div>
        </div>
      </div>` : '';

    card.innerHTML = `
      <div class="card-img-wrap">
        ${product.image ? `<img src="${product.image}" alt="${product.name}" id="img-${product.id}">` : `<div class="card-img-emoji">${product.emoji}</div>`}
        ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ''}
      </div>
      <div class="card-body">
        <div class="card-name">${product.name}</div>
        <div class="card-desc">${product.desc}</div>
        ${selectorHTML}
        <div class="card-footer">
          ${priceDisplay}
          <button class="add-btn" id="btn-${product.id}" onclick="addToCart('${product.id}')" title="Add to order">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  if (typeof AOS !== 'undefined') AOS.refresh();
}

/* ===========================
   SELECTOR HANDLER (YAROA)
=========================== */
function selectOpt(groupId, value, el) {
  document.querySelectorAll(`#${groupId} .sel-btn`).forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');

  if (groupId.startsWith('size-')) yaroa_state.size = value;
  if (groupId.startsWith('ing-'))  yaroa_state.ingredient = value;

  const product = MENU.find(p => p.id === 'yaroa');

  if (yaroa_state.ingredient) {
    const imgEl = document.getElementById('img-yaroa');
    if (imgEl && product.imageTable[yaroa_state.ingredient]) {
      imgEl.src = product.imageTable[yaroa_state.ingredient];
    }
  }

  const priceEl = document.querySelector('#btn-yaroa')?.closest('.card-footer')?.querySelector('.card-price');
  if (!priceEl) return;

  if (yaroa_state.size && yaroa_state.ingredient) {
    const price = product.priceTable[yaroa_state.ingredient][yaroa_state.size];
    priceEl.innerHTML = `$${price.toFixed(2)}`;
  } else if (yaroa_state.ingredient && !yaroa_state.size) {
    const prices = Object.values(product.priceTable[yaroa_state.ingredient]);
    priceEl.innerHTML = `$${Math.min(...prices).toFixed(2)}<small>+</small>`;
  } else if (yaroa_state.size && !yaroa_state.ingredient) {
    const prices = Object.values(product.priceTable).map(ing => ing[yaroa_state.size]);
    priceEl.innerHTML = `$${Math.min(...prices).toFixed(2)}<small>+</small>`;
  }
}

/* ===========================
   ADD TO CART
=========================== */
function addToCart(id) {
  const product = MENU.find(p => p.id === id);
  if (!product) return;

  let name = product.name;
  let price = product.price;
  let detail = '';

  if (product.isYaroa) {
    if (!yaroa_state.size || !yaroa_state.ingredient) {
      showToast('⚠️ Choose size & protein for the Yaroa', '#e67e22');
      return;
    }
    price = product.priceTable[yaroa_state.ingredient][yaroa_state.size];
    detail = `${yaroa_state.size} - ${yaroa_state.ingredient}`;
    name = `Yaroa ${yaroa_state.ingredient} (${yaroa_state.size})`;
  }

  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: Date.now(), name, price, qty: 1, emoji: product.emoji, detail });
  }

  const btn = document.getElementById(`btn-${id}`);
  if (btn) {
    btn.classList.add('added');
    setTimeout(() => btn.classList.remove('added'), 400);
  }

  const badge = document.getElementById('cart-count');
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 450);

  showToast(`${product.emoji} ${product.name} added!`);
  renderCart();
}

/* ===========================
   TOAST
=========================== */
let toastTimer;
function showToast(msg, bg = '#e63946') {
  const toast = document.getElementById('add-toast');
  const text  = document.getElementById('toast-text');
  toast.style.background = bg;
  text.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

/* ===========================
   RENDER CART
=========================== */
function renderCart() {
  const container = document.getElementById('cart-items');
  const summary   = document.getElementById('cart-summary');
  const badge     = document.getElementById('cart-count');
  const waBtn     = document.getElementById('wa-btn');

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  badge.textContent = totalItems;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-basket-shopping"></i>
        <p>Your cart is empty.<br>Add something delicious!</p>
      </div>`;
    summary.innerHTML = '';
    waBtn.disabled = true;
    return;
  }

  waBtn.disabled = false;
  container.innerHTML = '';

  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.id = `ci-${item.id}`;
    el.innerHTML = `
      <div class="ci-emoji">${item.emoji}</div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        ${item.detail ? `<div class="ci-detail">${item.detail}</div>` : ''}
        <div class="ci-detail">$${item.price.toFixed(2)} each</div>
      </div>
      <div class="ci-qty-wrap">
        <button class="qty-btn minus" onclick="changeQty(${item.id}, -1)"><i class="fa-solid fa-minus"></i></button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)"><i class="fa-solid fa-plus"></i></button>
      </div>
      <div class="ci-price">$${(item.price * item.qty).toFixed(2)}</div>
    `;
    container.appendChild(el);
  });

  summary.innerHTML = `
    <div class="summary-row">
      <span>Subtotal (${totalItems} items)</span>
      <span>$${totalPrice.toFixed(2)}</span>
    </div>
    <div class="summary-row total">
      <span>TOTAL</span>
      <span class="total-val">$${totalPrice.toFixed(2)}</span>
    </div>
  `;
}

/* ===========================
   QUANTITY CHANGE / REMOVE
=========================== */
function changeQty(id, delta) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx < 0) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    const el = document.getElementById(`ci-${id}`);
    if (el) {
      el.classList.add('removing');
      setTimeout(() => {
        cart.splice(idx, 1);
        renderCart();
      }, 280);
    } else {
      cart.splice(idx, 1);
      renderCart();
    }
    return;
  }
  renderCart();
}

/* ===========================
   CLEAR CART
=========================== */
function clearCart() {
  if (cart.length === 0) return;
  if (!confirm('Clear your cart?')) return;
  cart = [];
  renderCart();
}

/* ===========================
   WHATSAPP SEND
=========================== */
function sendWhatsApp() {
  if (cart.length === 0) return;

  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  let msg = "🚚 *ORDER – D' PADILLA FOOD TRUCK* 🇩🇴\n📍 Paterson, NJ\n\n";

  cart.forEach(item => {
    msg += `✅ *${item.qty}x ${item.name}*\n`;
    if (item.detail) msg += `   _(${item.detail})_\n`;
    msg += `   $${(item.price * item.qty).toFixed(2)}\n\n`;
  });

  msg += "==========================\n";
  msg += `💰 *TOTAL: $${totalPrice.toFixed(2)}*\n`;
  msg += "==========================\n\n";
  msg += "Hi! I'd like to place this order. 😊";

  const encoded = encodeURIComponent(msg);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=13479923263&text=${encoded}`;

  const win = window.open(whatsappUrl, '_blank');
  if (!win) location.href = whatsappUrl;
}

/* ===========================
   UI TOGGLES & LISTENERS
=========================== */
function toggleCart() {
  const panel   = document.getElementById('cart-panel');
  const overlay = document.getElementById('cart-overlay');
  const isOpen  = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ===========================
   INIT
=========================== */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hide');

    if (typeof AOS !== 'undefined') {
      AOS.init({ once: true, duration: 600, offset: 60 });
    }

    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderProducts(tab.dataset.cat);
      });
    });

    renderProducts();
    renderCart();
  }, 1800);
});
