/* ── NAV: hamburger toggle ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/* ── NAV: highlight active page ── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .why-card, .reveal').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

/* ── CONTACT FORM ── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    /* 
      TODO: Replace this timeout with a real form submission.
      You can use Formspree (free): 
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
    */
    setTimeout(() => {
      btn.textContent = '✓ Enquiry sent — we will be in touch soon';
      btn.style.background = '#1D9E75';
      contactForm.reset();
    }, 1200);
  });
}
