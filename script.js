// mobile nav
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  burger.addEventListener('click', () => mobileNav.classList.toggle('open'));
  function closeNav(){ mobileNav.classList.remove('open'); }

  // scroll reveal
  const rvs = document.querySelectorAll('.rv');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  rvs.forEach(el => io.observe(el));

  // add to cart micro-interaction
  function addToCart(btn) {
    btn.textContent = '✓';
    btn.classList.add('added');
    setTimeout(() => { btn.textContent = '+'; btn.classList.remove('added'); }, 1400);
  }

  // newsletter
  function subscribe() {
    const input = document.getElementById('newsEmail');
    const btn = event.target;
    if (!input.value.includes('@')) { input.style.borderColor = '#DB7A2C'; return; }
    btn.textContent = 'Subscribed ✓';
    input.value = '';
    input.placeholder = "You're on the list";
    setTimeout(() => { btn.textContent = 'Subscribe'; input.placeholder = 'Your email address'; }, 3500);
  }
