function toggleMode() {
  document.body.classList.toggle('dark-mode');
  
  const btn = document.querySelector('.switch button');
  btn.classList.toggle('active');
}
