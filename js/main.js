// Contact modal
const _waDefault = 'Hola%20Aurora%20Claud%2C%20quiero%20hablar%20sobre%20un%20proyecto.';
const _waFacturacion = 'Hola%20Aurora%20Claud%2C%20quiero%20cotizar%20el%20Sistema%20de%20Facturaci%C3%B3n%20e%20Inventariado.%20%C2%BFMe%20pueden%20dar%20informaci%C3%B3n%20sobre%20precios%20y%20funcionalidades%3F';
const _emailDefault = 'mailto:info@auroraclaud.com';
const _emailFacturacion = 'mailto:info@auroraclaud.com?subject=Cotizaci%C3%B3n%20Sistema%20de%20Facturaci%C3%B3n%20e%20Inventariado&body=Hola%20Aurora%20Claud%2C%20me%20interesa%20cotizar%20el%20Sistema%20de%20Facturaci%C3%B3n%20e%20Inventariado.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20precios%20y%20c%C3%B3mo%20funciona%3F';

function openContactModal(context) {
  const isFacturacion = context === 'facturacion';
  const waMsg = isFacturacion ? _waFacturacion : _waDefault;
  document.querySelectorAll('.opt-whatsapp').forEach(link => {
    link.href = link.href.split('?')[0] + '?text=' + waMsg;
  });
  const emailLink = document.querySelector('.opt-email');
  if (emailLink) emailLink.href = isFacturacion ? _emailFacturacion : _emailDefault;
  document.getElementById('contactModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeContactModal() {
  document.getElementById('contactModal').classList.remove('open');
  document.body.style.overflow = '';
}
function handleBackdropClick(e) {
  if (e.target === document.getElementById('contactModal') || e.target.classList.contains('modal-overlay')) {
    closeContactModal();
  }
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeContactModal(); });

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      if (e.target.closest('.why-right')) {
        setTimeout(() => {
          const bar = document.getElementById('uptime-bar');
          if (bar) bar.style.width = '99.98%';
        }, 400);
      }
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile menu
function toggleMobileMenu() {
  const links = document.querySelector('.nav-links');
  if (links) {
    if (links.style.display === 'flex') {
      links.style.display = 'none';
    } else {
      links.style.cssText = 'display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;background:rgba(255,255,255,0.98);backdrop-filter:blur(16px);padding:24px 6vw 32px;gap:20px;border-bottom:1px solid var(--border-soft);z-index:998';
    }
  }
}

// Nav shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Close mobile menu on nav link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    if (links && window.innerWidth < 900) {
      links.style.display = 'none';
    }
  });
});

// Audio autoplay + botón mute/unmute
(function () {
  const audio = document.getElementById('bg-audio');
  const btn = document.getElementById('audioBtn');
  if (!audio || !btn) return;

  audio.volume = 0.45;
  audio.currentTime = 0;

  function setMuted(muted) {
    audio.muted = muted;
    btn.classList.toggle('muted', muted);
    btn.setAttribute('aria-label', muted ? 'Activar audio' : 'Silenciar audio');
  }

  setMuted(false);

  btn.addEventListener('click', () => {
    if (audio.paused || audio.ended) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
      setMuted(false);
    } else {
      setMuted(!audio.muted);
    }
  });

  const unlockAndPlay = () => {
    audio.currentTime = 0;
    audio.play().catch(() => {});
    ['click','touchstart','keydown','scroll'].forEach(ev =>
      document.removeEventListener(ev, unlockAndPlay)
    );
  };

  audio.currentTime = 0;
  audio.play().catch(() => {
    ['click','touchstart','keydown','scroll'].forEach(ev =>
      document.addEventListener(ev, unlockAndPlay, { once: true })
    );
  });
})();

// GIF: play once then freeze on last frame
(function () {
  const t0 = Date.now();
  const img = document.querySelector('.hero-mockup');
  if (!img) return;

  function gifInfo(buffer) {
    const d = new Uint8Array(buffer);
    let i = 6, ms = 0, lastDelay = 100;
    const packed = d[i + 4], hasGCT = (packed >> 7) & 1, gctSz = packed & 7;
    i += 7 + (hasGCT ? 3 * Math.pow(2, gctSz + 1) : 0);
    while (i < d.length) {
      if (d[i] === 0x3B) break;
      if (d[i] === 0x21) {
        if (d[i + 1] === 0xF9) {
          const delay = d[i + 4] | (d[i + 5] << 8);
          lastDelay = (delay || 2) * 10;
          ms += lastDelay;
        }
        i += 2;
        while (d[i]) i += d[i] + 1;
        i++;
      } else if (d[i] === 0x2C) {
        i++;
        i += 8;
        const p = d[i]; i++;
        if ((p >> 7) & 1) i += 3 * Math.pow(2, (p & 7) + 1);
        i++;
        while (d[i]) i += d[i] + 1;
        i++;
      } else i++;
    }
    return { duration: ms, lastDelay };
  }

  function freeze(el) {
    const cv = document.createElement('canvas');
    cv.className = el.className;
    cv.width = el.naturalWidth;
    cv.height = el.naturalHeight;
    cv.getContext('2d').drawImage(el, 0, 0);
    el.parentNode.replaceChild(cv, el);
  }

  fetch(img.src)
    .then(r => r.arrayBuffer())
    .then(buf => {
      const { duration, lastDelay } = gifInfo(buf);
      const elapsed = Date.now() - t0;
      let timeout = duration - elapsed - Math.floor(lastDelay / 2);
      if (timeout < 0) timeout += duration;
      setTimeout(() => freeze(img), timeout);
    })
    .catch(() => setTimeout(() => freeze(img), 6000));
})();
