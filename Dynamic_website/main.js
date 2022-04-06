//Select element function
//const selectElement = function (element) {
//    return document.querySelector(element);
//};
//
//let menuToggler = selectElement('.menutoggle');
//let body = selectElement('body');
//
//menuToggler.addEventListener('click', function () {
//    body.classList.toggle('open');
//});


const menuToggler = document.querySelector('.menutoggle');
const body = document.body;
const navItems = document.querySelectorAll(".navitem");

Array.from(navItems).map(el => {
  el.addEventListener('click', function () {
      body.classList.remove('open');
  });
});

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

//// Parallax scrolling effect
// window.addEventListener('scroll', function () {
//    const parallax = document.querySelector('.parallax');
//    let scrollPosition = window.pageYOffset;
//  
//    parallax.style.transform = 'translateY(' + scrollPosition * -.10 + 'px)';
//  });

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