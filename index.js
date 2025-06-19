const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const bgToggle = document.getElementById('bg-toggle');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

menuToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    nav.classList.toggle('active');
  }
});

bgToggle.addEventListener('click', () => {
  document.body.classList.toggle('alt-bg');
});
