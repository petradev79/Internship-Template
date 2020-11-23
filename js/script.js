// Stycky nav function
const checkNav = _.throttle(() => { 
  const scrollPosition = Math.round(window.scrollY);

  if (scrollPosition > 10){
      document.querySelector('nav').classList.add('sticky');
  } else {
      document.querySelector('nav').classList.remove('sticky');
  }
}, 300);
window.addEventListener('scroll', checkNav);


// Control nav click function
(controlNav = () => {
  const clickHamb = () => {
      document.querySelector('.nav__button--icon').classList.toggle('toggle');
      document.querySelector('.nav__menu').classList.toggle('show');
  }
  
  document.querySelector('.nav__button').addEventListener('click', clickHamb);
  
  document.querySelectorAll('.nav__link').forEach(e => e.addEventListener('click', clickHamb));
})();


// owlCarousel
$('.testimonials__carousel').owlCarousel({
  loop:true,
  margin:20,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})