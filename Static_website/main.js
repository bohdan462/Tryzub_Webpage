//Select element function
//const selectElement = function (element) {
//    return document.querySelector(element);
//};
//
//let menuToggler = selectElement('.navlist');
//let body = selectElement('body');
//
//menuToggler.addEventListener('click', function () {
//    body.classList.toggle('open');
//});
const menuToggler = document.querySelector('.navlist');
const body = document.body;
const navItems = document.querySelectorAll(".nav-item");

Array.from(navItems).map(el => {
  el.addEventListener('click', function () {
      body.classList.remove('open');
  });
});

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});
// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});