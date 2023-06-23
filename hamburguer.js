var hamburguerIcon = document.querySelector('.hamburguer');
var menu = document.querySelector('.header .menu');

hamburguerIcon.addEventListener('click', function() {
  hamburguerIcon.classList.toggle('active');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});