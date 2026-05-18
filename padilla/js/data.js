/* ===========================
   DATA — MENU D' PADILLA FOOD TRUCK
   Prices in USD – Paterson, NJ
=========================== */

const MENU = [
  // ---- ESPECIAL: YAROA ----
  {
    id: 'yaroa', name: 'YAROA', cat: 'especial', emoji: '🍟', badge: '⭐ Signature',
    desc: "D' Padilla Yaroa. Crispy fries loaded with meat, melted cheese & homemade sauces.",
    price: null, isYaroa: true,
    image: 'menu/yaroa.jpg',
    sizes: { Small: null, Medium: null, Large: null },
    ingredients: ['Chicken', 'Pork', 'Mixed'],
    priceTable: {
      Chicken: { Small: 9.00,  Medium: 13.00, Large: 17.00 },
      Pork:    { Small: 11.00, Medium: 15.00, Large: 20.00 },
      Mixed:   { Small: 11.00, Medium: 15.00, Large: 20.00 },
    },
    imageTable: {
      Chicken: 'menu/pollo.png',
      Pork:    'menu/pierna.png',
      Mixed:   'menu/mixta.png'
    }
  },
  // ---- COMIDA ----
  { id:'hamburguesa', name:'Burger',           desc:'Artisan bun, 100% beef patty, American cheese, fresh veggies & special house sauces.',  price:8.00,  cat:'comida',  emoji:'🍔', badge:'🔥 Popular', image: 'menu/hamburguesa.jpg' },
  { id:'hotdog',      name:'Hot Dog',           desc:'Smoked sausage on a soft bun with ketchup, mustard, onion & shredded potatoes.',        price:6.00,  cat:'comida',  emoji:'🌭', image: 'menu/hot_dog.jpg' },
  { id:'bollo-yuca',  name:'Yuca Bollo',        desc:'Crispy yuca roll stuffed with well-seasoned ground beef, Dominican style.',             price:4.00,  cat:'comida',  emoji:'🫓', image: 'menu/Bollo.png' },
  { id:'quesadilla',  name:'Quesadilla',        desc:'Flour tortilla with melted cheese and your choice of filling. Crispy & delicious.',     price:10.00, cat:'comida',  emoji:'🫔', image: 'menu/Quesadilla.jpg' },
  { id:'taco',        name:'Taco',              desc:'Corn tortilla with seasoned meat, pico de gallo, sour cream & shredded cheese.',        price:9.00,  cat:'comida',  emoji:'🌮', image: 'menu/Taco.jpg' },
  // ---- SNACKS ----
  { id:'quipe',       name:'Quipe',             desc:'Dominican-Arab wheat dumpling stuffed with herbed ground beef. A true NJ street classic.', price:3.50, cat:'snacks', emoji:'🥟', image: 'menu/Quipe.jpg' },
  { id:'salchicha',   name:'Fried Sausage',     desc:'Golden fried sausage served with dipping sauces.',                                      price:3.00,  cat:'snacks',  emoji:'🌭', image: 'menu/images (1).jpg' },
  { id:'tostada',     name:'Ham & Cheese Toast',desc:'Crispy toast with ham & melted cheese. Simple, satisfying, delicious.',                 price:3.00,  cat:'snacks',  emoji:'🥪', image: 'menu/Tostada.jpg' },
  { id:'empanada',    name:'Chicken Empanada',  desc:'Fried dough stuffed with juicy, well-seasoned chicken.',                               price:4.50,  cat:'snacks',  emoji:'🥟', badge:'❤️ Fav', image: 'menu/Empanada.jpg' },
  { id:'papas',       name:'Fries',             desc:'Crispy golden fries, seasoned to perfection. Perfect as a side.',                      price:5.00,  cat:'snacks',  emoji:'🍟', image: 'menu/papas.png' },
  { id:'ensalada',    name:'Fresh Salad',       desc:'Garden-fresh veggie mix with our special house dressing.',                             price:7.00,  cat:'snacks',  emoji:'🥗', image: 'menu/Ensalada.jpg' },
  // ---- JUGOS ----
  { id:'jugo-chinola',   name:'Passion Fruit Juice', desc:'All-natural maracuya, refreshing & packed with vitamin C.',       price:4.00, cat:'bebidas', emoji:'🧃', badge:'🍹 Fresh', image: 'menu/chinola.png' },
  { id:'jugo-limon',     name:'Lemonade',             desc:'Fresh-squeezed cold lemonade, perfect for a hot day.',            price:4.00, cat:'bebidas', emoji:'🍋', image: 'menu/limon.png' },
  { id:'jugo-avena',     name:'Oatmeal Drink',        desc:'Creamy and nutritious, a beloved Dominican traditional drink.',   price:4.00, cat:'bebidas', emoji:'🥛', image: 'menu/avena.png' },
  { id:'jugo-sandia',    name:'Watermelon Juice',     desc:'Sweet natural watermelon, ultra refreshing.',                    price:4.00, cat:'bebidas', emoji:'🍉', image: 'menu/sandia.png' },
  { id:'jugo-tamarindo', name:'Tamarind Juice',       desc:'Sweet & tangy tamarind, unmistakable Dominican flavor.',         price:4.00, cat:'bebidas', emoji:'🫙', image: 'menu/tamarindo.png' },
  // ---- REFRESCOS / AGUA ----
  { id:'agua',        name:'Water',             desc:'Cold refreshing bottled water.',                                        price:1.50, cat:'bebidas', emoji:'💧', image: 'menu/agua.jpg' },
  { id:'ref-cola',    name:'Coca-Cola',         desc:'Ice cold Coke.',                                                       price:2.50, cat:'bebidas', emoji:'🥤', image: 'menu/coca_cola.jpg' },
  { id:'ref-sprite',  name:'Sprite',            desc:'Ice cold Sprite.',                                                     price:2.50, cat:'bebidas', emoji:'🥤', image: 'menu/sprite.jpg' },
  { id:'ref-naranja', name:'Orange Soda',       desc:'Ice cold orange soda.',                                                price:2.50, cat:'bebidas', emoji:'🥤', image: 'menu/naranja.jpg' },
  { id:'ref-uva',     name:'Grape Soda',        desc:'Ice cold grape soda.',                                                 price:2.50, cat:'bebidas', emoji:'🥤', image: 'menu/uva.jpg' },
];
