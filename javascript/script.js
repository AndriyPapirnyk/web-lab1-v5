const burger = document.getElementById('header__burger');
const nav = document.getElementById('header__nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});