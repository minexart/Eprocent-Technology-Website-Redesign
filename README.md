# Eprocent Technology — Website Redesign

Full rebuild of [eprocent.com](https://eprocent.com) — a Penang-based engineering solutions company. The original site used table-based HTML from the early 2000s, had no mobile support, no SSL, no SEO and no contact form. This is the replacement.

Full story on Medium → *(link when published)*

---

## Stack

```
HTML5      — semantic markup, no framework
CSS3       — custom properties, grid, flexbox, scroll animations
JavaScript — vanilla ES6, IntersectionObserver, DOM events
```

No build tools. No npm. Open `index.html`.

---

## Pages

| File | Content |
|---|---|
| `index.html` | Homepage — hero, stats, product grid, why us, contact form |
| `products.html` | Full listing with filter bar by category |
| `about.html` | Company profile, timeline 2002–present, markets, brand partners |
| `contact.html` | Enquiry form + FAQ section |
| `dispensing.html` | Vermes MDS 3010A / 3020A / 3200A / 3200F + San Ei Tech |
| `uv_curing.html` | Phoseon FireEdge / FireFly / FireJet / FireLine / FirePower / FireFlex / StarFire Max + full EIT radiometer range |
| `aoi.html` | Machine Vision Products — Dynamic Process Control (DPC) |
| `soldering.html` | Auto soldering (N2, ZSB feeder) + manual 967ESD / 969ESD |
| `material.html` | ECOREL FREE SAC, leaded paste, no-clean fluxes, Koyo probe pins |
| `robotic.html` | 3-axis tabletop, 4-axis SCARA, integrated dispensing cell |
| `style.css` | Shared design system — all 12 pages |
| `main.js` | Shared behaviour — nav, scroll-reveal, form handling |

---

## Features

- Mobile-first responsive layout — works on all screen sizes
- Sticky nav with hamburger menu for mobile
- Scroll-reveal animations via `IntersectionObserver`
- Filterable product categories (JS, no library)
- Tabbed navigation on product detail pages
- Contact form with validation and submit feedback
- SEO meta tags on every page
- Breadcrumb navigation on all inner pages

---

## Connect the contact form

The form is ready for [Formspree](https://formspree.io). In `main.js`, replace the `setTimeout` placeholder with:

```JavaScript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name:    document.getElementById('name').value,
    email:   document.getElementById('email').value,
    company: document.getElementById('company').value,
    product: document.getElementById('product').value,
    message: document.getElementById('message').value,
  })
});
```

---

## Run locally

```bash
git clone https://github.com/minexart/eprocent-redesign.git
cd eprocent-redesign
# open index.html in browser
# or use VS Code Live Server for full page navigation
```

---

## Author

Aminat Olaide — IT student, UOW Malaysia KDU Penang | CGPA 3.77
[github.com/minexart](https://github.com/minexart) · [behance.net/minexstudio](https://behance.net/minexstudio)
