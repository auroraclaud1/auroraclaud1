/* ── Country selector & header logic ────── */

const COUNTRIES = [
  { code: 'US', name: 'United States'        },
  { code: 'DO', name: 'República Dominicana' },
  { code: 'MX', name: 'México'               },
  { code: 'ES', name: 'España'         },
  { code: 'CO', name: 'Colombia'       },
  { code: 'AR', name: 'Argentina'      },
  { code: 'CL', name: 'Chile'          },
  { code: 'PE', name: 'Perú'           },
  { code: 'VE', name: 'Venezuela'      },
  { code: 'EC', name: 'Ecuador'        },
  { code: 'CA', name: 'Canada'         },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'DE', name: 'Deutschland'    },
  { code: 'FR', name: 'France'         },
  { code: 'IT', name: 'Italia'         },
  { code: 'BR', name: 'Brasil'         },
  { code: 'AU', name: 'Australia'      },
  { code: 'JP', name: 'Japan'          },
];

function flagUrl(code) {
  return 'https://flagcdn.com/w40/' + code.toLowerCase() + '.png';
}

function setCountry(code, close) {
  const flagEl = document.getElementById('countryFlag');
  const codeEl = document.getElementById('countryCode');
  const addrEl = document.getElementById('hdrAddrCountry');
  if (flagEl) { flagEl.src = flagUrl(code); flagEl.alt = code; }
  if (codeEl) codeEl.textContent = code;
  if (addrEl) {
    const c = COUNTRIES.find(c => c.code === code);
    addrEl.textContent = c ? c.name : code;
  }
  localStorage.setItem('dhp_country', code);
  document.querySelectorAll('.hdr-country-opt').forEach(el => {
    el.classList.toggle('active', el.dataset.code === code);
  });
  if (close) closeCountryDrop();
}

function buildCountryDrop() {
  const drop = document.getElementById('countryDrop');
  if (!drop) return;
  drop.innerHTML =
    '<div class="hdr-drop-title">Seleccionar país / región</div>' +
    COUNTRIES.map(c =>
      '<button class="hdr-country-opt" data-code="' + c.code + '" onclick="setCountry(\'' + c.code + '\',true)">' +
        '<img src="' + flagUrl(c.code) + '" alt="' + c.name + '" width="24" height="17" style="object-fit:cover;border-radius:2px;flex-shrink:0">' +
        '<span>' + c.name + '</span>' +
      '</button>'
    ).join('');
}

function toggleCountry(e) {
  e.stopPropagation();
  const drop = document.getElementById('countryDrop');
  if (!drop) return;
  const isOpen = drop.classList.contains('open');
  drop.classList.toggle('open', !isOpen);
}

function closeCountryDrop() {
  const drop = document.getElementById('countryDrop');
  if (drop) drop.classList.remove('open');
}

document.addEventListener('click', function(e) {
  const wrap = document.getElementById('countryWrap');
  if (wrap && !wrap.contains(e.target)) closeCountryDrop();
});

async function detectCountry() {
  buildCountryDrop();
  const saved = localStorage.getItem('dhp_country');
  if (saved) { setCountry(saved, false); return; }
  try {
    const res  = await fetch('https://api.country.is/');
    const data = await res.json();
    setCountry(data.country || 'US', false);
  } catch {
    setCountry('US', false);
  }
}

detectCountry();
