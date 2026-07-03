/* ==========================================================================
   NI-YU TEX INTERNATIONAL — Interactions & content rendering
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Icon library (inline SVG paths, 24x24) ---------- */
  const icon = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  const ICONS = {
    design: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
    sample: '<path d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2"/><rect x="7" y="7" width="10" height="10" rx="1"/>',
    fabric: '<path d="M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3z"/><path d="M7 3v18M12 3v18M17 3v18" opacity=".4"/>',
    trim: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>',
    mfg: '<path d="M3 21h18M4 21V10l5 3V10l5 3V7l6 4v10"/><path d="M9 21v-4h4v4"/>',
    qc: '<path d="M9 12l2 2 4-4"/><path d="M12 2l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"/>',
    compliance: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 14l2 2 4-4"/>',
    docs: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/>',
    ship: '<path d="M2 13h13l3 4h4v-6l-4-4h-6"/><path d="M2 5h9v12H2z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>',
    delivery: '<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    star: '<path d="M12 2l3 7 7 .5-5 5 1.5 7L12 18l-6.5 3.5L7 14 2 9l7-.5z"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    price: '<path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    handshake: '<path d="M11 17l2 2 4-4M2 12l4-4 5 5 3-3 4 4-3 3"/><path d="M14 6l4 4"/>',
    network: '<circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="12" cy="19" r="2"/><path d="M6.5 6.5L11 17M17.5 6.5L13 17M6 5h12"/>',
    leaf: '<path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
    chat: '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
    moq: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M8 8V6a4 4 0 018 0v2"/>',
    merch: '<path d="M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>'
  };

  /* ---------- WHAT WE DO ---------- */
  const services = [
    ['design', 'Product Design', 'Trend-led concepts and tech packs tailored to your brand.'],
    ['sample', 'Sampling & Development', 'Fast, accurate sampling from proto to PP approval.'],
    ['fabric', 'Fabric Sourcing', 'Access to premium mills and diverse fabric libraries.'],
    ['trim', 'Trim Development', 'Buttons, labels, zippers and trims sourced to spec.'],
    ['mfg', 'Manufacturing', 'In-house denim plus a vetted global vendor network.'],
    ['qc', 'Quality Control', 'In-line and final AQL inspections on every order.'],
    ['compliance', 'Compliance', 'WRAP, SEDEX, BSCI and buyer-standard audits.'],
    ['docs', 'Export Documentation', 'Complete, accurate paperwork for smooth customs.'],
    ['ship', 'Shipping', 'Sea, air and courier logistics coordinated end-to-end.'],
    ['delivery', 'Door Delivery', 'Reliable delivery right to your warehouse or DC.']
  ];
  const servicesGrid = document.getElementById('servicesGrid');
  servicesGrid.innerHTML = services.map((s, i) => `
    <article class="service-card reveal ${'d' + (i % 4 + 1)}">
      <div class="service-ico">${icon(ICONS[s[0]])}</div>
      <h3>${s[1]}</h3>
      <p>${s[2]}</p>
    </article>`).join('');

  /* ---------- PRODUCT CATEGORIES ---------- */
  const products = [
    ['Denim', ['Jeans', 'Jackets', 'Shirts'], '#1A1D6D', '#2a2e94'],
    ['Knits', ['T-Shirts', 'Polo Shirts', 'Sweatshirts', 'Hoodies'], '#232766', '#3a3f9e'],
    ['Woven', ['Shirts', 'Trousers', 'Shorts', 'Joggers'], '#12143f', '#26296e'],
    ['Ethnic Wear', ['Kurtas', 'Bandi', 'Dresses', 'Gowns', 'Skirts'], '#2a2e94', '#4247b0'],
    ['Outerwear', ['Blazers', 'Jackets', 'Sweaters'], '#1A1D6D', '#343a8f'],
    ['Athleisure', ['Active Wear', 'Gym Wear', 'Sports Wear'], '#191c5e', '#2f3488'],
    ['Accessories', ['Caps', 'Bags', 'Leather Belts', 'Wallets', 'Socks', 'Handkerchiefs'], '#20235c', '#393e9c'],
    ['Home Textiles', ['Bedding', 'Towels', 'Furnishing'], '#14163f', '#2b2f7a']
  ];
  // small garment glyphs per category
  const garment = `<g fill="none" stroke="rgba(212,175,55,0.5)" stroke-width="2.5" stroke-linejoin="round"><path d="M70 40 L50 60 L62 80 L74 70 L74 170 L126 170 L126 70 L138 80 L150 60 L130 40 L115 52 Q100 62 85 52 Z"/></g>`;
  const productsGrid = document.getElementById('productsGrid');
  productsGrid.innerHTML = products.map((p, i) => `
    <article class="product-card reveal ${'d' + (i % 4 + 1)}" tabindex="0">
      <div class="art">
        <svg viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs><linearGradient id="pg${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p[2]}"/><stop offset="1" stop-color="${p[3]}"/></linearGradient></defs>
          <rect width="200" height="300" fill="url(#pg${i})"/>
          <g opacity="0.6" transform="translate(0,40)">${garment}</g>
          <g stroke="rgba(255,255,255,0.06)" stroke-width="1"><line x1="0" y1="100" x2="200" y2="100"/><line x1="0" y1="200" x2="200" y2="200"/></g>
        </svg>
      </div>
      <div class="scrim"></div>
      <div class="body">
        <h3>${p[0]}</h3>
        <div class="line"></div>
        <div class="tags">${p[1].map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    </article>`).join('');

  /* ---------- CERTIFICATIONS ---------- */
  const certs = [
    ['WRAP', 'Ethical'], ['SEDEX', 'Audited'], ['BSCI', 'Social'],
    ['SA8000', 'Labour'], ['GOTS', 'Organic'], ['BCI', 'Cotton'],
    ['OEKO-TEX', 'Safe'], ['Disney', 'FAMA'], ['Walmart', 'Program'], ['PVH', 'Approved']
  ];
  const certsGrid = document.getElementById('certsGrid');
  certsGrid.innerHTML = certs.map((c, i) => `
    <div class="cert-card reveal ${'d' + (i % 4 + 1)}">
      <div class="badge">${icon(ICONS.compliance)}</div>
      <div class="name">${c[0]}</div>
      <div class="desc">${c[1]}</div>
    </div>`).join('');

  /* ---------- WHY CHOOSE US ---------- */
  const why = [
    ['delivery', 'Design to Delivery'], ['sample', 'Fast Sampling'], ['price', 'Competitive Pricing'],
    ['leaf', 'Ethical Manufacturing'], ['network', 'Global Vendor Network'], ['merch', 'Dedicated Merchandising'],
    ['qc', 'Quality Assurance'], ['chat', 'Transparent Communication'], ['clock', 'On-Time Delivery'],
    ['moq', 'Flexible MOQ']
  ];
  const whyGrid = document.getElementById('whyGrid');
  whyGrid.innerHTML = why.map((w, i) => `
    <article class="why-card reveal ${'d' + (i % 5 + 1)}">
      <div class="chk">${icon(ICONS[w[0]])}</div>
      <h3>${w[1]}</h3>
    </article>`).join('');

  /* ---------- PROCESS TIMELINE ---------- */
  const steps = ['Design Brief', 'Product Development', 'Sampling', 'Costing', 'Production', 'Quality Inspection', 'Packing', 'Shipment', 'Delivery'];
  const track = document.getElementById('timelineTrack');
  track.innerHTML = '<div class="tl-line"></div>' + steps.map((s, i) => `
    <div class="tl-step">
      <div class="tl-node">${String(i + 1).padStart(2, '0')}</div>
      <h4>${s}</h4>
    </div>`).join('');

  /* ---------- GLOBAL PRESENCE — interactive map ---------- */
  const regions = [
    ['🇮🇳', 'India', 'HQ & Denim Manufacturing', 68, 55],
    ['🇺🇸', 'USA', 'Frisco, Texas Office', 20, 42],
    ['🇬🇧', 'United Kingdom', 'Hemel Hempstead Office', 46, 33],
    ['🇪🇺', 'Europe', 'Retail & Brand Partners', 50, 36],
    ['🇷🇺', 'Russia', 'Wholesale Buyers', 62, 30],
    ['🇮🇱', 'Israel', 'Fashion Retailers', 56, 48],
    ['🇦🇪', 'Middle East', 'Sourcing & Vendors', 60, 50]
  ];
  // Simplified stylised world map (continent blobs) + pins
  const pins = regions.map((r, i) => `
    <g class="map-pin" data-i="${i}" tabindex="0" role="button" aria-label="${r[1]}">
      <circle class="pulse" cx="${r[3] * 8}" cy="${r[4] * 6}" r="6"/>
      <circle class="dot" cx="${r[3] * 8}" cy="${r[4] * 6}" r="6"/>
    </g>`).join('');
  document.getElementById('mapWrap').innerHTML = `
    <svg viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="World map of NI-YU TEX markets">
      <g class="map-land">
        <path class="map-land" d="M90 120 Q150 90 210 130 Q240 170 210 230 Q170 300 130 260 Q90 210 90 120Z"/>
        <path class="map-land" d="M240 300 Q280 280 300 330 Q320 400 280 430 Q250 420 250 360 Q240 330 240 300Z"/>
        <path class="map-land" d="M360 130 Q400 100 440 130 Q460 160 440 190 Q400 210 380 180 Q360 160 360 130Z"/>
        <path class="map-land" d="M400 220 Q440 200 470 250 Q490 330 450 390 Q410 400 400 340 Q390 280 400 220Z"/>
        <path class="map-land" d="M470 120 Q560 80 660 120 Q720 150 700 220 Q650 270 560 250 Q490 230 470 170 Q460 140 470 120Z"/>
        <path class="map-land" d="M620 320 Q680 300 710 340 Q720 380 680 400 Q640 390 620 350Z"/>
      </g>
      ${pins}
    </svg>`;

  const regionList = document.getElementById('regionList');
  regionList.innerHTML = regions.map((r, i) => `
    <div class="region-item" data-i="${i}" tabindex="0" role="button">
      <span class="flag">${r[0]}</span>
      <div><div class="rt">${r[1]}</div><div class="rs">${r[2]}</div></div>
    </div>`).join('');

  function activateRegion(i) {
    document.querySelectorAll('.region-item').forEach(el => el.classList.toggle('active', el.dataset.i == i));
    document.querySelectorAll('.map-pin').forEach(el => el.classList.toggle('active', el.dataset.i == i));
  }
  document.querySelectorAll('.region-item, .map-pin').forEach(el => {
    el.addEventListener('mouseenter', () => activateRegion(el.dataset.i));
    el.addEventListener('focus', () => activateRegion(el.dataset.i));
    el.addEventListener('click', () => activateRegion(el.dataset.i));
  });

  /* ---------- TESTIMONIALS carousel ---------- */
  const testimonials = [
    ['Reliable, transparent and fast. NI-YU TEX has become an extension of our own sourcing team — their denim quality is consistently retail-ready.', 'James Whitfield', 'Head of Sourcing, UK Retailer', 'JW'],
    ['From tech pack to delivery, communication was flawless. Sampling turnaround was the fastest we have experienced from any Indian partner.', 'Elena Kravchenko', 'Buying Director, Russia', 'EK'],
    ['Ethical, compliant and competitively priced. Their merchandising team anticipates issues before they happen. A true long-term partner.', 'David Rosen', 'Private Label Owner, Israel', 'DR'],
    ['We consolidated multiple vendors into NI-YU TEX and never looked back. On-time delivery and quality assurance are second to none.', 'Sarah Mitchell', 'VP Product, USA', 'SM']
  ];
  const tslides = document.getElementById('tslides');
  const tdots = document.getElementById('tdots');
  tslides.innerHTML = testimonials.map((t, i) => `
    <div class="tslide ${i === 0 ? 'active' : ''}">
      <div class="quote-mark">&ldquo;</div>
      <p class="quote">${t[0]}</p>
      <div class="stars">★★★★★</div>
      <div class="who">
        <div class="av">${t[3]}</div>
        <div><div class="nm">${t[1]}</div><div class="rl">${t[2]}</div></div>
      </div>
    </div>`).join('');
  tdots.innerHTML = testimonials.map((_, i) => `<button class="tdot ${i === 0 ? 'active' : ''}" data-i="${i}" aria-label="Testimonial ${i + 1}"></button>`).join('');

  let tCur = 0, tTimer;
  const slides = () => document.querySelectorAll('.tslide');
  const dots = () => document.querySelectorAll('.tdot');
  function showT(n) {
    tCur = (n + testimonials.length) % testimonials.length;
    slides().forEach((s, i) => s.classList.toggle('active', i === tCur));
    dots().forEach((d, i) => d.classList.toggle('active', i === tCur));
  }
  function autoT() { clearInterval(tTimer); tTimer = setInterval(() => showT(tCur + 1), 6000); }
  document.getElementById('tnext').addEventListener('click', () => { showT(tCur + 1); autoT(); });
  document.getElementById('tprev').addEventListener('click', () => { showT(tCur - 1); autoT(); });
  dots().forEach(d => d.addEventListener('click', () => { showT(+d.dataset.i); autoT(); }));
  autoT();

  /* ---------- HEADER scroll state ---------- */
  const header = document.getElementById('header');
  const totop = document.getElementById('totop');
  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    totop.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  totop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('burger');
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('#navMenu a').forEach(a =>
    a.addEventListener('click', () => { document.body.classList.remove('menu-open'); burger.setAttribute('aria-expanded', false); }));

  /* ---------- Scroll reveal ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Count-up stats ---------- */
  const counters = document.querySelectorAll('.hero-stat .n[data-count]');
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.count, suffix = el.textContent.replace(/[0-9]/g, '');
      let cur = 0; const step = Math.max(1, Math.ceil(target / 40));
      const t = setInterval(() => { cur += step; if (cur >= target) { cur = target; clearInterval(t); } el.textContent = cur + suffix; }, 30);
      cio.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => cio.observe(c));

  /* ---------- Contact form ---------- */
  const form = document.getElementById('enquiryForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert('Please enter your name and a valid email address.');
      return;
    }
    // Compose a mailto fallback so the enquiry is deliverable without a backend
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${form.company.value}\nEmail: ${email}\nPhone: ${form.phone.value}\nCategory: ${form.category.value}\n\n${form.message.value}`);
    const success = document.getElementById('formSuccess');
    success.classList.add('show');
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    window.setTimeout(() => {
      window.location.href = `mailto:info@niyutex.com?subject=${encodeURIComponent('Quote Request — ' + name)}&body=${body}`;
    }, 600);
    form.reset();
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
