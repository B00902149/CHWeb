// ===== FORMSPREE ENDPOINT =====
// Replace this with your own from formspree.io/f/xxxxxxxx
const FORMSPREE_URL = 'https://formspree.io/f/mwvrpylz';

// ===== WAITLIST SIGNUP =====
async function handleSignup() {
  const nameEl  = document.getElementById('name');
  const emailEl = document.getElementById('email');
  const btn     = document.querySelector('.form-wrap .btn-primary');
  const successMsg = document.getElementById('success-msg');
  const errorMsg   = document.getElementById('error-msg');

  const name  = nameEl.value.trim();
  const email = emailEl.value.trim();

  if (!name) {
    nameEl.focus();
    nameEl.style.borderColor = '#ef4444';
    setTimeout(() => nameEl.style.borderColor = '', 2000);
    return;
  }
  if (!email || !email.includes('@')) {
    emailEl.focus();
    emailEl.style.borderColor = '#ef4444';
    setTimeout(() => emailEl.style.borderColor = '', 2000);
    return;
  }

  btn.textContent = 'Sending...';
  btn.disabled = true;
  errorMsg.classList.add('hidden');

  try {
    const res = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name, email })
    });

    if (res.ok) {
      nameEl.value  = '';
      emailEl.value = '';
      successMsg.classList.remove('hidden');
      setTimeout(() => successMsg.classList.add('hidden'), 6000);
    } else {
      errorMsg.classList.remove('hidden');
    }
  } catch (err) {
    errorMsg.classList.remove('hidden');
  } finally {
    btn.textContent = 'Join the Waitlist';
    btn.disabled = false;
  }
}

// ===== SCREEN SHOWCASE THUMBNAILS =====
document.querySelectorAll('.thumb').forEach(thumb => {
  let touchMoved = false;

  thumb.addEventListener('touchstart', () => {
    touchMoved = false;
  }, { passive: true });

  thumb.addEventListener('touchmove', () => {
    touchMoved = true;
  }, { passive: true });

  thumb.addEventListener('touchend', () => {
    if (!touchMoved) activateThumb(thumb);
  }, { passive: true });

  thumb.addEventListener('click', () => {
    activateThumb(thumb);
  });
});

function activateThumb(thumb) {
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');

  const featuredImg   = document.getElementById('featured-img');
  const featuredTitle = document.getElementById('featured-title');
  const featuredDesc  = document.getElementById('featured-desc');

  featuredImg.src = thumb.dataset.img;
  featuredImg.style.opacity = '1';
  featuredTitle.textContent = thumb.dataset.title;
  featuredDesc.textContent  = thumb.dataset.desc;

  thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

// ===== INTERSECTION OBSERVER =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .pain-card, .step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ===== NAV SHADOW ON SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  nav.style.boxShadow = window.scrollY > 40
    ? '0 4px 30px rgba(0,0,0,0.5)'
    : 'none';
});

// ===== ENTER KEY ON FORM =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const active = document.activeElement;
    if (active && (active.id === 'name' || active.id === 'email')) {
      handleSignup();
    }
  }
});