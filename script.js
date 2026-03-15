/* ============================================
   Galaxy Gum Cigarettes – JavaScript
   ============================================ */

// ===== WEBHOOK URL =====
// Trage hier deine Discord Webhook URL ein:
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1482414509325811867/p-k3SxxNPU83c8v_j-BklbBbQQ70kwR_eXb-o3UuumDLZpQ90s6A8geS6Wiei8XHiYMR';

// ===== DATA =====
const BRANDS = {
  nebula: {
    name: '15k Vape',
    emoji: '',
    tagline: 'Gute Qualität',
    color: '#9b4dff',
    gradient: 'linear-gradient(135deg, #2d1b69, #1a0a3e)',
    originalPrice: '€20',
    salePrice: '€15',
    priceNote: 'pro Stück · inkl. MwSt.',
    flavors: {
      watermelon_ice: { name: 'Watermelon Ice', emoji: '🍉', desc: 'Erfrischende Wassermelone mit eisigem Kick' },
      banana_ice: { name: 'Banana Ice', emoji: '🍌', desc: 'Cremige Banane mit kühler Frische' },
      strawberry_ice: { name: 'Strawberry Ice', emoji: '🍓', desc: 'Süße Erdbeere mit eisigem Finish' },
      strawberry_kiwi: { name: 'Strawberry Kiwi', emoji: '🥝', desc: 'Fruchtige Erdbeere trifft exotische Kiwi' },
      grape_ice: { name: 'Grape Ice', emoji: '🍇', desc: 'Saftige Traube mit eiskaltem Aroma' },
      strawberry_red_bull: { name: 'Strawberry Red Bull', emoji: '⚡', desc: 'Erdbeere mit Energy-Drink Geschmack' },
      berry_lemonade: { name: 'Berry Lemonade', emoji: '🫐', desc: 'Beerenmix mit spritziger Limonade' },
      blue_razz_ice: { name: 'Blue Razz Ice', emoji: '💙', desc: 'Blaue Himbeere mit eisiger Kühle' },
      blueberry_cherry_cranberry: { name: 'Blueberry Cherry Cranberry', emoji: '🍒', desc: 'Dreifache Beeren-Power' },
      mixed_berry: { name: 'Mixed Berry', emoji: '🫐', desc: 'Der ultimative Beerenmix' }
    }
  },
  stardust: {
    name: 'Zsnus',
    emoji: '',
    tagline: 'Klassiker',
    color: '#4d8dff',
    gradient: 'linear-gradient(135deg, #1b3a69, #0a1e3e)',
    originalPrice: '€15',
    salePrice: '€11',
    priceNote: '5 Box · inkl. MwSt.',
    flavors: {
      citrus_9: { name: 'Citrus (Nic 9mg)', emoji: '🍋', desc: 'Frische Zitrus-Note mit 9mg Nikotin' },
      citrus_11: { name: 'Citrus (Nic 11mg)', emoji: '🍋', desc: 'Frische Zitrus-Note mit 11mg Nikotin' },
      lemon_spritz: { name: 'Lemon Spritz (Nic 6.5mg)', emoji: '🍸', desc: 'Spritzige Zitrone mit 6.5mg Nikotin' },
      fresh_mint: { name: 'Fresh Mint (Nic 6.5mg)', emoji: '🍃', desc: 'Frische Minze mit 6.5mg Nikotin' },
      apple_mint: { name: 'Apple Mint (Nic 9mg)', emoji: '🍏', desc: 'Apfel-Minze Kombination mit 9mg Nikotin' },
      exotic_mango: { name: 'Exotic Mango (Nic 9mg)', emoji: '🥭', desc: 'Exotische Mango mit 9mg Nikotin' },
      cool_mint: { name: 'Cool Mint (Nic 16.6mg)', emoji: '❄️', desc: 'Eiskalte Minze mit 16.6mg Nikotin' },
      icy_mint: { name: 'Icy Mint (Nic 12.5mg)', emoji: '🧊', desc: 'Eisige Minze mit 12.5mg Nikotin' },
      cool_watermelon: { name: 'Cool Watermelon (Nic 9mg)', emoji: '🍉', desc: 'Kühle Wassermelone mit 9mg Nikotin' },
      fizzy_cola: { name: 'Fizzy Cola (Nic 9mg)', emoji: '🥤', desc: 'Prickelnde Cola mit 9mg Nikotin' }
    }
  },
  special: {
    name: 'Strong Snus',
    emoji: '🔥',
    tagline: 'Angebot: 3 für 15€',
    color: '#ff3333',
    gradient: 'linear-gradient(135deg, #660000, #330000)',
    originalPrice: '€25.50',
    salePrice: '€8.50',
    priceNote: '1x = 8.50€ | 3x = 15.00€',
    flavors: {
      syx_cherry: { name: 'SYX Wild cherry 28.5mg [STRONG]', emoji: '🍒', desc: 'Starke Wildkirsche (28.5mg)' },
      klint_strawberry: { name: 'Klint Strawberry mini 8mg [STRONG]', emoji: '🍓', desc: 'Süße Erdbeere (8mg)' },
      pablo_blue_razz: { name: 'Pablo Exclusive Blue Rasberry 50mg [STRONG]', emoji: '🫐', desc: 'Intensive Blaue Himbeere (50mg)' }
    }
  },
  cosmic: {
    name: 'Böller',
    emoji: '',
    tagline: 'Laute Kraft',
    color: '#ff4da6',
    gradient: 'linear-gradient(135deg, #691b4a, #3e0a2a)',
    comingSoon: true,
    flavors: {}
  },
  aurora: {
    name: 'Ha3sh',
    emoji: '🌿',
    tagline: 'Frisch Angebaut',
    color: '#4dfff3',
    gradient: 'linear-gradient(135deg, #1b6960, #0a3e38)',
    originalPrice: '',
    salePrice: '€8.50',
    priceNote: '1x 1 Gramm',
    flavors: {
      pur: { name: 'Pur', emoji: '🌿', desc: '1 Gramm purer Genuss' },
      vor_gerollt: { name: 'Vor gerollt', emoji: '🚬', desc: 'Bereits vorgerollt für dich' }
    }
  }
};

// Prices are now per-brand (originalPrice / salePrice / priceNote)

// ===== STATE =====
let selectedBrand = null;
let selectedFlavor = null;

// ===== DOM REFS =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ===== STAR CANVAS =====
function initStars() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];
  const COUNT = 220;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random(),
        dAlpha: (Math.random() - 0.5) * 0.008,
        speed: Math.random() * 0.15 + 0.02
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.alpha += s.dAlpha;
      if (s.alpha <= 0.1 || s.alpha >= 1) s.dAlpha *= -1;
      s.y += s.speed;
      if (s.y > canvas.height + 5) { s.y = -5; s.x = Math.random() * canvas.width; }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,190,255,${s.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  createStars();
  draw();
  window.addEventListener('resize', () => { resize(); createStars(); });
}

// ===== RENDER FLAVOR CARDS DYNAMICALLY =====
function renderFlavors(brandKey) {
  const brand = BRANDS[brandKey];
  if (!brand) return;

  const grid = $('.flavors-grid');
  grid.innerHTML = '';

  Object.entries(brand.flavors).forEach(([key, flavor]) => {
    const card = document.createElement('div');
    card.className = 'flavor-card';
    card.dataset.flavor = key;
    card.innerHTML = `
      <span class="flavor-emoji">${flavor.emoji}</span>
      <h4>${flavor.name}</h4>
    `;
    card.addEventListener('click', () => onFlavorClick(key));
    grid.appendChild(card);
  });
}

// ===== BRAND SELECTION =====
function onBrandClick(key) {
  const brand = BRANDS[key];
  if (!brand || brand.comingSoon) return; // Coming soon – nicht klickbar

  selectedBrand = key;
  selectedFlavor = null;

  // highlight card
  $$('.brand-card').forEach(c => c.classList.remove('selected'));
  $(`.brand-card[data-brand="${key}"]`).classList.add('selected');

  // update steps
  updateSteps(1);

  // render brand-specific flavors
  renderFlavors(key);

  // show flavors
  const flavorSec = $('.flavor-section');
  flavorSec.classList.add('visible');

  // hide preview & order
  $('.preview-section').classList.remove('visible');
  $('.order-section').classList.remove('visible');
  $('.confirmation-section').classList.remove('visible');

  // smooth scroll
  setTimeout(() => flavorSec.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
}

function onFlavorClick(key) {
  selectedFlavor = key;

  // highlight
  $$('.flavor-card').forEach(c => c.classList.remove('selected'));
  $(`.flavor-card[data-flavor="${key}"]`).classList.add('selected');

  // update steps
  updateSteps(2);

  // build preview
  renderPreview();

  // show preview
  const prev = $('.preview-section');
  prev.classList.add('visible');

  // hide order & confirm
  $('.order-section').classList.remove('visible');
  $('.confirmation-section').classList.remove('visible');

  setTimeout(() => prev.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
}

// ===== STEPS UI =====
function updateSteps(activeIndex) {
  const dots = $$('.step-dot');
  const conns = $$('.step-connector');
  dots.forEach((d, i) => {
    d.classList.remove('active', 'completed');
    if (i < activeIndex) d.classList.add('completed');
    else if (i === activeIndex) d.classList.add('active');
  });
  conns.forEach((c, i) => {
    c.classList.toggle('active', i < activeIndex);
  });
}

// ===== GET CURRENT FLAVOR =====
function getCurrentFlavor() {
  if (!selectedBrand || !selectedFlavor) return null;
  return BRANDS[selectedBrand]?.flavors?.[selectedFlavor] || null;
}

// ===== RENDER PREVIEW =====
function renderPreview() {
  const brand = BRANDS[selectedBrand];
  const flavor = getCurrentFlavor();
  if (!brand || !flavor) return;

  // Visual pack
  const pack = $('.preview-product-visual');
  pack.querySelector('.pack-body').style.background = brand.gradient;
  pack.querySelector('.pack-glow').style.background = brand.color;
  pack.querySelector('.pack-emoji').textContent = flavor.emoji;
  pack.querySelector('.pack-brand').textContent = brand.name;
  pack.querySelector('.pack-brand').style.color = brand.color;
  pack.querySelector('.pack-flavor').textContent = flavor.name;

  const lines = pack.querySelectorAll('.pack-lines span');
  lines.forEach(l => l.style.background = brand.color);

  // Info
  $('.preview-info h2').textContent = `${brand.name} – ${flavor.name}`;
  $('.preview-info .preview-desc').textContent = `${flavor.desc}.`;

  // Sale price
  const priceEl = $('.preview-price');
  if (brand.originalPrice) {
    priceEl.innerHTML = `<span class="price-old">${brand.originalPrice}</span> ${brand.salePrice}`;
  } else {
    priceEl.textContent = brand.salePrice;
  }
  $('.preview-price-note').textContent = brand.priceNote;
}

// ===== ORDER FLOW =====
function openOrder() {
  const sec = $('.order-section');
  sec.classList.add('visible');

  // fill summary bar
  const brand = BRANDS[selectedBrand];
  const flavor = getCurrentFlavor();
  $('.order-summary-bar .summary-emoji').textContent = flavor.emoji;
  $('.order-summary-bar .summary-text strong').textContent = `${brand.name} – ${flavor.name}`;
  $('.order-summary-bar .summary-text span').textContent = brand.tagline;
  const summaryPriceEl = $('.order-summary-bar .summary-price');
  if (brand.originalPrice) {
    summaryPriceEl.innerHTML = `<span class="price-old">${brand.originalPrice}</span> ${brand.salePrice}`;
  } else {
    summaryPriceEl.textContent = brand.salePrice;
  }

  // update steps
  updateSteps(3);

  setTimeout(() => sec.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
}

// ===== PAYMENT TOGGLE =====
function selectPayment(method) {
  $$('.payment-option').forEach(o => o.classList.remove('selected'));
  $(`.payment-option[data-method="${method}"]`).classList.add('selected');

  $$('.payment-message').forEach(m => m.classList.remove('show'));
  $(`.payment-message.${method}`).classList.add('show');
}

// ===== FORM VALIDATION =====
function validateForm() {
  let valid = true;

  const fields = [
    { id: 'order-name', msg: 'Bitte gib deinen Namen ein.' },
    { id: 'order-email', msg: 'Bitte gib eine gültige E-Mail ein.', validator: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
    { id: 'order-address', msg: 'Bitte gib eine Adresse oder Treffpunkt ein.' }
  ];

  fields.forEach(({ id, msg, validator }) => {
    const input = $(`#${id}`);
    const errorEl = input.parentElement.querySelector('.error-msg');
    const val = input.value.trim();
    const isValid = validator ? validator(val) : val.length > 0;

    if (!isValid) {
      input.classList.add('error');
      errorEl.textContent = msg;
      errorEl.classList.add('show');
      valid = false;
    } else {
      input.classList.remove('error');
      errorEl.classList.remove('show');
    }
  });

  // payment must be selected
  const paymentSelected = $('.payment-option.selected');
  if (!paymentSelected) {
    valid = false;
  }

  return valid;
}

function submitOrder(e) {
  e.preventDefault();
  if (!validateForm()) return;

  // Collect order data
  const brand = BRANDS[selectedBrand];
  const flavor = getCurrentFlavor();
  const paymentMethod = $('.payment-option.selected')?.dataset.method || 'unbekannt';
  const orderData = {
    brand: brand.name,
    flavor: flavor.name,
    price: brand.salePrice,
    name: $('#order-name').value.trim(),
    email: $('#order-email').value.trim(),
    address: $('#order-address').value.trim(),
    payment: paymentMethod,
    timestamp: new Date().toLocaleString('de-DE')
  };

  // Send to webhook
  sendToWebhook(orderData);

  // Hide order, show confirmation
  $('.order-section').classList.remove('visible');
  const conf = $('.confirmation-section');
  conf.classList.add('visible');
  conf.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ===== WEBHOOK =====
async function sendToWebhook(data) {
  if (!WEBHOOK_URL || WEBHOOK_URL === 'DEINE_WEBHOOK_URL_HIER') {
    console.warn('Webhook URL nicht konfiguriert!');
    return;
  }

  const embed = {
    title: '🛒 Neue Bestellung!',
    color: 0x9b4dff,
    fields: [
      { name: '📦 Produkt', value: `${data.brand} – ${data.flavor}`, inline: true },
      { name: '💰 Preis', value: data.price, inline: true },
      { name: '💳 Zahlung', value: data.payment === 'paypal' ? 'PayPal' : 'Cash', inline: true },
      { name: '👤 Name', value: data.name, inline: true },
      { name: '📧 E-Mail', value: data.email, inline: true },
      { name: '📍 Adresse', value: data.address, inline: false }
    ],
    footer: { text: `Bestellt am ${data.timestamp}` },
    timestamp: new Date().toISOString()
  };

  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'Galaxy Shop',
        avatar_url: '',
        embeds: [embed]
      })
    });
  } catch (err) {
    console.error('Webhook Fehler:', err);
  }
}

function resetAll() {
  selectedBrand = null;
  selectedFlavor = null;

  $$('.brand-card').forEach(c => c.classList.remove('selected'));
  $('.flavors-grid').innerHTML = '';
  $('.flavor-section').classList.remove('visible');
  $('.preview-section').classList.remove('visible');
  $('.order-section').classList.remove('visible');
  $('.confirmation-section').classList.remove('visible');

  // Reset form
  $('form')?.reset();
  $$('.payment-option').forEach(o => o.classList.remove('selected'));
  $$('.payment-message').forEach(m => m.classList.remove('show'));
  $$('.error-msg').forEach(e => e.classList.remove('show'));
  $$('.form-group input, .form-group textarea').forEach(i => i.classList.remove('error'));

  updateSteps(0);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== GSAP ANIMATIONS =====
function initGSAP() {
  // Register plugin
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Reveal
    gsap.fromTo('.reveal-up', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'power3.out',
        delay: 0.2
      }
    );

    gsap.fromTo('.reveal-scale',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out', delay: 0.5 }
    );

    // Navbar Effect
    const navbar = document.getElementById('navbar');
    // We already have a glassmorphism base, but we can animate an extra shadow on scroll
    ScrollTrigger.create({
      start: 'top -50',
      end: 99999,
      toggleClass: {className: 'scrolled', targets: navbar}
    });

    // Animate section headings
    gsap.utils.toArray('.section-title').forEach(title => {
      gsap.fromTo(title,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        }
      );
    });

    // Stagger Brand Cards
    ScrollTrigger.batch('.brand-card', {
      onEnter: batch => gsap.fromTo(batch,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' }
      ),
      start: 'top 85%'
    });
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initStars();
  initGSAP();

  // Brand click
  $$('.brand-card').forEach(card => {
    card.addEventListener('click', () => onBrandClick(card.dataset.brand));
  });

  // Order button
  $('.btn-order')?.addEventListener('click', openOrder);

  // Payment options
  $$('.payment-option').forEach(opt => {
    opt.addEventListener('click', () => selectPayment(opt.dataset.method));
  });

  // Form submit
  $('form')?.addEventListener('submit', submitOrder);

  // Back home
  $('.btn-back-home')?.addEventListener('click', resetAll);

  // Clear error on input
  $$('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      input.parentElement.querySelector('.error-msg')?.classList.remove('show');
    });
  });

  // Hero CTA smooth scroll (handled natively via CSS, but JS helps precision)
  $('.hero-cta')?.addEventListener('click', (e) => {
    e.preventDefault();
    $('#products').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Navbar smooth scroll
  $$('.nav-links a')?.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = $(link.getAttribute('href'));
      if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
