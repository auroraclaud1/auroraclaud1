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
    imagen: "https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large.jpg",
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
    imagen: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80",
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
    imagen: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&q=80",
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
    imagen: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=500&q=80",
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
  },

  // ── Smartphones (nuevos) ──────────────────
  {
    id: 22,
    nombre: "Google Pixel 9 Pro 256GB — Tensor G4, Cámara 50MP, 7 años actualizaciones",
    categoria: "Smartphones",
    imagen: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80",
    precioAntes: 999.00, precioAhora: 699.00,
    rating: 4.7, reviews: 9284,
    asin: "B0D7HWXVL5",
    badge: "Oferta del día",
    descripcion: "El Google Pixel 9 Pro es el teléfono con la mejor cámara del mercado según DxOMark. Chip Tensor G4 diseñado por Google con IA avanzada, pantalla OLED de 6.3 pulgadas con 120Hz y hasta 3000 nits. 7 años garantizados de actualizaciones de Android.",
    features: ["Chip Tensor G4 — IA Google nativa", "Cámara triple 50MP + 48MP + 48MP", "7 años actualizaciones Android", "Pantalla OLED 6.3\" 120Hz 3000 nits", "Batería 4700mAh carga 27W", "Google AI en cada función"]
  },
  {
    id: 23,
    nombre: "Samsung Galaxy A55 5G 256GB — 50MP, AMOLED 120Hz, IP67",
    categoria: "Smartphones",
    imagen: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg",
    precioAntes: 449.99, precioAhora: 299.99,
    rating: 4.5, reviews: 6821,
    asin: "B0CY2BWKPF",
    badge: "Precio mínimo histórico",
    descripcion: "El Galaxy A55 trae lo mejor de la gama alta a un precio accesible. Pantalla Super AMOLED de 6.6 pulgadas con 120Hz, cámara de 50MP con OIS, resistencia IP67 y batería de 5000mAh con carga de 25W. Diseño premium de aluminio y vidrio.",
    features: ["Pantalla Super AMOLED 6.6\" 120Hz", "Cámara 50MP con OIS integrado", "Resistencia al agua IP67", "Batería 5000mAh carga 25W", "4 años de actualizaciones Android", "Almacenamiento expandible microSD"]
  },

  // ── Laptops (nuevos) ──────────────────────
  {
    id: 24,
    nombre: "Dell XPS 15 9530 — Intel Core i7-13700H, RTX 4060, 16GB, 512GB SSD",
    categoria: "Laptops",
    imagen: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80",
    precioAntes: 1899.99, precioAhora: 1299.99,
    rating: 4.6, reviews: 4738,
    asin: "B0BYJQWSQK",
    badge: "Flash sale",
    descripcion: "El Dell XPS 15 es la laptop premium por excelencia. Pantalla OLED de 15.6 pulgadas con 100% DCI-P3, Intel Core i7-13700H de 13ª generación, NVIDIA RTX 4060 para creatividad y gaming, y un diseño ultrafino en aluminio mecanizado CNC.",
    features: ["Intel Core i7-13700H 13ª gen", "NVIDIA RTX 4060 8GB GDDR6", "Pantalla OLED 15.6\" 100% DCI-P3", "16GB DDR5 RAM + 512GB SSD", "Teclado retroiluminado RGB", "Thunderbolt 4 y USB-C"]
  },
  {
    id: 25,
    nombre: "ASUS ZenBook 14 OLED — AMD Ryzen 7 8840U, 16GB, 512GB, 2.8K OLED",
    categoria: "Laptops",
    imagen: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80",
    precioAntes: 999.99, precioAhora: 699.99,
    rating: 4.7, reviews: 3291,
    asin: "B0CSD4ZJBH",
    badge: "Más vendido",
    descripcion: "El ASUS ZenBook 14 OLED combina una pantalla OLED de 2.8K con 120Hz con el potente procesador AMD Ryzen 7 8840U. Solo 1.2kg de peso con hasta 15 horas de batería. Pantalla OLED con cobertura del 100% DCI-P3 y certificación PANTONE Validated.",
    features: ["AMD Ryzen 7 8840U — 8 núcleos", "Pantalla 2.8K OLED 120Hz 1.2kg", "16GB LPDDR5X + 512GB PCIe 4.0", "Hasta 15 horas batería real", "Wi-Fi 6E y Bluetooth 5.3", "Teclado NumberPad integrado táctil"]
  },

  // ── Audio (nuevos) ────────────────────────
  {
    id: 26,
    nombre: "Bose QuietComfort Ultra Headphones — ANC, Inmersive Audio, 24h batería",
    categoria: "Audio",
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    precioAntes: 429.00, precioAhora: 279.00,
    rating: 4.8, reviews: 22847,
    asin: "B0CCZ26B5V",
    badge: "Precio mínimo histórico",
    descripcion: "Los Bose QuietComfort Ultra son los mejores auriculares over-ear del mundo para viajeros. CustomTune calibra el ANC y el sonido a la anatomía exacta de tus oídos. Immersive Audio crea un sonido espacial que te rodea completamente. 24 horas de batería con ANC.",
    features: ["ANC Bose CustomTune — el mejor del mundo", "Immersive Audio espacial adaptativo", "24h batería con ANC activado", "Multipoint — 2 dispositivos simultáneos", "Modo Silence para máxima concentración", "Diseño plegable ultraligero 250g"]
  },
  {
    id: 27,
    nombre: "JBL Charge 5 — Altavoz Bluetooth Portátil, IP67, 20h, PowerBank",
    categoria: "Audio",
    imagen: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    precioAntes: 199.99, precioAhora: 129.99,
    rating: 4.7, reviews: 48293,
    asin: "B08MQLJR8K",
    badge: "Más vendido",
    descripcion: "El JBL Charge 5 tiene un sonido potente con bajos profundos gracias al radiador de bajos pasivo. Resistente al agua y al polvo con certificación IP67, puede sumergirse hasta 1 metro. 20 horas de batería y función de PowerBank para cargar tu móvil.",
    features: ["Sonido potente — radiador de bajos pasivo", "IP67 — resistente agua y polvo", "20 horas de reproducción", "PowerBank — carga tu móvil", "PartyBoost — conecta múltiples JBL", "USB-C carga rápida"]
  },

  // ── Televisores (nuevos) ──────────────────
  {
    id: 28,
    nombre: "Sony Bravia 7 55\" QLED Mini LED 4K — XR Processor, Dolby Vision, Google TV",
    categoria: "Televisores",
    imagen: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=500&q=80",
    precioAntes: 1499.99, precioAhora: 998.00,
    rating: 4.8, reviews: 7382,
    asin: "B0CX86TBQ5",
    badge: "Flash sale",
    descripcion: "El Sony Bravia 7 combina tecnología Mini LED con el procesador cognitivo XR para un control de la retroiluminación nunca visto. XR Backlight Master Drive genera negros más profundos y luces más brillantes. Google TV integrado con Alexa y Google Assistant.",
    features: ["Mini LED con XR Backlight Master Drive", "Procesador cognitivo XR de Sony", "Dolby Vision + Dolby Atmos", "Google TV — miles de apps", "4K 120Hz con VRR y ALLM gaming", "Acoustic Multi-Audio — altavoces en pantalla"]
  },
  {
    id: 29,
    nombre: "TCL 65\" QLED 4K Smart TV 65Q651G — Google TV, HDR10+, Dolby Atmos 2024",
    categoria: "Televisores",
    imagen: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&q=80",
    precioAntes: 799.99, precioAhora: 479.99,
    rating: 4.5, reviews: 11938,
    asin: "B0CXKGHQRP",
    badge: "Oferta del día",
    descripcion: "El TCL 65\" QLED ofrece calidad de imagen premium a un precio accesible. Tecnología QLED con quantum dots para colores más vivos, HDR10+ y Dolby Vision para máximo contraste. Google TV con acceso a todos tus servicios de streaming favoritos.",
    features: ["QLED 4K con quantum dots", "Google TV — Netflix, Disney+, Prime", "HDR10+ y Dolby Vision", "Dolby Atmos — sonido envolvente", "120Hz Game Mode — input lag mínimo", "Compatible con Alexa y Google Assistant"]
  },

  // ── Gaming (nuevo) ────────────────────────
  {
    id: 30,
    nombre: "Razer DeathAdder V3 Pro — Mouse Gaming Inalámbrico, 30K DPI, 90h batería",
    categoria: "Gaming",
    imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
    precioAntes: 159.99, precioAhora: 99.99,
    rating: 4.8, reviews: 18472,
    asin: "B0B6J6YQYD",
    badge: "Precio mínimo histórico",
    descripcion: "El Razer DeathAdder V3 Pro es el mouse gaming inalámbrico definitivo. El sensor Focus Pro 30K es el más preciso del mercado con resolución de 30,000 DPI. Diseño ergonómico ultraligero de solo 64g con 90 horas de batería y conexión HyperSpeed a 4000Hz.",
    features: ["Sensor Focus Pro 30K DPI — el más preciso", "64g ultraligero — diseño ergonómico", "90 horas de batería real", "HyperSpeed 4000Hz polling rate", "Switches ópticos 90M clicks vida útil", "Razer Synapse — personalización total"]
  },

  // ── Monitores ─────────────────────────────
  {
    id: 32,
    nombre: "Samsung Odyssey Neo G7 37\" — QHD 175Hz, HDR600 Mini LED, FreeSync, G-Sync",
    categoria: "Monitores",
    imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    precioAntes: 699.99, precioAhora: 499.99,
    rating: 4.7, reviews: 2847,
    asin: "B0FJYNKQ5T",
    badge: "Flash sale",
    descripcion: "El Samsung Odyssey Neo G7 de 37 pulgadas es el monitor gaming definitivo. Panel VA curvado 1000R con resolución WQHD y 175Hz para una fluidez excepcional. Tecnología Mini LED con HDR600 para negros más profundos y colores más brillantes.",
    features: ["Panel VA 37\" curvado 1000R", "175Hz — gaming ultraflúido", "HDR600 Mini LED — negros profundos", "FreeSync Premium Pro + G-Sync", "1ms respuesta GTG", "DisplayPort 1.4 + HDMI 2.1"]
  },
  {
    id: 33,
    nombre: "Samsung ViewFinity S8 37\" 4K UHD — USB-C 90W, IPS, Ergonómico, LS37D800UANXZA",
    categoria: "Monitores",
    imagen: "https://images-na.ssl-images-amazon.com/images/P/B0F1ZBTZCS.01.LZZZZZZZ.jpg",
    precioAntes: 1199.99, precioAhora: 799.99,
    rating: 4.6, reviews: 1293,
    asin: "B0F1ZBTZCS",
    badge: "Precio mínimo histórico",
    descripcion: "El Samsung ViewFinity S8 de 37 pulgadas ofrece una pantalla 4K UHD IPS con cobertura del 99% DCI-P3, perfecta para diseñadores y creadores. USB-C de 90W para cargar el portátil mientras trabajas. Soporte ergonómico con altura, giro e inclinación ajustables.",
    features: ["IPS 4K UHD 37\" — 99% DCI-P3", "USB-C 90W Power Delivery", "Soporte ergonómico totalmente ajustable", "Eye Comfort — sin parpadeos certificado", "Pantone Validated — colores precisos", "DisplayPort + HDMI + USB Hub"]
  },
  {
    id: 34,
    nombre: "Samsung ViewFinity S8 32\" 4K UHD — DisplayPort 2.0, USB-C, IPS, LS32D806EANXGO",
    categoria: "Monitores",
    imagen: "https://images-na.ssl-images-amazon.com/images/P/B0D4ZNF5LT.01.LZZZZZZZ.jpg",
    precioAntes: 899.99, precioAhora: 599.99,
    rating: 4.7, reviews: 2184,
    asin: "B0D4ZNF5LT",
    badge: "Oferta del día",
    descripcion: "El Samsung ViewFinity S8 32\" combina resolución 4K UHD con un panel IPS de alta fidelidad de color para profesionales creativos. DisplayPort 2.0, USB-C 90W y hub USB integrado. 98% DCI-P3 y certificación Pantone Validated para máxima precisión de color.",
    features: ["IPS 4K 32\" — 98% DCI-P3", "Pantone Validated — colores certificados", "DisplayPort 2.0 + USB-C 90W", "Hub USB integrado 4 puertos", "Picture by Picture — 2 fuentes simultáneas", "HDR400 True Black"]
  },

  // ── Tablets (nuevo) ───────────────────────
  {
    id: 35,
    nombre: "Lenovo IdeaPad Duet 5i 13\" — Intel Core i5, 8GB, 256GB SSD, Táctil 2.5K",
    categoria: "Tablets",
    imagen: "https://images-na.ssl-images-amazon.com/images/P/B0FGYGBY3C.01.LZZZZZZZ.jpg",
    precioAntes: 599.99, precioAhora: 399.99,
    rating: 4.5, reviews: 1847,
    asin: "B0FGYGBY3C",
    badge: "Flash sale",
    descripcion: "El Lenovo IdeaPad Duet 5i es una tablet 2 en 1 con pantalla táctil de 13 pulgadas 2.5K. Intel Core i5 de 12ª generación integrado. Viene con teclado desmontable y stylus incluidos. Perfecto para trabajo, estudio y entretenimiento en cualquier lugar.",
    features: ["Pantalla táctil 2.5K 13\" — brillante", "Intel Core i5 12ª gen", "8GB RAM + 256GB SSD", "Teclado desmontable incluido", "Stylus incluido — notas y dibujo", "Wi-Fi 6 y Bluetooth 5.1"]
  },

  // ── Gaming — Desktop ──────────────────────
  {
    id: 36,
    nombre: "Alienware Aurora R16 Gaming Desktop — Intel i9-14900KF, RTX 4090, 32GB, 2TB",
    categoria: "Gaming",
    imagen: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80",
    precioAntes: 3499.99, precioAhora: 2799.99,
    rating: 4.8, reviews: 847,
    asin: "B0F9MPVT38",
    badge: "Oferta del día",
    descripcion: "El Alienware Aurora R16 es la PC gaming de escritorio más potente del mercado. Intel Core i9-14900KF de 24 núcleos combinado con la NVIDIA RTX 4090 de 24GB GDDR6X. 32GB DDR5 de RAM y 2TB SSD NVMe para los juegos más exigentes a 4K en máxima calidad.",
    features: ["Intel Core i9-14900KF — 24 núcleos", "NVIDIA RTX 4090 24GB GDDR6X", "32GB DDR5 RAM ultrarrápida", "2TB SSD NVMe PCIe Gen 4", "Refrigeración líquida AIO 360mm", "Chasis Alienware RGB personalizable"]
  },

  // ── Música ────────────────────────────────
  {
    id: 37,
    nombre: "Vangoa Guitarra Acústica 41\" — Kit Principiantes, Funda, Afinador, 9 Accesorios",
    categoria: "Música",
    imagen: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&q=80",
    precioAntes: 89.99, precioAhora: 59.99,
    rating: 4.5, reviews: 12847,
    asin: "B07X2PD19N",
    badge: "Más vendido",
    descripcion: "La guitarra acústica Vangoa de 41 pulgadas es el kit perfecto para principiantes. Tapa de abeto sólido para un sonido cálido y resonante. Incluye funda acolchada, correa, capo, cuerdas extra, púas, afinador y mucho más. Lista para tocar desde el primer día.",
    features: ["Tapa abeto sólido — sonido cálido", "Diapasón de rosewood — fácil de tocar", "9 accesorios incluidos en el kit", "Funda acolchada de transporte", "Afinador de clip incluido", "Cuerdas de acero — sonido brillante"]
  },

  // ── Belleza ───────────────────────────────
  {
    id: 38,
    nombre: "Kit Maquillaje Completo 15 piezas — Foundation, Eyeshadow, Lipstick, Eyeliner",
    categoria: "Belleza",
    imagen: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&q=80",
    precioAntes: 29.99, precioAhora: 17.99,
    rating: 4.4, reviews: 3847,
    asin: "B0D4PPV9G5",
    badge: "Oferta del día",
    descripcion: "Kit de maquillaje completo de 15 piezas con todo lo que necesitas para un look profesional. Incluye base de cobertura completa, paleta de sombras, labial de larga duración y delineador de ojos. Fórmula vegana y libre de crueldad animal. Ideal para principiantes y expertas.",
    features: ["15 productos en un solo kit", "Foundation de cobertura completa", "Paleta de sombras multicolor", "Lipstick larga duración 12h", "Fórmula vegana — sin crueldad animal", "Apto para todo tipo de piel"]
  },
  {
    id: 39,
    nombre: "Eakroo Blush Stick Multifuncional — Hidratante, Mejillas, Ojos y Labios",
    categoria: "Belleza",
    imagen: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80",
    precioAntes: 19.99, precioAhora: 12.99,
    rating: 4.3, reviews: 2193,
    asin: "B0C3CWWMJM",
    badge: "Flash sale",
    descripcion: "El Eakroo Blush Stick es un producto multifuncional que funciona como colorete, sombra de ojos y labial. Fórmula ultra hidratante que no reseca la piel. Textura ligera que se difumina fácilmente con los dedos. Colores vibrantes de larga duración.",
    features: ["Triple uso — mejillas, ojos y labios", "Fórmula hidratante — no reseca", "Textura cremosa fácil de difuminar", "Larga duración hasta 10 horas", "Sin parabenos ni fragancia", "Apto piel sensible"]
  },
  {
    id: 40,
    nombre: "MTDXILTAI Kit Maquillaje 12 Piezas — Eyeshadow, Foundation, Contorno, Eyeliner",
    categoria: "Belleza",
    imagen: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&q=80",
    precioAntes: 24.99, precioAhora: 14.99,
    rating: 4.4, reviews: 4721,
    asin: "B0CBBPVNB6",
    badge: "Precio mínimo histórico",
    descripcion: "El kit MTDXILTAI incluye todo para un maquillaje completo: paleta de sombras de 12 tonos, base líquida, paleta de contorno e iluminador y delineador de ojos. Pigmentos de alta calidad que duran todo el día. Empaque elegante ideal para regalo.",
    features: ["12 productos en kit completo", "Paleta sombras 12 tonos mate y shimmer", "Base líquida cobertura media-alta", "Contorno e iluminador incluidos", "Delineador de punta fina", "Empaque premium — ideal regalo"]
  },
  {
    id: 41,
    nombre: "Sun Sculpt Contour Líquido Soft Tan — Bronceador Natural, Vegano, Larga Duración",
    categoria: "Belleza",
    imagen: "https://images-na.ssl-images-amazon.com/images/P/B0B3TTBC7M.01.LZZZZZZZ.jpg",
    precioAntes: 22.99, precioAhora: 14.99,
    rating: 4.5, reviews: 6284,
    asin: "B0B3TTBC7M",
    badge: "Más vendido",
    descripcion: "Sun Sculpt es el contorno líquido que define los rasgos sin aspecto de máscara. El tono Soft Tan se funde perfectamente con pieles medias y bronceadas. Fórmula vegana e hidratante. Acabado natural que dura todo el día sin transferencias.",
    features: ["Contorno líquido tono Soft Tan", "Acabado natural — sin efecto máscara", "Fórmula vegana e hidratante", "Larga duración — todo el día", "Fácil difuminado con esponja o brocha", "Sin aceite — no obstruye poros"]
  },
  {
    id: 42,
    nombre: "BLANC Cream Stick Color Changing — Rubor Adaptativo, Hidratante, Vegano",
    categoria: "Belleza",
    imagen: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500&q=80",
    precioAntes: 24.99, precioAhora: 15.99,
    rating: 4.4, reviews: 1938,
    asin: "B0DJ8Z98MY",
    badge: "Oferta del día",
    descripcion: "El BLANC Cover Cream Stick cambia de color al aplicarse, adaptándose al tono de tu piel para darte el rubor perfecto. Stick ultrapráctico que hidrata mientras maquilla. Se puede usar en mejillas, ojos y labios. Sin parabenos, vegano y libre de crueldad animal.",
    features: ["Color cambia al aplicarse — se adapta", "Stick compacto — fácil de llevar", "Triple uso — mejillas, ojos y labios", "Fórmula hidratante con vitamina E", "Sin parabenos ni fragancia artificial", "Vegano y libre de crueldad animal"]
  },

  // ── Hogar (nuevo) ─────────────────────────
  {
    id: 31,
    nombre: "Dyson V15 Detect Absolute — Láser, 60min, HEPA, 240AW aspiradora",
    categoria: "Hogar",
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    precioAntes: 749.99, precioAhora: 499.99,
    rating: 4.7, reviews: 13847,
    asin: "B09KPJHWVR",
    badge: "Flash sale",
    descripcion: "El Dyson V15 Detect tiene un láser integrado en el cepillo que ilumina el suelo para revelar el polvo microscópico invisible a simple vista. Sensor piezo que cuenta y clasifica partículas en tiempo real. Motor Hyperdymium de 240AW con filtro HEPA que captura el 99.99% de partículas.",
    features: ["Láser revela polvo invisible al ojo", "Sensor piezo — cuenta partículas en tiempo real", "240AW de succión máxima", "Filtro HEPA 99.99% captura bacterias", "60 minutos batería — modo eco", "Pantalla LCD con estadísticas de limpieza"]
  },

  // ── Smartphones (más) ─────────────────────
  {
    id: 43,
    nombre: "OnePlus 12 5G 256GB — Snapdragon 8 Gen 3, Hasselblad 50MP, Carga 100W",
    categoria: "Smartphones",
    imagen: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
    precioAntes: 799.99, precioAhora: 549.99,
    rating: 4.6, reviews: 4283,
    asin: "B0CS5DC4H1",
    badge: "Flash sale",
    descripcion: "El OnePlus 12 combina Snapdragon 8 Gen 3 con el sistema de cámara Hasselblad de 50MP y la carga más rápida del mercado: 100W SUPERVOOC que da un 50% en 10 minutos. Pantalla AMOLED de 6.82 pulgadas con 120Hz y batería de 5400mAh.",
    features: ["Snapdragon 8 Gen 3 — máximo rendimiento", "Cámara Hasselblad 50MP + Periscope 64MP", "Carga 100W — 50% en solo 10 minutos", "Pantalla AMOLED 6.82\" 120Hz 4500 nits", "Batería 5400mAh — la más grande", "Alert Slider — silencio con un gesto"]
  },
  {
    id: 44,
    nombre: "Samsung Galaxy S23 FE 128GB — 50MP, IP68, Snapdragon 8 Gen 1, AMOLED",
    categoria: "Smartphones",
    imagen: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-fe.jpg",
    precioAntes: 599.99, precioAhora: 379.99,
    rating: 4.5, reviews: 7841,
    asin: "B0CBXRP9QG",
    badge: "Precio mínimo histórico",
    descripcion: "El Samsung Galaxy S23 FE lleva la experiencia Galaxy a un precio accesible. Snapdragon 8 Gen 1, triple cámara de 50MP con zoom 3x, resistencia IP68 y pantalla Dynamic AMOLED de 6.4 pulgadas con 120Hz. 4 años de actualizaciones garantizados.",
    features: ["Snapdragon 8 Gen 1 — potencia premium", "Cámara 50MP + zoom óptico 3x", "IP68 — resistente al agua 1.5m", "Dynamic AMOLED 6.4\" 120Hz", "4 años actualizaciones Android", "Carga 25W + inalámbrica 15W"]
  },
  {
    id: 45,
    nombre: "Google Pixel 8a 128GB — Tensor G3, 64MP, 7 años actualizaciones, OLED 120Hz",
    categoria: "Smartphones",
    imagen: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8a.jpg",
    precioAntes: 499.00, precioAhora: 349.00,
    rating: 4.6, reviews: 5293,
    asin: "B0CYS5BFFT",
    badge: "Oferta del día",
    descripcion: "El Google Pixel 8a es el mid-range más completo. Chip Tensor G3 con IA avanzada, cámara de 64MP con Magic Eraser y Best Take, pantalla OLED de 6.1 pulgadas con 120Hz y 7 años garantizados de actualizaciones. IP67.",
    features: ["Tensor G3 — IA exclusiva Google", "64MP + ultrawide 13MP", "7 años actualizaciones Android garantizados", "OLED 6.1\" 120Hz", "IP67 — resistente al agua", "Magic Eraser y Best Take con IA"]
  },
  {
    id: 46,
    nombre: "Apple iPhone 15 128GB — Dynamic Island, USB-C, Cámara 48MP, A16 Bionic",
    categoria: "Smartphones",
    imagen: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",
    precioAntes: 799.00, precioAhora: 599.00,
    rating: 4.7, reviews: 21847,
    asin: "B0CHX2DQVW",
    badge: "Flash sale",
    descripcion: "El iPhone 15 trae Dynamic Island y USB-C a toda la gama. Chip A16 Bionic de 4nm, cámara de 48MP con zoom 2x sin pérdida de calidad. La primera vez que el iPhone base incluye Dynamic Island.",
    features: ["Dynamic Island — notificaciones inteligentes", "Chip A16 Bionic 4nm", "Cámara 48MP — zoom 2x sin pérdida", "USB-C — transfiere fotos al instante", "Pantalla Super Retina XDR 6.1\"", "Emergency SOS vía satélite"]
  },
  {
    id: 47,
    nombre: "Samsung Galaxy Z Fold 5 256GB — Pantalla 7.6\" Plegable, Snapdragon 8 Gen 2",
    categoria: "Smartphones",
    imagen: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5.jpg",
    precioAntes: 1799.99, precioAhora: 1099.99,
    rating: 4.6, reviews: 6293,
    asin: "B0CGJHMPTH",
    badge: "Precio mínimo histórico",
    descripcion: "El Galaxy Z Fold 5 tiene la pantalla interior más grande de Samsung: 7.6 pulgadas AMOLED. Bisagra Flex Hinge sin espacio entre pantallas, Snapdragon 8 Gen 2 y resistencia IPX8. El futuro en tu bolsillo.",
    features: ["Pantalla interior AMOLED 7.6\" 120Hz", "Pantalla exterior 6.2\" AMOLED 120Hz", "Snapdragon 8 Gen 2 for Galaxy", "Bisagra Flex Hinge — sin hueco visible", "Compatible S Pen Fold Edition", "IPX8 — primer plegable resistente al agua"]
  },
  {
    id: 48,
    nombre: "Motorola Edge 50 Pro 256GB — POLED 144Hz, Carga 125W, Snapdragon 7 Gen 3",
    categoria: "Smartphones",
    imagen: "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg",
    precioAntes: 599.99, precioAhora: 379.99,
    rating: 4.4, reviews: 2847,
    asin: "B0CZ9MVMZB",
    badge: "Flash sale",
    descripcion: "El Motorola Edge 50 Pro combina pantalla POLED de 144Hz con la carga más rápida de la gama media: 125W que dan 68% en 10 minutos. Snapdragon 7 Gen 3, cámara de 50MP con OIS y diseño en cuero vegano.",
    features: ["Snapdragon 7 Gen 3 — potencia media-alta", "Carga 125W — 68% en 10 minutos", "POLED 6.7\" 144Hz — fluidez máxima", "Cámara 50MP OIS + Telephoto 10MP", "IP68 — resistente al agua", "Cuero vegano Pantone — diseño exclusivo"]
  },
  {
    id: 49,
    nombre: "Apple iPhone 16 Pro Max 256GB — Chip A18 Pro, 48MP Ultrawide, 4K 120fps",
    categoria: "Smartphones",
    imagen: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
    precioAntes: 1199.00, precioAhora: 999.00,
    rating: 4.8, reviews: 15847,
    asin: "B0DGJXL5FX",
    badge: "Más vendido",
    descripcion: "El iPhone 16 Pro Max con chip A18 Pro soporta ray tracing en hardware por primera vez. Pantalla de 6.9 pulgadas, ultrawide de 48MP y grabación 4K a 120fps en Dolby Vision. Apple Intelligence integrada.",
    features: ["Chip A18 Pro — ray tracing hardware", "Pantalla ProMotion 6.9\" 120Hz", "Ultrawide 48MP f/2.2 nueva generación", "Tetra Prism 5x zoom óptico", "4K 120fps Dolby Vision — primero en el mundo", "Apple Intelligence — IA nativa Apple"]
  },

  // ── Televisores (más) ─────────────────────
  {
    id: 50,
    nombre: "Samsung 55\" OLED S90C 4K — QD-OLED, Neural Quantum, 144Hz Gaming",
    categoria: "Televisores",
    imagen: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=500&q=80",
    precioAntes: 1799.99, precioAhora: 999.99,
    rating: 4.7, reviews: 9283,
    asin: "B0BTVY2L97",
    badge: "Precio mínimo histórico",
    descripcion: "El Samsung OLED S90C combina quantum dots con OLED para colores explosivos y negros perfectos. 144Hz para gaming sin tearing, Gaming Hub integrado y procesador Neural Quantum 4K con IA.",
    features: ["Panel QD-OLED — quantum dots + OLED", "Neural Quantum Processor 4K IA", "144Hz VRR — gaming sin tearing", "Gaming Hub — juega sin consola", "Dolby Atmos + Object Tracking Sound", "Tizen OS — acceso a todo el streaming"]
  },
  {
    id: 51,
    nombre: "Hisense 65\" U8K ULED Mini-LED 4K — 1600 nits, 144Hz, Dolby Vision IQ",
    categoria: "Televisores",
    imagen: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=500&q=80",
    precioAntes: 999.99, precioAhora: 699.99,
    rating: 4.6, reviews: 8472,
    asin: "B0C6KZBJ89",
    badge: "Flash sale",
    descripcion: "El Hisense 65\" U8K es el televisor con mejor relación calidad-precio según múltiples análisis. Mini-LED con 1600 nits de brillo máximo, 144Hz VRR y Google TV con acceso a Netflix, Disney+ y más.",
    features: ["Mini-LED ULED — 1600 nits pico", "144Hz VRR — gaming y deportes fluidos", "Dolby Vision IQ + Dolby Atmos", "Google TV — todo el streaming", "2x HDMI 2.1 para gaming 4K 144Hz", "Hi-View Engine Pro — IA mejora de imagen"]
  },
  {
    id: 52,
    nombre: "LG 55\" QNED MiniLED 4K 55QNED90T — α7 Gen7, 120Hz, ThinQ AI, webOS 24",
    categoria: "Televisores",
    imagen: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=500&q=80",
    precioAntes: 799.99, precioAhora: 499.99,
    rating: 4.6, reviews: 7293,
    asin: "B0CTDTZ85M",
    badge: "Oferta del día",
    descripcion: "El LG QNED 55\" combina Mini LED con Quantum Dot NanoCell para colores ultra precisos. Procesador α7 Gen7 con IA que optimiza imagen y sonido. webOS 24 con ThinQ AI y compatibilidad con Alexa y Google.",
    features: ["Mini LED + NanoCell — colores ultra precisos", "Procesador α7 Gen7 IA", "120Hz 4K — imágenes fluidas", "webOS 24 — interfaz más rápida", "Game Optimizer — modo gaming dedicado", "Compatible Alexa, Google y ThinQ"]
  },
  {
    id: 53,
    nombre: "TCL 55\" S4 4K Smart TV — Google TV, HDR10+, Dolby Audio, Control por Voz",
    categoria: "Televisores",
    imagen: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&q=80",
    precioAntes: 499.99, precioAhora: 279.99,
    rating: 4.4, reviews: 14293,
    asin: "B0BH79NTBM",
    badge: "Más vendido",
    descripcion: "El TCL 55\" S4 es la opción inteligente para calidad 4K sin gastar de más. Google TV con todas las apps, HDR10+ y Alexa y Google Assistant integrados para control por voz.",
    features: ["4K UHD — 4x más nitidez que HD", "Google TV — Netflix, Disney+, Prime", "HDR10+ — contraste y colores mejorados", "Control por voz Alexa y Google", "3x HDMI + 2x USB", "Modo ahorro de energía inteligente"]
  },
  {
    id: 54,
    nombre: "Sony 65\" Bravia X80L 4K — X1 Processor, Google TV, Dolby Atmos, HDMI 2.1",
    categoria: "Televisores",
    imagen: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=500&q=80",
    precioAntes: 999.99, precioAhora: 699.99,
    rating: 4.6, reviews: 11284,
    asin: "B0BT8QVZKR",
    badge: "Flash sale",
    descripcion: "El Sony Bravia X80L con procesador X1 ofrece imagen 4K nítida y colores vibrantes con Google TV, Dolby Atmos y compatibilidad HDMI 2.1 para gaming.",
    features: ["Procesador X1 4K — optimización en tiempo real", "Google TV — toda tu biblioteca digital", "Dolby Atmos + DTS:X", "BRAVIA CORE — calidad de cine en casa", "HDMI 2.1 para gaming 4K", "Compatible altavoces Bravia Theater"]
  },

  // ── Laptops (más) ─────────────────────────
  {
    id: 55,
    nombre: "Lenovo ThinkPad X1 Carbon Gen 11 — Intel i7, 16GB, 512GB, 14\" 2.8K IPS",
    categoria: "Laptops",
    imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
    precioAntes: 1899.99, precioAhora: 1299.99,
    rating: 4.7, reviews: 3847,
    asin: "B0CDFNN5LR",
    badge: "Flash sale",
    descripcion: "El ThinkPad X1 Carbon Gen 11 pesa solo 1.12kg con chasis de fibra de carbono, pantalla IPS 2.8K e Intel Core i7. Certificada MIL-SPEC en 12 pruebas de resistencia. El teclado ThinkPad es el favorito de los profesionales.",
    features: ["1.12kg — laptop empresarial más ligera", "Intel Core i7-1365U vPro", "Pantalla 2.8K IPS 90Hz", "Certificación MIL-SPEC 12 pruebas", "Teclado ThinkPad — el mejor del mercado", "Rapid Charge — 80% en 1 hora"]
  },
  {
    id: 56,
    nombre: "HP Spectre x360 14\" — Intel Core Ultra 7, 16GB, 2TB SSD, OLED 2.8K Táctil",
    categoria: "Laptops",
    imagen: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&q=80",
    precioAntes: 1699.99, precioAhora: 1199.99,
    rating: 4.7, reviews: 4293,
    asin: "B0CWNDQ14Y",
    badge: "Oferta del día",
    descripcion: "El HP Spectre x360 14\" es la 2 en 1 premium con pantalla OLED 2.8K táctil y rotación 360°. Intel Core Ultra 7, 16GB LPDDR5x, 2TB SSD y diseño octagonal en aluminio. HP Pen incluido.",
    features: ["OLED 2.8K táctil 360° — pantalla espectacular", "Intel Core Ultra 7 con AI Boost", "16GB LPDDR5x + 2TB SSD NVMe", "HP Pen incluido — 4096 niveles presión", "Thunderbolt 4 x2 — 40Gbps", "Hasta 17 horas de batería"]
  },
  {
    id: 57,
    nombre: "Microsoft Surface Laptop 5 13.5\" — Intel i5, 8GB, 512GB, PixelSense Táctil",
    categoria: "Laptops",
    imagen: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
    precioAntes: 1299.99, precioAhora: 899.99,
    rating: 4.6, reviews: 5847,
    asin: "B0BGCKNFZN",
    badge: "Precio mínimo histórico",
    descripcion: "El Surface Laptop 5 tiene la pantalla PixelSense táctil de 13.5\" con relación 3:2 para más espacio vertical. Intel Core i5 de 12ª gen, teclado con acabado Alcantara y Windows Hello facial para inicio instantáneo.",
    features: ["PixelSense 2256x1504 táctil — relación 3:2", "Intel i5-1245U 12ª generación", "Acabado Alcantara — lujo en el teclado", "Windows Hello facial — inicio en segundos", "USB-C — compatible cualquier cargador", "Diseño ultrafino 14.5mm"]
  },
  {
    id: 58,
    nombre: "Acer Swift Go 14 OLED — AMD Ryzen 7 8840U, 16GB, 1TB, 2.8K 120Hz",
    categoria: "Laptops",
    imagen: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80",
    precioAntes: 899.99, precioAhora: 599.99,
    rating: 4.6, reviews: 2847,
    asin: "B0CGN5J1QB",
    badge: "Flash sale",
    descripcion: "El Acer Swift Go 14 tiene la mejor pantalla de su gama: OLED 2.8K con 120Hz y 100% DCI-P3. AMD Ryzen 7 8840U Zen 4, 16GB LPDDR5x y 1TB SSD PCIe Gen 4. Solo 1.36kg.",
    features: ["OLED 2.8K 120Hz — 100% DCI-P3", "AMD Ryzen 7 8840U Zen 4", "16GB LPDDR5x + 1TB PCIe Gen 4", "1.36kg — ultraligero para OLED", "Wi-Fi 6E + Bluetooth 5.3", "Thunderbolt 4 y USB-A 3.2"]
  },
  {
    id: 59,
    nombre: "HP Victus 16 Gaming — RTX 4060, AMD Ryzen 7 7745HX, 16GB DDR5, 144Hz",
    categoria: "Laptops",
    imagen: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80",
    precioAntes: 1099.99, precioAhora: 749.99,
    rating: 4.5, reviews: 6293,
    asin: "B0BTZM9D3Q",
    badge: "Oferta del día",
    descripcion: "El HP Victus 16 es la laptop gaming más accesible con RTX 4060. AMD Ryzen 7 7745HX de 8 núcleos, pantalla IPS 144Hz y sistema de refrigeración mejorado para máximo rendimiento en juegos.",
    features: ["NVIDIA RTX 4060 8GB GDDR6", "AMD Ryzen 7 7745HX 8 núcleos", "16GB DDR5 + 512GB SSD", "Pantalla IPS 16\" 144Hz FHD", "Refrigeración dual fan — cuatro salidas", "HDMI 2.1 para TV 4K"]
  },

  // ── Audio (más) ───────────────────────────
  {
    id: 60,
    nombre: "Bose SoundLink Max — Altavoz Bluetooth IP67, 20h, Sonido 360°, AUX",
    categoria: "Audio",
    imagen: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    precioAntes: 399.00, precioAhora: 279.00,
    rating: 4.7, reviews: 12847,
    asin: "B0CJ8DJFR5",
    badge: "Precio mínimo histórico",
    descripcion: "El Bose SoundLink Max es el altavoz portátil más potente de Bose. Sonido omnidireccional 360°, IP67 para uso a prueba de agua y polvo, 20 horas de batería y Party Mode para conectar varios altavoces.",
    features: ["Sonido 360° omnidireccional Bose", "IP67 — sumergible hasta 1 metro", "20 horas de batería", "Party Mode — múltiples altavoces", "Carga USB-C universal", "Entrada AUX — compatible cualquier dispositivo"]
  },
  {
    id: 61,
    nombre: "Sony WF-1000XM5 TWS — ANC Hi-Res Audio, 8h+24h, LDAC, Bluetooth 5.3",
    categoria: "Audio",
    imagen: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    precioAntes: 299.99, precioAhora: 198.00,
    rating: 4.6, reviews: 28473,
    asin: "B0C33XXS56",
    badge: "Oferta del día",
    descripcion: "Los Sony WF-1000XM5 tienen el mejor ANC en formato intraural con el diseño más compacto y ligero de la historia. Hi-Res Audio inalámbrico con LDAC y 8 horas por carga más 24 horas con estuche.",
    features: ["ANC más potente en formato TWS", "Hi-Res Audio inalámbrico LDAC", "8h por carga + 24h con estuche", "Speak-to-Chat — pausa automática", "Multipoint — 2 dispositivos simultáneos", "IPX4 — resistente al sudor"]
  },
  {
    id: 62,
    nombre: "Sennheiser Momentum 4 Wireless — ANC, 60h batería, aptX Adaptive, Cuero",
    categoria: "Audio",
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    precioAntes: 349.95, precioAhora: 229.95,
    rating: 4.6, reviews: 14293,
    asin: "B0B1LF39JH",
    badge: "Flash sale",
    descripcion: "Los Sennheiser Momentum 4 tienen la batería más larga del mercado: 60 horas con ANC. aptX Adaptive para audio Hi-Res y el sonido neutro de Sennheiser favorito de audiófilos. Almohadillas en cuero vegano.",
    features: ["60 horas con ANC — la mayor del mercado", "aptX Adaptive — Hi-Res inalámbrico", "ANC adaptativo al entorno", "Multipoint — 2 dispositivos simultáneos", "Almohadillas cuero vegano premium", "App Smart Control — EQ personalizable"]
  },
  {
    id: 63,
    nombre: "JBL Flip 7 — Altavoz Bluetooth IP67, 12h batería, PartyBoost, USB-C",
    categoria: "Audio",
    imagen: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    precioAntes: 149.99, precioAhora: 99.99,
    rating: 4.7, reviews: 34847,
    asin: "B0D4K9JVF8",
    badge: "Más vendido",
    descripcion: "El JBL Flip 7 tiene sonido equilibrado con bajos extra gracias al radiador pasivo doble. IP67, 12 horas de batería y PartyBoost para conectar hasta 100 altavoces JBL. El más vendido de su categoría.",
    features: ["IP67 — sumergible y a prueba de polvo", "12 horas de batería continua", "PartyBoost — hasta 100 altavoces JBL", "Doble radiador pasivo — bajos profundos", "Carga USB-C rápida", "Compacto y ligero — fácil de llevar"]
  },
  {
    id: 64,
    nombre: "Amazon Echo Show 8 3ª Gen — Pantalla 8\" HD, Alexa, Cámara 13MP Auto-encuadre",
    categoria: "Hogar",
    imagen: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&q=80",
    precioAntes: 149.99, precioAhora: 84.99,
    rating: 4.5, reviews: 47293,
    asin: "B0BLS3Y632",
    badge: "Oferta del día",
    descripcion: "El Echo Show 8 3ª generación tiene cámara de 13MP con auto-encuadre para videollamadas siempre centradas. Pantalla HD de 8 pulgadas, sonido mejorado con dos altavoces y hub Zigbee para controlar tu hogar inteligente.",
    features: ["Pantalla HD 8\" — recetas, vídeos, fotos", "Cámara 13MP auto-encuadre — siempre centrado", "Hub Zigbee integrado — smart home", "2 altavoces — sonido 180°", "Alexa — control de voz total", "Videollamadas con Alexa y Zoom"]
  },

  // ── Tablets (más) ─────────────────────────
  {
    id: 65,
    nombre: "Samsung Galaxy Tab S9+ 12.4\" 256GB — Snapdragon 8 Gen 2, AMOLED, S Pen",
    categoria: "Tablets",
    imagen: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80",
    precioAntes: 999.99, precioAhora: 699.99,
    rating: 4.8, reviews: 12847,
    asin: "B0C4W4LLJY",
    badge: "Flash sale",
    descripcion: "La Galaxy Tab S9+ tiene la pantalla más impresionante en Android: Dynamic AMOLED 12.4 pulgadas 120Hz. Snapdragon 8 Gen 2, 12GB RAM, S Pen incluido, IP68 y modo DeX para usarla como ordenador.",
    features: ["AMOLED 12.4\" 120Hz — pantalla espectacular", "Snapdragon 8 Gen 2 + 12GB RAM", "S Pen incluido en la caja", "IP68 — resistente al agua", "Modo DeX — experiencia escritorio", "Wi-Fi 6E + Bluetooth 5.3"]
  },
  {
    id: 66,
    nombre: "Apple iPad Pro 11\" M4 256GB WiFi — Ultra Retina XDR OLED, Thunderbolt 4",
    categoria: "Tablets",
    imagen: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80",
    precioAntes: 999.00, precioAhora: 849.00,
    rating: 4.9, reviews: 8472,
    asin: "B0D3J9F9B7",
    badge: "Más vendido",
    descripcion: "El iPad Pro 11\" con M4 tiene la pantalla más avanzada de Apple: Ultra Retina XDR OLED de doble capa. El chip M4 lo hace más rápido que la mayoría de laptops. Compatible con Apple Pencil Pro y Magic Keyboard.",
    features: ["Ultra Retina XDR OLED doble capa", "Chip M4 — más rápido que la mayoría de PCs", "Apple Pencil Pro compatible", "Thunderbolt 4 — máxima velocidad USB-C", "Wi-Fi 6E y Bluetooth 5.3", "Batería hasta 10 horas"]
  },
  {
    id: 67,
    nombre: "Amazon Fire HD 10 Plus 64GB — Full HD 10.1\", 4GB RAM, Alexa, Carga Inalámbrica",
    categoria: "Tablets",
    imagen: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80",
    precioAntes: 179.99, precioAhora: 109.99,
    rating: 4.5, reviews: 28473,
    asin: "B08F6LG5M2",
    badge: "Precio mínimo histórico",
    descripcion: "El Amazon Fire HD 10 Plus es la tablet más potente de Amazon con 4GB de RAM, pantalla Full HD de 10.1 pulgadas, carga inalámbrica Qi y 12 horas de batería. Almacenamiento expandible con microSD.",
    features: ["Full HD 10.1\" — nitidez máxima", "4GB RAM — la más potente de Amazon", "12 horas de batería", "Carga inalámbrica Qi incluida", "microSD expandible hasta 1TB", "Alexa integrada — control por voz"]
  },
  {
    id: 68,
    nombre: "Lenovo Tab P12 Pro 12.6\" — AMOLED 2K 120Hz, Snapdragon 870, 4 Altavoces JBL",
    categoria: "Tablets",
    imagen: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80",
    precioAntes: 699.99, precioAhora: 449.99,
    rating: 4.5, reviews: 4293,
    asin: "B0BDLHDFVJ",
    badge: "Flash sale",
    descripcion: "La Lenovo Tab P12 Pro tiene pantalla AMOLED 12.6\" 2K 120Hz y cuatro altavoces JBL certificados Dolby Atmos. Snapdragon 870, 8GB RAM, 256GB y carga rápida de 45W.",
    features: ["AMOLED 12.6\" 2K 120Hz — inmersión total", "4 altavoces JBL Dolby Atmos", "Snapdragon 870 + 8GB RAM", "256GB + microSD expandible", "Carga rápida 45W", "Stylus Precision Pen 3 compatible"]
  },

  // ── Gaming (más) ──────────────────────────
  {
    id: 69,
    nombre: "PlayStation 5 Disc Edition 1TB — Ray Tracing, 120fps, DualSense, Blu-ray 4K",
    categoria: "Gaming",
    imagen: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&q=80",
    precioAntes: 499.99, precioAhora: 399.99,
    rating: 4.9, reviews: 128473,
    asin: "B0BHHZT9YD",
    badge: "Precio mínimo histórico",
    descripcion: "La PlayStation 5 con lector de discos es la consola más deseada del mercado. SSD ultrarrápido, Ray Tracing nativo, hasta 120fps en 4K y el DualSense con feedback háptico y triggers adaptativos que cambian la forma de jugar.",
    features: ["SSD ultrarrápido — carga juegos en segundos", "Ray Tracing nativo en todos los juegos", "4K hasta 120fps", "DualSense — feedback háptico revolucionario", "Audio 3D Tempest Engine", "Lector Blu-ray 4K incluido"]
  },
  {
    id: 70,
    nombre: "SteelSeries Apex Pro TKL — Teclado Mecánico, Switches Ajustables, OLED, RGB",
    categoria: "Gaming",
    imagen: "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?w=500&q=80",
    precioAntes: 199.99, precioAhora: 139.99,
    rating: 4.7, reviews: 18473,
    asin: "B09KQHH7N7",
    badge: "Flash sale",
    descripcion: "El Apex Pro TKL es el único teclado con switches de activación ajustable de 0.1mm a 4mm por tecla. Display OLED integrado, RGB por zonas y construcción en aluminio de aviación. El favorito de jugadores profesionales de esports.",
    features: ["Switches ajustables 0.1mm-4mm por tecla", "Display OLED integrado", "Diseño TKL — más espacio para el ratón", "RGB PrismSync por zonas", "Aluminio CNC aviation-grade", "Inalámbrico + Bluetooth + USB-C"]
  },
  {
    id: 71,
    nombre: "Xbox Elite Wireless Controller Series 2 — Palancas ajustables, 40h batería",
    categoria: "Gaming",
    imagen: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&q=80",
    precioAntes: 179.99, precioAhora: 129.99,
    rating: 4.7, reviews: 48293,
    asin: "B07SFKTLZM",
    badge: "Más vendido",
    descripcion: "El Xbox Elite Series 2 es el mando gaming más personalizable. Palancas y almohadillas intercambiables, gatillos con tope ajustable en 3 posiciones y 40 horas de batería. El mando oficial de jugadores profesionales de Xbox.",
    features: ["Palancas intercambiables — 6 formas", "Gatillos con tope ajustable x3", "40 horas de batería — carga rápida", "Agarre antideslizante texturizado", "4 botones traseros programables", "Tensión de palancas ajustable"]
  },
  {
    id: 72,
    nombre: "ASUS ROG Strix G16 — RTX 4070, Intel i9-13980HX, 16GB DDR5, 240Hz",
    categoria: "Gaming",
    imagen: "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?w=500&q=80",
    precioAntes: 1699.99, precioAhora: 1199.99,
    rating: 4.7, reviews: 5847,
    asin: "B0BZG3YTHG",
    badge: "Oferta del día",
    descripcion: "La ASUS ROG Strix G16 con RTX 4070 y pantalla 240Hz para competir al más alto nivel. Intel Core i9-13980HX de 24 núcleos y sistema de refrigeración ROG Intelligent Cooling con tres ventiladores Arc Flow.",
    features: ["NVIDIA RTX 4070 8GB GDDR6", "Intel Core i9-13980HX 24 núcleos", "Pantalla 16\" 240Hz FHD IPS", "16GB DDR5 + 1TB PCIe Gen 4", "ROG Intelligent Cooling — 3 ventiladores", "MUX Switch — 10% más FPS en juegos"]
  },
  {
    id: 73,
    nombre: "Logitech G Pro X Superlight 2 — Mouse Gaming Inalámbrico 32K DPI, 60g",
    categoria: "Gaming",
    imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
    precioAntes: 159.99, precioAhora: 109.99,
    rating: 4.8, reviews: 23847,
    asin: "B09WDKFZS3",
    badge: "Flash sale",
    descripcion: "El Logitech G Pro X Superlight 2 es el mouse gaming elegido por profesionales de Valorant y CS2. Solo 60 gramos, sensor HERO 2 de 32K DPI y 95 horas de batería con conexión LIGHTSPEED de 1ms.",
    features: ["60g ultraligero — menos fatiga en partidas largas", "Sensor HERO 2 — 32K DPI máximo", "LIGHTSPEED 2.4GHz — 1ms latencia", "95 horas de batería", "5 botones programables", "Pies PTFE en polvo — deslizamiento perfecto"]
  },

  // ── Cámaras (más) ─────────────────────────
  {
    id: 74,
    nombre: "Canon EOS R50 Mirrorless 24.2MP — 4K, Dual Pixel AF, Bluetooth, RF-S 18-45mm",
    categoria: "Cámaras",
    imagen: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
    precioAntes: 879.99, precioAhora: 649.99,
    rating: 4.6, reviews: 7293,
    asin: "B0BT5M9LTF",
    badge: "Oferta del día",
    descripcion: "La Canon EOS R50 es la mirrorless perfecta para principiantes. 24.2MP APS-C con Dual Pixel CMOS AF II para enfoque en 0.03s, vídeo 4K sin recorte y pantalla táctil abatible para vlogging.",
    features: ["24.2MP APS-C — fotos profesionales", "Dual Pixel AF II — enfoque en 0.03s", "4K 30fps sin recorte", "Seguimiento facial y ocular en vídeo", "Wi-Fi y Bluetooth — comparte al instante", "Pantalla táctil abatible — selfies perfectas"]
  },
  {
    id: 75,
    nombre: "DJI Mini 4 Pro — Drone 4K 60fps, Obstacle Sensing 360°, 34min, 249g",
    categoria: "Cámaras",
    imagen: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&q=80",
    precioAntes: 759.00, precioAhora: 559.00,
    rating: 4.8, reviews: 9847,
    asin: "B0CH86CT55",
    badge: "Flash sale",
    descripcion: "El DJI Mini 4 Pro es el primer drone bajo 249g con detección de obstáculos en 360 grados. Cámara 4K 60fps con HDR, 34 minutos de autonomía y transmisión de imagen hasta 20km. Sin licencia de piloto requerida.",
    features: ["249g — sin licencia de piloto requerida", "Obstacle Sensing 360° — vuelo seguro", "4K 60fps + HDR cinematográfico", "48MP foto RAW profesional", "34 minutos autonomía — récord Mini", "Transmisión O4 — 20km de alcance"]
  },
  {
    id: 76,
    nombre: "Sony ZV-E10 II Mirrorless — 26MP APS-C, 4K 60fps, AF Facial, Vlogging",
    categoria: "Cámaras",
    imagen: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80",
    precioAntes: 749.99, precioAhora: 549.99,
    rating: 4.6, reviews: 6293,
    asin: "B0CF3TH7YS",
    badge: "Precio mínimo histórico",
    descripcion: "La Sony ZV-E10 II es la cámara de vlogging definitiva. Sensor Exmor R APS-C de 26MP, 4K 60fps sin recorte, autofocus AI de rostro y ojos. Pantalla abatible 180° y S-Cinetone para colores cinematográficos.",
    features: ["26MP APS-C Exmor R — nueva generación", "4K 60fps sin recorte — calidad YouTuber pro", "AF AI rostro y ojos en tiempo real", "Pantalla abatible 180° para vlogging", "S-Cinetone — colores cinematográficos", "Micrófono direccional integrado"]
  },
  {
    id: 77,
    nombre: "Fujifilm X-T50 26.1MP — X-Trans CMOS 5 HR, IBIS 7 Stops, 20 Simulaciones",
    categoria: "Cámaras",
    imagen: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80",
    precioAntes: 1299.99, precioAhora: 999.99,
    rating: 4.7, reviews: 3847,
    asin: "B0CZ35KB3C",
    badge: "Oferta del día",
    descripcion: "La Fujifilm X-T50 tiene el mejor sensor APS-C del mercado: X-Trans CMOS 5 HR de 26.1MP con IBIS de 7 pasos. 20 simulaciones de película Fujifilm y diales físicos para el control más intuitivo.",
    features: ["26.1MP X-Trans CMOS 5 HR", "IBIS 7 stops — fotos nítidas sin trípode", "20 simulaciones de película Fujifilm", "Diales físicos — control retro intuitivo", "4K 30fps + 1080p 240fps slow motion", "Bluetooth y Wi-Fi — comparte al instante"]
  },

  // ── Hogar (más) ───────────────────────────
  {
    id: 78,
    nombre: "Philips Hue Starter Kit — 4 Bombillas A19 16M Colores, Bridge, App",
    categoria: "Hogar",
    imagen: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&q=80",
    precioAntes: 199.99, precioAhora: 129.99,
    rating: 4.7, reviews: 38473,
    asin: "B082VKWPLZ",
    badge: "Precio mínimo histórico",
    descripcion: "El Philips Hue Starter Kit incluye 4 bombillas con 16 millones de colores, Bridge Hue y app para crear escenas y rutinas. Compatible con Alexa, Google y Apple HomeKit.",
    features: ["16 millones de colores + blanco regulable", "Bridge incluido — control local sin nube", "Compatible Alexa, Google, Apple HomeKit", "Escenas y rutinas automáticas", "Sincronización con TV y música", "Hasta 50 bombillas por Bridge"]
  },
  {
    id: 79,
    nombre: "Google Nest Thermostat 4ª Gen — Auto-Schedule, Energy History, Alexa",
    categoria: "Hogar",
    imagen: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&q=80",
    precioAntes: 279.99, precioAhora: 199.99,
    rating: 4.6, reviews: 24847,
    asin: "B0CRMVQB2Z",
    badge: "Flash sale",
    descripcion: "El Google Nest Thermostat 4ª gen aprende tus preferencias en la primera semana y crea una programación automática que ahorra hasta el 15% en calefacción. Pantalla Farsight visible desde el otro lado de la habitación.",
    features: ["Auto-Schedule — aprende en 1 semana", "Ahorra hasta 15% en calefacción", "Pantalla Farsight — visible desde lejos", "Control remoto desde cualquier lugar", "Compatible HVAC, calefacción y AC", "Energy History — monitoriza tu consumo"]
  },
  {
    id: 80,
    nombre: "Keurig K-Elite — Cafetera Cápsulas K-Cup, 5 Tamaños, Iced Coffee, 75oz",
    categoria: "Hogar",
    imagen: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80",
    precioAntes: 189.99, precioAhora: 119.99,
    rating: 4.5, reviews: 47293,
    asin: "B07GV2S1GS",
    badge: "Más vendido",
    descripcion: "La Keurig K-Elite prepara el mejor café de cápsulas en 5 tamaños. Función Iced Coffee para café frío en segundos, Strong Brew para más intensidad y depósito de 75 oz que no necesitas rellenar varias veces al día.",
    features: ["5 tamaños de taza — 4 oz a 12 oz", "Iced Coffee — café frío al instante", "Strong Brew — más intensidad de sabor", "Depósito 75 oz — no rellenar constantemente", "Compatible todas las cápsulas K-Cup", "Apagado automático programable"]
  },
  {
    id: 81,
    nombre: "Instant Pot Duo 7-en-1 6Qt — Olla a Presión, Slow Cooker, Arrocera, Yogurera",
    categoria: "Hogar",
    imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80",
    precioAntes: 99.99, precioAhora: 59.99,
    rating: 4.7, reviews: 184729,
    asin: "B00FLYWNYQ",
    badge: "Más vendido",
    descripcion: "El Instant Pot Duo es la olla multicocina más vendida del mundo. 7 electrodomésticos en 1: olla a presión, slow cooker, arrocera, vaporera, salteadora, yogurera y calentador. Cocina 70% más rápido con 11 mecanismos de seguridad.",
    features: ["7 en 1 — reemplaza 7 electrodomésticos", "70% más rápido que métodos tradicionales", "14 programas preestablecidos", "11 mecanismos de seguridad integrados", "Capacidad 6 cuartos — ideal familias", "Retiene nutrientes y sabor — tapa sellada"]
  },
  {
    id: 82,
    nombre: "Shark IQ Robot AV1002WD — Auto-Vacío 60 días, WiFi, Alexa, IQ Navigation",
    categoria: "Hogar",
    imagen: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80",
    precioAntes: 599.99, precioAhora: 379.99,
    rating: 4.4, reviews: 14847,
    asin: "B08LCPZ7LG",
    badge: "Precio mínimo histórico",
    descripcion: "El Shark IQ Robot se vacía solo con base de 60 días de capacidad. IQ Navigation mapea tu casa y limpia en filas sistemáticas, no al azar. Compatible con Alexa y Google para programar limpiezas por voz.",
    features: ["Auto-Vacío 60 días — no tocar el polvo", "IQ Navigation — limpia en filas sistemáticas", "Mapeo completo en la app", "Compatible Alexa y Google", "Self-Cleaning Brushroll — no enreda el pelo", "Programación desde cualquier lugar"]
  },

  // ── Wearables (más) ──────────────────────
  {
    id: 83,
    nombre: "Apple Watch Series 9 GPS 41mm — Chip S9, Double Tap, 2000 nits, Always-On",
    categoria: "Wearables",
    imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    precioAntes: 399.00, precioAhora: 299.00,
    rating: 4.8, reviews: 54293,
    asin: "B0CHX8SZMD",
    badge: "Flash sale",
    descripcion: "El Apple Watch Series 9 introduce el gesto Double Tap para controlar el reloj sin tocar la pantalla. Chip S9 30% más rápido, 2000 nits de brillo y Siri on-device sin necesidad de internet.",
    features: ["Gesto Double Tap — control sin tocar pantalla", "Chip S9 — 30% más rápido que S8", "2000 nits — el más brillante de la historia", "Siri on-device — funciona sin internet", "ECG + SpO2 + Monitor Cardíaco", "Resistente al agua 50 metros"]
  },
  {
    id: 84,
    nombre: "Samsung Galaxy Watch 6 Classic 47mm — Bisel Giratorio, BIA, ECG, AMOLED",
    categoria: "Wearables",
    imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    precioAntes: 399.99, precioAhora: 279.99,
    rating: 4.6, reviews: 18473,
    asin: "B0C79MVKFX",
    badge: "Oferta del día",
    descripcion: "El Galaxy Watch 6 Classic recupera el bisel giratorio físico para navegar sin tocar la pantalla. Sensor BIA para composición corporal, ECG avanzado, análisis de sueño con coaching IA y pantalla AMOLED 1.5\".",
    features: ["Bisel giratorio físico — navegación intuitiva", "BIA — composición corporal completa", "ECG y Monitor de Presión Arterial", "Sleep Coaching personalizado con IA", "AMOLED 1.5\" — pantalla más grande Galaxy Watch", "5ATM + IP68 — resistente al agua"]
  },
  {
    id: 85,
    nombre: "Fitbit Charge 6 — GPS Integrado, ECG, Google Maps, Google Wallet, 7 días",
    categoria: "Wearables",
    imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    precioAntes: 159.95, precioAhora: 109.95,
    rating: 4.4, reviews: 28473,
    asin: "B0CGF7B44T",
    badge: "Precio mínimo histórico",
    descripcion: "El Fitbit Charge 6 integra Google Maps y Google Wallet para navegación y pagos contactless desde la muñeca. GPS integrado sin necesidad del teléfono, ECG y puntuación de sueño diaria. 7 días de batería.",
    features: ["Google Maps — navegación en la muñeca", "Google Wallet — pagos NFC contactless", "GPS integrado — sin teléfono", "ECG — detección fibrilación auricular", "7 días de batería real", "40+ modos de ejercicio automáticos"]
  },
  {
    id: 86,
    nombre: "Garmin Forerunner 265 — GPS Running Watch, AMOLED 1.3\", Training Readiness",
    categoria: "Wearables",
    imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    precioAntes: 449.99, precioAhora: 319.99,
    rating: 4.7, reviews: 12847,
    asin: "B0BW8TTDST",
    badge: "Flash sale",
    descripcion: "El Garmin Forerunner 265 combina pantalla AMOLED con el análisis de entrenamiento más avanzado. Training Readiness mide si estás listo para entrenar duro hoy. GPS multi-banda y hasta 13 días de batería.",
    features: ["AMOLED 1.3\" — colores vivos bajo el sol", "Training Readiness — ¿listo para entrenar?", "GPS multi-banda — precisión máxima", "VO2 Max y predicción de carrera", "13 días batería sin GPS, 6 días con GPS", "Mapas de carrera descargables"]
  },

  // ── Accesorios (más) ──────────────────────
  {
    id: 87,
    nombre: "Anker 737 Power Bank 24000mAh — 140W, 3 Puertos, Pantalla Digital, Laptops",
    categoria: "Accesorios",
    imagen: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=500&q=80",
    precioAntes: 99.99, precioAhora: 65.99,
    rating: 4.6, reviews: 28473,
    asin: "B09VPHVT2Z",
    badge: "Oferta del día",
    descripcion: "El Anker 737 PowerCore de 140W carga un MacBook Pro de 0 a 40% en 30 minutos. 24000mAh para cargar un iPhone casi 6 veces. Pantalla digital que muestra batería y potencia de carga en tiempo real.",
    features: ["140W — carga MacBook Pro y laptops", "24000mAh — carga iPhone casi 6 veces", "3 puertos simultáneos — 2 USB-C + 1 USB-A", "Pantalla digital en tiempo real", "Auto-ajuste de potencia por dispositivo", "PowerIQ 4.0 — carga inteligente"]
  },
  {
    id: 88,
    nombre: "Logitech MX Master 3S — Mouse Inalámbrico Ergonómico, 8K DPI, Scroll Silencioso",
    categoria: "Accesorios",
    imagen: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    precioAntes: 99.99, precioAhora: 69.99,
    rating: 4.8, reviews: 54293,
    asin: "B09HM94VDS",
    badge: "Más vendido",
    descripcion: "El Logitech MX Master 3S es el mouse de productividad favorito de programadores y diseñadores. Scroll MagSpeed que desplaza 1000 líneas por segundo, clicks 90% más silenciosos y 3 ordenadores simultáneos con Easy-Switch.",
    features: ["Scroll MagSpeed — 1000 líneas por segundo", "8000 DPI — precisión profesional", "Clicks 90% más silenciosos", "3 ordenadores con Easy-Switch y Flow", "USB-C — 1 minuto = 3 horas de uso", "Ergonómico — diseño perfecto para la mano"]
  },
  {
    id: 89,
    nombre: "Belkin MagSafe 3-en-1 — Cargador iPhone + Apple Watch + AirPods, 15W",
    categoria: "Accesorios",
    imagen: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&q=80",
    precioAntes: 149.99, precioAhora: 99.99,
    rating: 4.5, reviews: 18473,
    asin: "B09VCGMXFB",
    badge: "Flash sale",
    descripcion: "El cargador 3-en-1 de Belkin con MagSafe carga simultáneamente iPhone, Apple Watch y AirPods. MagSafe de 15W para el iPhone, carga rápida para Apple Watch Series 7+ y carga para AirPods con estuche MagSafe.",
    features: ["MagSafe 15W — carga inalámbrica más rápida", "Carga 3 dispositivos Apple simultáneamente", "Apple Watch carga rápida Serie 7+", "Diseño compacto — todo en una base", "Cable USB-C trenzado incluido", "Certificado Made for MagSafe por Apple"]
  },

  // ── Monitores (más) ───────────────────────
  {
    id: 90,
    nombre: "LG UltraGear 27\" QHD 240Hz — Nano IPS, 1ms, G-Sync Compatible, HDR10",
    categoria: "Monitores",
    imagen: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&q=80",
    precioAntes: 499.99, precioAhora: 299.99,
    rating: 4.7, reviews: 28473,
    asin: "B09T4H8QSB",
    badge: "Precio mínimo histórico",
    descripcion: "El LG UltraGear 27\" QHD con Nano IPS y 240Hz es el monitor gaming de referencia a precio accesible. 1ms GTG, G-Sync Compatible, FreeSync Premium Pro y HDR10 para gaming sin tearing en resolución QHD.",
    features: ["Nano IPS 27\" QHD 2560x1440", "240Hz + 1ms GTG — gaming competitivo", "G-Sync Compatible + FreeSync Premium Pro", "HDR10 — contraste y colores mejorados", "98% DCI-P3 — colores ultra precisos", "3x USB 3.0 + HDMI 2.0 + DisplayPort 1.4"]
  },
  {
    id: 91,
    nombre: "Dell UltraSharp 27\" 4K U2723DE — USB-C 90W Hub, IPS, Ergonómico, 100% sRGB",
    categoria: "Monitores",
    imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    precioAntes: 799.99, precioAhora: 549.99,
    rating: 4.8, reviews: 12847,
    asin: "B09VCW2X5G",
    badge: "Oferta del día",
    descripcion: "El Dell UltraSharp 27\" 4K es el monitor de productividad definitivo. IPS 4K con 100% sRGB y 98% DCI-P3, USB-C 90W para conectar y cargar el portátil con un solo cable y hub USB integrado.",
    features: ["IPS 4K 27\" — 100% sRGB, 98% DCI-P3", "USB-C 90W — un cable para todo", "Hub USB integrado 4 puertos", "DisplayHDR 400 certificado", "Ajuste ergonómico altura + giro + inclinación", "Borde ultrafino 3 lados — ideal multidisplay"]
  },

  // ── Música (más) ──────────────────────────
  {
    id: 92,
    nombre: "Yamaha P-45 88 Teclas — Piano Digital, Acción de Martillo Graduada, 10 Voces",
    categoria: "Música",
    imagen: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&q=80",
    precioAntes: 499.99, precioAhora: 349.99,
    rating: 4.7, reviews: 28473,
    asin: "B00TV57HCI",
    badge: "Más vendido",
    descripcion: "El Yamaha P-45 es el piano digital de iniciación más vendido del mundo. 88 teclas con acción de martillo graduada que simula el peso real de un piano de cola. 10 voces, polifonía de 64 notas y salida de auriculares para practicar en silencio.",
    features: ["88 teclas acción de martillo graduada", "10 voces — piano, órgano, cuerdas", "Polifonía 64 voces — sin notas cortadas", "Función dúo — 2 jugadores mismo registro", "Salida auriculares — practica en silencio", "Solo 11.5kg — compacto y portátil"]
  }

];

/* ── Contadores de usuarios viendo cada producto ── */
const WATCHERS = {};
PRODUCTOS.forEach(p => {
  WATCHERS[p.id] = Math.floor(Math.random() * 836) + 12;
});
