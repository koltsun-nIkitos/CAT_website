const menu = document.querySelector('.nav-menu');
const menuButton = document.querySelector('.header__burger');

menuButton.addEventListener("click", () =>{
    menu.classList.toggle("is-active");
    menuButton.classList.toggle('is-active');
});



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