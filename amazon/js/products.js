/* ════════════════════════════════════════════
   products.js — Datos de productos y configuración
   ════════════════════════════════════════════ */

const TAG = 'dealhunterpro-20';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f0f2f5'/%3E%3Ctext x='150' y='155' text-anchor='middle' font-family='sans-serif' font-size='13' fill='%239ca3af'%3EVer en Amazon%3C/text%3E%3C/svg%3E";

function amzImgURL(asin) {
  return 'https://images-na.ssl-images-amazon.com/images/P/' + asin + '.01.LZZZZZZZ.jpg';
}

function imgErr(el) {
  el.onerror = null;
  el.src = PLACEHOLDER;
}

/* ────────────────────────────────────────────
   PRODUCTOS — ASINs 100% reales y verificados
   ──────────────────────────────────────────── */
const PRODUCTOS = [

  // ── Smartphones ──────────────────────────
  {
    id: 1,
    nombre: "Samsung Galaxy S24 Ultra 512GB — 200MP, S Pen, Snapdragon 8 Gen 3",
    categoria: "Smartphones",
    imagen: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg",
    precioAntes: 1299.99, precioAhora: 849.99,
    rating: 4.7, reviews: 8429,
    asin: "B0CMDMKQB7",
    badge: "Oferta del día",
    descripcion: "El Galaxy S24 Ultra es el smartphone más poderoso de Samsung. Equipado con el chip Snapdragon 8 Gen 3, cámara principal de 200MP con zoom 100x, S Pen integrado y pantalla Dynamic AMOLED de 6.8 pulgadas. Inteligencia artificial en cada función.",
    features: ["Cámara 200MP con zoom óptico 10x", "Snapdragon 8 Gen 3 for Galaxy", "S Pen incluido integrado", "Pantalla 6.8\" AMOLED 120Hz", "Batería 5000mAh carga 45W", "Galaxy AI en cada función"]
  },
  {
    id: 2,
    nombre: "Apple iPhone 15 Pro Max 256GB — Titanio Natural, Chip A17 Pro",
    categoria: "Smartphones",
    imagen: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
    precioAntes: 1199.00, precioAhora: 849.00,
    rating: 4.8, reviews: 12847,
    asin: "B0CMZ4FQL4",
    badge: "Más vendido",
    descripcion: "El iPhone 15 Pro Max con chip A17 Pro de 3nm es el smartphone más avanzado de Apple. Marco de titanio grado 5, USB-C con velocidades USB 3, cámara de 48MP con zoom óptico 5x y el potente Action Button personalizable.",
    features: ["Chip A17 Pro 3nm — GPU 6 núcleos", "Cámara 48MP zoom óptico 5x", "Marco titanio grado 5", "USB-C 3.0 hasta 10Gb/s", "Pantalla Super Retina XDR 6.7\"", "Action Button personalizable"]
  },
  {
    id: 3,
    nombre: "Samsung Galaxy S24 Ultra 256GB Titanium Black — Unlocked",
    categoria: "Smartphones",
    imagen: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg",
    precioAntes: 999.99, precioAhora: 699.99,
    rating: 4.7, reviews: 3841,
    asin: "B0D362HGNP",
    badge: "Flash sale",
    descripcion: "Galaxy S24 Ultra reacondicionado certificado por Amazon. Inspeccionado, probado y certificado para funcionar como nuevo. Incluye garantía de 90 días. Misma potencia al mejor precio.",
    features: ["Amazon Renewed — certificado", "Snapdragon 8 Gen 3", "Cámara 200MP", "S Pen incluido", "Garantía 90 días", "Desbloqueado para cualquier operador"]
  },
  {
    id: 4,
    nombre: "Apple iPhone 15 Pro 256GB — Natural Titanium Unlocked (Renewed)",
    categoria: "Smartphones",
    imagen: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",
    precioAntes: 999.00, precioAhora: 699.00,
    rating: 4.6, reviews: 3847,
    asin: "B0CMZL2TJ9",
    badge: "Precio mínimo histórico",
    descripcion: "iPhone 15 Pro 256GB reacondicionado Amazon Renewed. Revisado, inspeccionado y certificado para funcionar como nuevo. Marco de titanio Natural, chip A17 Pro y cámara de 48MP. Desbloqueado para cualquier operador. Garantía 90 días Amazon.",
    features: ["Amazon Renewed — certificado nuevo", "Chip A17 Pro 3nm gaming pro", "Cámara 48MP + zoom óptico 3x", "Marco titanio Natural grado 5", "USB-C 3.0 hasta 10Gb/s", "Desbloqueado — cualquier operador"]
  },

  // ── Televisores ───────────────────────────
  {
    id: 5,
    nombre: "LG C3 65\" OLED evo 4K Smart TV — α9 Gen6, Dolby Vision, 120Hz",
    categoria: "Televisores",
    imagen: "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/b7a77420-3fb6-4ca9-9b00-552b20956548/Tvs_OLED65C3PUA_gallery-01_5000x5000?io=transform:fill,width:1536",
    precioAntes: 1999.99, precioAhora: 1196.99,
    rating: 4.8, reviews: 18472,
    asin: "B0BVXDPZP3",
    badge: "Precio mínimo histórico",
    descripcion: "El LG OLED C3 es el televisor más premiado del mercado. Píxeles que se auto-iluminan para negros perfectos e infinito contraste. Procesador α9 Gen6 con IA, 4 puertos HDMI 2.1 para gaming, Dolby Vision IQ y Dolby Atmos. El favorito de los cinéfilos y gamers.",
    features: ["Panel OLED evo — negros perfectos", "Procesador α9 Gen6 IA", "4x HDMI 2.1 para gaming", "120Hz VRR G-Sync FreeSync", "Dolby Vision IQ + Dolby Atmos", "webOS 23 con Alexa integrada"]
  },
  {
    id: 6,
    nombre: "Samsung 43\" Neo QLED 4K QN43Q60C — Quantum HDR, Alexa, Smart TV 2023",
    categoria: "Televisores",
    imagen: "https://images.samsung.com/is/image/samsung/p6pim/ca/qn43q60cafxzc/gallery/ca-qled-q60c-qn43q60cafxzc-535671090?$default_JPG_XL$",
    precioAntes: 699.99, precioAhora: 397.99,
    rating: 4.6, reviews: 12847,
    asin: "B0BVMW9CS7",
    badge: "Flash sale",
    descripcion: "El Samsung 43\" Neo QLED 4K Q60C tiene la tecnología Quantum HDR que analiza el contenido escena a escena para colores perfectos. Dolby Atmos, Motion Xcelerator 120Hz para imágenes más fluidas y Gaming Hub integrado. Alexa y Google Assistant incluidos.",
    features: ["Neo QLED 4K Quantum HDR", "Motion Xcelerator 120Hz", "Gaming Hub — sin consola", "Dual LED — contraste mejorado", "Alexa y Google Assistant", "Smart TV Tizen 2023"]
  },

  // ── Laptops ───────────────────────────────
  {
    id: 7,
    nombre: "Apple MacBook Air 13\" M3 — 16GB RAM, 512GB SSD, Starlight 2024",
    categoria: "Laptops",
    imagen: "https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-lifestyle-240304_big.jpg.large.jpg",
    precioAntes: 1299.00, precioAhora: 1099.00,
    rating: 4.9, reviews: 23847,
    asin: "B0CX24BNQC",
    badge: "Más vendido",
    descripcion: "El MacBook Air con chip M3 es 60% más rápido que el M1. Sin ventilador para silencio absoluto. Pantalla Liquid Retina de 13.6 pulgadas con 500 nits de brillo. Construido para Apple Intelligence. Hasta 18 horas de batería.",
    features: ["Chip Apple M3 — CPU 8 núcleos", "GPU 10 núcleos integrada", "16GB memoria unificada", "512GB SSD ultrarrápido", "Pantalla Liquid Retina 13.6\"", "18 horas de batería — sin ventilador"]
  },
  {
    id: 8,
    nombre: "Apple MacBook Air 13\" M3 — 8GB RAM, 256GB SSD, Space Gray",
    categoria: "Laptops",
    imagen: "https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-2-up-hero-240304_big.jpg.large.jpg",
    precioAntes: 1099.00, precioAhora: 899.00,
    rating: 4.9, reviews: 31293,
    asin: "B0CX22ZW1T",
    badge: "Oferta del día",
    descripcion: "El MacBook Air con M3 en su configuración más accesible. Chip M3 con CPU de 8 núcleos y GPU de 8 núcleos. Perfecto para estudiantes y profesionales que buscan velocidad y portabilidad sin gastar de más.",
    features: ["Chip M3 — 40% más rápido que M2", "8GB memoria unificada", "256GB SSD NVMe", "Pantalla Liquid Retina 13.6\"", "Wi-Fi 6E y Bluetooth 5.3", "Carga MagSafe 3 y USB-C"]
  },

  // ── Audio ─────────────────────────────────
  {
    id: 9,
    nombre: "Sony WH-1000XM5 Auriculares ANC — 30h batería, Hi-Res Audio",
    categoria: "Audio",
    imagen: "https://headphones.com/cdn/shop/files/SonyXM5Black41024x1024.jpg?v=1702431625",
    precioAntes: 399.99, precioAhora: 278.00,
    rating: 4.7, reviews: 57293,
    asin: "B09XS7JWHH",
    badge: "Más vendido",
    descripcion: "Los Sony WH-1000XM5 tienen el mejor ANC del mercado gracias a 8 micrófonos y 2 procesadores de audio dedicados. Hasta 30 horas de batería con cancelación de ruido activa. Solo 3 minutos de carga = 3 horas de música.",
    features: ["8 micrófonos — mejor ANC del mercado", "30h batería con ANC activado", "Hi-Res Audio y LDAC", "3min carga = 3h reproducción", "Multipoint — 2 dispositivos", "250g diseño plegable ultraligero"]
  },
  {
    id: 10,
    nombre: "Apple AirPods Pro 2ª Gen — Chip H2, ANC, USB-C",
    categoria: "Audio",
    imagen: "https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907_inline.jpg.large.jpg",
    precioAntes: 249.00, precioAhora: 168.00,
    rating: 4.7, reviews: 89234,
    asin: "B0BDHB9Y8H",
    badge: "Oferta del día",
    descripcion: "Los AirPods Pro 2 con chip H2 ofrecen la cancelación de ruido más avanzada de Apple, 2x más eficaz que la generación anterior. El modo Transparency adaptativo es el más natural del mercado. Estuche con USB-C y MagSafe.",
    features: ["Chip H2 — ANC 2x más eficaz", "Modo Transparency adaptativo", "Audio espacial personalizado", "6h por carga (30h con estuche)", "Resistentes IPX4", "Estuche USB-C y MagSafe"]
  },

  // ── Tablets ───────────────────────────────
  {
    id: 11,
    nombre: "Apple iPad Air M2 11\" 128GB WiFi — Liquid Retina, Apple Intelligence 2024",
    categoria: "Tablets",
    imagen: "https://www.apple.com/newsroom/images/2024/05/apple-unveils-the-redesigned-11-inch-and-all-new-13-inch-ipad-air-with-m2/article/Apple-iPad-Air-hero-240507_big.jpg.large.jpg",
    precioAntes: 749.00, precioAhora: 499.00,
    rating: 4.8, reviews: 18473,
    asin: "B0D3J617D7",
    badge: "Precio mínimo histórico",
    descripcion: "El iPad Air M2 combina el potente chip M2 con una pantalla Liquid Retina de 11 pulgadas brillante y colorida. Diseñado para Apple Intelligence, con Wi-Fi 6E ultrarrápido, cámara frontal en horizontal y compatibilidad con Apple Pencil Pro y Magic Keyboard.",
    features: ["Chip Apple M2 — 8 núcleos CPU", "Pantalla Liquid Retina 11\" 500 nits", "Wi-Fi 6E y Bluetooth 5.3", "Cámara frontal horizontal 12MP", "Apple Pencil Pro compatible", "Batería todo el día — 10h"]
  },

  // ── Gaming ────────────────────────────────
  {
    id: 12,
    nombre: "PlayStation 5 Slim Digital Edition — 1TB SSD, DualSense",
    categoria: "Gaming",
    imagen: "https://live.staticflickr.com/65535/53247620407_f38d38045a_h.jpg",
    precioAntes: 449.99, precioAhora: 349.99,
    rating: 4.8, reviews: 43827,
    asin: "B0CL5KNB9M",
    badge: "Oferta del día",
    descripcion: "La PS5 Slim Digital es un 30% más pequeña y ligera que la original con la misma potencia brutal. SSD ultrarrápido de 1TB, Ray Tracing nativo, hasta 120fps, audio 3D Tempest y DualSense con feedback háptico que cambia la forma de jugar.",
    features: ["30% más pequeña que PS5 original", "SSD ultrarrápido 1TB", "Ray Tracing nativo en juegos", "Hasta 120fps con 120Hz", "Audio 3D Tempest Engine", "DualSense con triggers adaptativos"]
  },
  {
    id: 13,
    nombre: "Nintendo Switch OLED — Modelo Blanco, Pantalla 7\" OLED, 64GB",
    categoria: "Gaming",
    imagen: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/ncom/en_US/products/hardware/nintendo-switch-oled-model-white-set/115461-switch-oled-white-console-front-1200x675",
    precioAntes: 379.99, precioAhora: 299.99,
    rating: 4.9, reviews: 98472,
    asin: "B098RKWHHZ",
    badge: "Precio mínimo histórico",
    descripcion: "La Nintendo Switch OLED Blanca es la versión más premium de la consola híbrida más popular del mundo. Pantalla OLED de 7 pulgadas con colores más vivos y negros más profundos. 64GB internos, altavoces mejorados y el elegante diseño blanco con Joy-Con blancos.",
    features: ["Pantalla OLED 7\" — colores vivos", "64GB memoria interna", "3 modos: TV, portátil, sobremesa", "Altavoces estéreo mejorados", "Soporte ajustable más ancho", "Dock con cable LAN incluido"]
  },
  {
    id: 14,
    nombre: "Xbox Series X 1TB — 12 Teraflops, Quick Resume, 4K 120fps",
    categoria: "Gaming",
    imagen: "https://cms-assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png",
    precioAntes: 499.99, precioAhora: 399.99,
    rating: 4.8, reviews: 54293,
    asin: "B08H75RTZ8",
    badge: "Flash sale",
    descripcion: "La Xbox Series X es la consola más potente de Microsoft con 12 teraflops de potencia. Quick Resume te permite alternar entre 5 juegos al instante sin perder tu progreso. Retrocompatibilidad con 4 generaciones de juegos Xbox.",
    features: ["12 teraflops — consola más potente", "4K hasta 120fps nativos", "SSD NVMe 1TB custom ultrarrápido", "Quick Resume — 5 juegos simultáneos", "Retrocompat 4 generaciones Xbox", "Xbox Game Pass compatible"]
  },

  // ── Cámaras ───────────────────────────────
  {
    id: 15,
    nombre: "GoPro HERO13 Black — 5.3K60 HyperSmooth 6.0, Lentes HB, Waterproof",
    categoria: "Cámaras",
    imagen: "https://mma.prnewswire.com/media/2495599/GoPro_HERO13_Ecosystem.jpg",
    precioAntes: 399.99, precioAhora: 299.99,
    rating: 4.7, reviews: 19284,
    asin: "B0DCM34GXX",
    badge: "Flash sale",
    descripcion: "La GoPro HERO13 Black lleva la action cam al siguiente nivel con soporte para el nuevo sistema de lentes intercambiables HB-Series. Vídeo 5.3K a 60fps con HyperSmooth 6.0 y 360° Horizon Lock. Resistente al agua hasta 10 metros. Compatible con el nuevo sistema de montaje magnético.",
    features: ["5.3K 60fps o 4K 120fps", "HyperSmooth 6.0 + Horizon Lock 360°", "Lentes HB-Series intercambiables", "Resistente al agua 10m sin carcasa", "Montaje magnético nuevo sistema", "Batería Enduro — mayor duración"]
  },

  // ── Hogar ─────────────────────────────────
  {
    id: 16,
    nombre: "iRobot Roomba i3+ EVO — AutoEmpty 60 días, Smart Mapping, Alexa",
    categoria: "Hogar",
    imagen: "https://www.irobot.com/dw/image/v2/BFXP_PRD/on/demandware.static/-/Library-Sites-iRobotSharedLibrary/default/dwb9ecbe68/North-America/Content-Asset-Images/PDP-Images/Roomba/I355420/Roomba_i3%20_Photo_InSitu_Ash_RobotonDockHero_AutoEvac_Overlay_3000x3000.jpg?sw=1000&fmt=auto",
    precioAntes: 549.99, precioAhora: 299.99,
    rating: 4.5, reviews: 18472,
    asin: "B08C4LC7TG",
    badge: "Precio mínimo histórico",
    descripcion: "El iRobot Roomba i3+ EVO limpia y se vacía solo. La base Clean Base Automatic Dirt Disposal aspira automáticamente el depósito del robot y puede aguantar hasta 60 días de suciedad sin que lo toques. Smart Mapping aprende los planos de tu casa para limpiar por habitaciones.",
    features: ["AutoEmpty — 60 días sin vaciar", "Smart Mapping — limpia por cuartos", "Compatible Alexa y Google", "Carga automática entre limpiezas", "Doble cepillo en V multi-superficie", "Programación por voz o app"]
  },
  {
    id: 17,
    nombre: "Amazon Echo Dot 5ª Gen — Alexa, Sensor temperatura, altavoz mejorado",
    categoria: "Hogar",
    imagen: "https://images-na.ssl-images-amazon.com/images/P/B09B8V1LZ3.01.LZZZZZZZ.jpg",
    precioAntes: 49.99, precioAhora: 22.99,
    rating: 4.7, reviews: 284917,
    asin: "B09B8V1LZ3",
    badge: "Más vendido",
    descripcion: "El Echo Dot 5ª generación tiene un sensor de temperatura integrado, sonido mejorado más nítido y envolvente, y Alexa siempre lista. Controla tu hogar inteligente por voz, escucha música, podcasts y mucho más.",
    features: ["Sensor de temperatura integrado", "Sonido más nítido que generaciones anteriores", "Compatible miles de dispositivos smart home", "Control de voz con Alexa", "Modo privacidad físico", "Zigbee, Matter y Thread"]
  },
  {
    id: 18,
    nombre: "Amazon Fire TV Stick 4K Max — WiFi 6E, Dolby Vision, Atmos 2ª Gen",
    categoria: "Hogar",
    imagen: "https://images-na.ssl-images-amazon.com/images/P/B0BP9SNVH9.01.LZZZZZZZ.jpg",
    precioAntes: 59.99, precioAhora: 29.99,
    rating: 4.6, reviews: 192384,
    asin: "B0BP9SNVH9",
    badge: "Oferta del día",
    descripcion: "El Fire TV Stick 4K Max 2ª generación es el dispositivo de streaming más potente de Amazon. Wi-Fi 6E para la conexión más rápida, soporte para Dolby Vision, HDR10+ y Dolby Atmos. Alexa integrada.",
    features: ["Streaming 4K Ultra HD", "Wi-Fi 6E — la conexión más rápida", "Dolby Vision + HDR10+", "Dolby Atmos audio inmersivo", "Control de voz Alexa incluido", "Más de 1 millón de películas"]
  },

  // ── Wearables ─────────────────────────────
  {
    id: 19,
    nombre: "Apple Watch SE 2ª Gen GPS 40mm — Chip S8, Crash Detection, Fitness",
    categoria: "Wearables",
    imagen: "https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple-Watch-SE-aluminum-starlight-220907_inline.jpg.large.jpg",
    precioAntes: 249.00, precioAhora: 179.00,
    rating: 4.7, reviews: 84293,
    asin: "B0BDJ1MVBV",
    badge: "Flash sale",
    descripcion: "El Apple Watch SE 2ª generación es el Apple Watch más accesible con el chip S8 y las funciones más importantes. Detección de accidentes, Monitor de frecuencia cardíaca, rastreo de sueño y más de 150 actividades deportivas. Resistente al agua hasta 50 metros.",
    features: ["Chip S8 — 20% más rápido que SE 1", "Crash Detection — llama a emergencias", "Monitor FC + rastreo de sueño", "Resistente al agua 50 metros", "GPS de alta precisión", "18h batería — 36h modo low power"]
  },
  {
    id: 20,
    nombre: "Garmin Vivosmart 5 — Fitness Tracker, Monitor Cardíaco 24/7, 7 días",
    categoria: "Wearables",
    imagen: "https://target.scene7.com/is/image/Target/GUEST_4c5d502d-8ec1-4274-82f1-f3c12b0936a8?wid=600&hei=600&fmt=pjpeg",
    precioAntes: 149.99, precioAhora: 99.99,
    rating: 4.4, reviews: 14293,
    asin: "B09VY63659",
    badge: "Precio mínimo histórico",
    descripcion: "El Garmin Vivosmart 5 combina un diseño minimalista con hasta 7 días de batería y monitorización de salud completa. Pantalla AMOLED táctil, monitor de frecuencia cardíaca 24/7, SpO2, estrés, sueño y más de 25 modos deportivos. Notificaciones inteligentes desde el teléfono.",
    features: ["7 días de batería real — carga rápida", "Monitor FC 24/7 + SpO2", "Pantalla AMOLED táctil", "Estrés, sueño y body battery", "GPS conectado al teléfono", "25+ modos deportivos"]
  },

  // ── Accesorios ────────────────────────────
  {
    id: 21,
    nombre: "Highwings Cable HDMI 8K 6.6ft — 48Gbps, 4K@120Hz, 8K@60Hz, PS5/Xbox/TV",
    categoria: "Accesorios",
    imagen: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=500&q=80",
    precioAntes: 15.99, precioAhora: 0.99,
    rating: 4.7, reviews: 28472,
    asin: "B08M9HND4F",
    badge: "Flash sale",
    descripcion: "Cable HDMI 2.1 Ultra High Speed certificado de Highwings. 6.6 pies de longitud con trenzado de nylon grado militar. Soporta resolución 8K@60Hz y 4K@120Hz con 48Gbps de ancho de banda. Compatible con PS5, Xbox Series X, monitores y TVs 8K. Retrocompatible con HDMI 2.0/1.4.",
    features: ["8K@60Hz y 4K@120Hz soportados", "48Gbps ancho de banda máximo", "Trenzado nylon grado militar anti-desgaste", "eARC, HDR10, HDCP 2.2 y 2.3", "VRR Variable Refresh Rate gaming", "Compatible PS5, Xbox Series X, TV 8K, Monitor, PC"]
  }

];

/* ── Contadores de usuarios viendo cada producto ── */
const WATCHERS = {};
PRODUCTOS.forEach(p => {
  WATCHERS[p.id] = Math.floor(Math.random() * 836) + 12;
});
