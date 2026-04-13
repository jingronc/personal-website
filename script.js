// ── Hamburger menu ──────────────────────────────────────────
const hamburger   = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');
const menuLinks   = document.querySelectorAll('.menu-link');

hamburger.addEventListener('click', () => {
  const isOpen = menuOverlay.classList.toggle('is-open');
  hamburger.classList.toggle('is-open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuOverlay.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    document.body.style.overflow = '';
  });
});

// ── Hamburger color ──────────────────────────────────────────
const hero = document.getElementById('hero');
const heroObserver = new IntersectionObserver(
  ([entry]) => hamburger.classList.toggle('dark', !entry.isIntersecting),
  { threshold: 0.1 }
);
heroObserver.observe(hero);

// ── Active menu link on scroll ───────────────────────────────
const sections = ['about', 'procreate', 'contact'];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        menuLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === entry.target.id);
        });
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

// ── Scroll-reveal ────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Canvas setup ─────────────────────────────────────────────
const canvas = document.getElementById('bubbleCanvas');
const ctx    = canvas.getContext('2d');

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize, { passive: true });

// ── Bubbles (viewport-relative — always floating up in front) ─
function randomBubble() {
  return {
    x:       Math.random() * canvas.width,
    y:       canvas.height + Math.random() * 200,
    r:       Math.random() * 3 + 1,
    speed:   Math.random() * 0.5 + 0.2,
    opacity: Math.random() * 0.35 + 0.05,
    drift:   (Math.random() - 0.5) * 0.4,
  };
}

const bubbles = [];
for (let i = 0; i < 80; i++) {
  const b = randomBubble();
  b.y = Math.random() * canvas.height;
  bubbles.push(b);
}

function drawBubble(b) {
  ctx.beginPath();
  ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(94, 207, 218, ${b.opacity})`;
  ctx.lineWidth   = 0.8;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(b.x, b.y, b.r * 0.4, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(180, 240, 245, ${b.opacity * 0.5})`;
  ctx.fill();

  b.y -= b.speed;
  b.x += b.drift;
  if (b.y + b.r < 0) Object.assign(b, randomBubble());
}

// ── Animation loop ───────────────────────────────────────────
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbles.forEach(drawBubble);
  requestAnimationFrame(animate);
}
animate();


// ── Show canvas only below hero ──────────────────────────────
const heroCanvasObserver = new IntersectionObserver(
  ([entry]) => canvas.classList.toggle('visible', !entry.isIntersecting),
  { threshold: 0.05 }
);
heroCanvasObserver.observe(hero);
