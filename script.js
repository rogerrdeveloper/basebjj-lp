// Navbar scroll
const nb = document.getElementById('navbar');
window.addEventListener('scroll', () => { nb.classList.toggle('scrolled', scrollY > 60) });

// Mobile menu
const ham = document.getElementById('ham'), mob = document.getElementById('mobileMenu');
function togMob() { ham.classList.toggle('open'); mob.classList.toggle('open') }
function closeMob() { ham.classList.remove('open'); mob.classList.remove('open') }

// Counter
function countUp(el) {
  if(el.dataset.counted === 'true') return;
  el.dataset.counted = 'true';
  const t = +el.dataset.target, dur = 900, step = t / (dur / 16); let c = 0;
  const r = setInterval(() => { c += step; if (c >= t) { el.textContent = t; clearInterval(r) } else el.textContent = Math.floor(c) }, 16)
}

// Reveal Fade In/Out
const revEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.querySelectorAll('.cnt').forEach(countUp);
    } else {
      e.target.classList.remove('visible');
    }
  })
}, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
revEls.forEach(el => obs.observe(el));

// Plano toggle
let isAnual = false;
function togPlano(t) {
  isAnual = t === 'anual';
  document.getElementById('bMensal').classList.toggle('active', !isAnual);
  document.getElementById('bAnual').classList.toggle('active', isAnual);
  document.querySelectorAll('.p-val').forEach(el => {
    el.textContent = isAnual ? el.dataset.anual : el.dataset.mensal
  });
  ['n1', 'n2', 'n3', 'n4'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('show', isAnual);
  });
}

// FAQ
function togFaq(btn) {
  const item = btn.parentElement, open = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!open) item.classList.add('open');
}
