# NI-YU TEX INTERNATIONAL — Corporate Website

A world-class, luxury B2B website for **NI-YU TEX INTERNATIONAL** — a global apparel sourcing & manufacturing partner (Design-to-Delivery) headquartered in Bangalore, India.

> **Design. Develop. Manufacture. Deliver.**

## Brand Identity

| Token | Value |
|-------|-------|
| Royal Blue | `#1A1D6D` |
| Gold | `#D4AF37` |
| White | `#FFFFFF` |
| Light Grey | `#F1F3F7` |
| Headings | Cormorant (serif) |
| Body | Montserrat (sans-serif) |

Style: **premium · modern · elegant · minimal** — inspired by luxury fashion houses (Hugo Boss / Ralph Lauren / Tommy Hilfiger), adapted for apparel sourcing & manufacturing.

## Features

- Full-screen luxury hero with animated stats & floating trust badge
- About, What We Do (10 services), Product Categories (8 groups)
- Dedicated denim **Manufacturing** section + vendor-network note
- Dark **Quality & Compliance** section (WRAP, SEDEX, BSCI, SA8000, GOTS, BCI, OEKO-TEX, Disney, Walmart, PVH)
- **Interactive world map** (India, USA, UK, Europe, Russia, Israel, Middle East)
- Why Choose Us, horizontal **Process timeline**, testimonials carousel
- Contact section: director & 3 office addresses, WhatsApp, email enquiry form, Google Maps, LinkedIn
- Downloadable / printable **Company Profile** page
- Privacy Policy page
- Scroll-reveal animations, count-up stats, sticky nav, back-to-top, WhatsApp float
- Fully responsive (375 / 768 / 1024 / 1440), SEO meta + JSON-LD, `prefers-reduced-motion` respected
- **Zero external image dependencies** — all visuals are inline SVG for instant, reliable loading

## Structure

```
niyutex/
├── index.html            # Homepage (all sections)
├── company-profile.html  # Printable / downloadable company profile
├── privacy.html          # Privacy policy
├── css/style.css         # All styling
├── js/main.js            # Interactions & content rendering
└── assets/
    ├── logo.svg          # Primary logo (royal blue)
    ├── logo-white.svg    # Reversed logo (for dark backgrounds)
    └── favicon.svg
```

## Run locally

Any static server works, e.g.:

```bash
python -m http.server 4321
# then open http://localhost:4321
```

## Deploy

This is a static site — deploy the `niyutex/` folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3, etc.).

**GitHub Pages:** Settings → Pages → deploy from branch (`main`, `/root` or `/docs`).

## Contact

**NI-YU TEX INTERNATIONAL** · Director: Sundhar M · +91 99020 10608
India · USA · UK

---

© NI-YU TEX INTERNATIONAL. All rights reserved.
