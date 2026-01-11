const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const themeToggle = document.getElementById("theme-toggle");

menuToggle.addEventListener("click", () => nav.classList.toggle("active"));

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
