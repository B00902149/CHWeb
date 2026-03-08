// ===== FORMSPREE ENDPOINT =====
// Replace this with your own from formspree.io/f/xxxxxxxx
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

// ===== WAITLIST SIGNUP =====
async function handleSignup() {
  const nameEl  = document.getElementById('name');
  const emailEl = document.getElementById('email');
  const btn     = document.querySelector('.form-wrap .btn-primary');
  const successMsg = document.getElementById('success-msg');
  const errorMsg   = document.getElementById('error-msg');

  const name  = nameEl.value.trim();
  const email = emailEl.value.trim();

  // Basic validation
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

  // Loading state
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
  thumb.addEventListener('click', () => {
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');

    const img   = thumb.dataset.img;
    const title = thumb.dataset.title;
    const desc  = thumb.dataset.desc;

    const featuredImg   = document.getElementById('featured-img');
    const featuredTitle = document.getElementById('featured-title');
    const featuredDesc  = document.getElementById('featured-desc');

    featuredImg.style.opacity = '0';
    setTimeout(() => {
      featuredImg.src = img;
      featuredImg.style.opacity = '1';
    }, 150);
    featuredTitle.textContent = title;
    featuredDesc.textContent  = desc;

    // Scroll thumb into view
    thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  });
});


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
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
  } else {
    nav.style.boxShadow = 'none';
  }
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