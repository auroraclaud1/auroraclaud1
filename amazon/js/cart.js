/* ── Cart management ────────────────────────── */

const CART_KEY = 'dhp_cart';

function cartGet() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; }
}

function cartSave(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  cartUpdateBadge();
}

function cartAddById(id) {
  if (typeof PRODUCTOS === 'undefined') return;
  const prod = PRODUCTOS.find(x => x.id === id);
  if (!prod) return;
  const items = cartGet();
  const idx = items.findIndex(i => i.id === id);
  if (idx >= 0) {
    items[idx].qty++;
  } else {
    items.push({
      id: prod.id,
      nombre: prod.nombre,
      imagen: prod.imagen,
      precio: prod.precioAhora,
      precioAntes: prod.precioAntes,
      qty: 1
    });
  }
  cartSave(items);
  openCart();
}

function cartRemove(id) {
  cartSave(cartGet().filter(i => i.id !== id));
  renderCartDrawer();
}

function cartUpdateQty(id, delta) {
  const items = cartGet();
  const idx = items.findIndex(i => i.id === id);
  if (idx < 0) return;
  items[idx].qty = Math.max(1, items[idx].qty + delta);
  cartSave(items);
  renderCartDrawer();
}

function cartCount() {
  return cartGet().reduce((s, i) => s + i.qty, 0);
}

function cartTotal() {
  return cartGet().reduce((s, i) => s + i.precio * i.qty, 0);
}

function cartUpdateBadge() {
  const count = cartCount();
  document.querySelectorAll('.hdr-cart-badge').forEach(el => {
    el.textContent = count;
  });
}

function renderCartDrawer() {
  const el = document.getElementById('cartItems');
  if (!el) return;
  const items = cartGet();
  if (!items.length) {
    el.innerHTML = '<div class="cart-empty"><span>🛒</span><p>Tu carrito está vacío</p></div>';
    const foot = document.getElementById('cartFooter');
    if (foot) foot.innerHTML = '';
    return;
  }
  el.innerHTML = items.map(item => `
    <div class="cart-item">
      <img src="${item.imagen}" alt="${item.nombre}" onerror="this.style.visibility='hidden'">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.nombre.length > 60 ? item.nombre.substring(0, 60) + '…' : item.nombre}</div>
        <div class="cart-item-price">$${item.precio.toFixed(2)} c/u</div>
        <div class="cart-item-qty">
          <button onclick="cartUpdateQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="cartUpdateQty(${item.id}, 1)">+</button>
          <button class="cart-item-del" onclick="cartRemove(${item.id})" title="Eliminar">🗑️</button>
        </div>
      </div>
    </div>
  `).join('');
  const total = cartTotal();
  const count = cartCount();
  const foot = document.getElementById('cartFooter');
  if (foot) {
    foot.innerHTML = `
      <div class="cart-total-row">
        <span>Total (${count} artículo${count !== 1 ? 's' : ''})</span>
        <strong>$${total.toFixed(2)}</strong>
      </div>
      <button class="cart-checkout-btn" onclick="window.location.href='checkout.html'">Comprar ahora →</button>
      <button class="cart-clear-btn" onclick="cartClear()">Vaciar carrito</button>
    `;
  }
}

function cartClear() {
  cartSave([]);
  renderCartDrawer();
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  if (!drawer) return;
  renderCartDrawer();
  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  if (!drawer) return;
  drawer.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', cartUpdateBadge);
