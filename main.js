// МОБИЛЬНОЕ МЕНБ
const menu = document.querySelector('.nav-menu');
const menuButton = document.querySelector('.header__burger');

menuButton.addEventListener("click", () =>{
    menu.classList.toggle("is-active");
    menuButton.classList.toggle('is-active');
});



// СЛАЙДЕР
const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: false, // автопроигрывание

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

});

// copyright
let date = new Date();  
let res = date.getFullYear();  
const yearElement = document.querySelector('.copyright__year');
yearElement.innerHTML = res;

