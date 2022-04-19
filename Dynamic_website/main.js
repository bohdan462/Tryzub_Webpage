
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



//$( document ).ready(function() {
//
//    // Carousel
//
//    $(".carousel").carousel({
//        interval: false,
//        pause: true
//    });
//
//    $( ".carousel .carousel-inner" ).swipe( {
//    swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
//        this.parent( ).carousel( 'next' );
//    },
//    swipeRight: function ( ) {
//        this.parent( ).carousel( 'prev' );
//    },
//    threshold: 0,
//    tap: function(event, target) {
//        window.location = $(this).find('.carousel-item.active a').attr('href');
//    },
//    excludedElements:"label, button, input, select, textarea, .noSwipe"
//    } );
//
//    $('.carousel .carousel-inner').on('dragstart', 'a', function () {
//        return false;
//    });  
//
//});

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

//Scroll to move varenyky page
$(window).on("load resize scroll", function() {
  $(".bg-static").each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop;
      $(this)
        .find(".bg-move")
        .css({ left: leftPosition });
  });
});

const docStyle = document.documentElement.style
const aElem = document.querySelector('.mainMenuButton')
const boundingClientRect = aElem.getBoundingClientRect()

aElem.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect.left
	const y = e.clientY - boundingClientRect.top
	
	const xc = boundingClientRect.width/2
	const yc = boundingClientRect.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem.onmouseleave = function(e) {
	
	docStyle.setProperty('--ty', '0')
	docStyle.setProperty('--rx', '0')
	docStyle.setProperty('--ry', '0')
	
}

aElem.onmousedown = function(e) {
	
	docStyle.setProperty('--tz', '-25px')
	
}

document.body.onmouseup = function(e) {
	
	docStyle.setProperty('--tz', '-12px')
	
}

//// When the user scrolls the page, execute myFunction 
//window.onscroll = function() {myFunction()};
//
//// Get the navbar
////var navbar = document.getElementById("navlist");
//var node = document.getElementsByClassName("navb"); 
//var navbar = node[0]
//
//// Get the offset position of the navbar
//var sticky = navbar.offsetTop;
//
//// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//function myFunction() {
//  if (window.pageYOffset >= sticky) {
//    navbar.classList.add("sticky")
//  } else {
//    navbar.classList.remove("sticky");
//  }
//}