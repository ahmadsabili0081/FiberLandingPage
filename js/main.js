var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints:{
        320:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 1,
        },
        1024:{
            slidesPerView: 1,
        },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".text__Service",{
    x: -100,
    opacity:0,
    duration: 0.5,
    ease:"bounce",
    scrollTrigger: {
      trigger: ".text__Service",
      scrub: 2,
    }
  });
  AOS.init({
    disable: false,
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease',
    anchorPlacement: 'top-bottom',
  });

  const btn = document.getElementById('btnScroll');
  window.onscroll = function(){
      btnScroll();
  }
  function btnScroll (){
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
      btn.style.transform="translateX(-20px)";
    }else{
      btn.style.transform="translateX(100px)";
    }
  }
  function scrolltoTop(){
    document.body.scrollTop= 0;

    document.documentElement.scrollTop = 0;
  }

  // sticky
window.addEventListener('scroll',  () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// hamburger
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',function (){
    const nav = document.querySelector('nav');
    nav.classList.toggle('navShow');
    hamburger.classList.toggle('rotate');
});

// form js
const signup = document.getElementById('sign__up');
signup.addEventListener('click',function (){
    const form = document.querySelector('.sign__up');
    const signin = document.querySelector('.sign__in')
    form.classList.toggle('slide');
    signin.classList.toggle('slide2');
});
const signupp = document.getElementById('sign__upp');
signupp.addEventListener('click',function(){
    const form = document.querySelector('.sign__up');
    const signin = document.querySelector('.sign__in');
    form.classList.remove('slide');
    signin.classList.remove('slide2');
  
});

// hide password and show
const password = document.getElementById('fakepassword');
const toggler = document.getElementById('toggler');

showHidepassword  = () =>{
  if(password.type == 'password'){
    password.setAttribute('type', 'text');
  }else{
    password.setAttribute('type', 'password');
  }
};
toggler.addEventListener('click',showHidepassword);

const password2 = document.getElementById('fakepassword2');
const toggler2 = document.getElementById('toggler2');

showHidepassword2  = () =>{
  if(password2.type == 'password'){
    password2.setAttribute('type', 'text');
  }else{
    password2.setAttribute('type', 'password');
  }
};
toggler2.addEventListener('click',showHidepassword2);