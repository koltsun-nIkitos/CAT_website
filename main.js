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

const swiperEventsMobile = new Swiper('.swiper-events', {
    direction: 'horizontal',
    speed: 2000,
    autoplay: true,
    spaceBetween: 10,
    
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    
});


// слайдер в абитуриенту
document.addEventListener('DOMContentLoaded', function() {
    const sliderElement = document.getElementById('applicantSlider');
    
    const swiperApplicant = new Swiper('.swiper-applicant', {
        slidesPerView: 'auto',
        centeredSlides: true,
        direction: 'horizontal',
        speed: 1000,
        autoplay: false,
        spaceBetween: 20,
        
        on: {
            init: function() {
                // После инициализации принудительно устанавливаем позицию
                this.wrapperEl.style.transform = 'translate3d(0px, 0px, 0px)';
            },
            
            touchStart: function() {
                // При начале взаимодействия разрешаем transform
                sliderElement.classList.add('swiper-interacting');
            },
            
            touchEnd: function() {
                // После завершения взаимодействия фиксируем позицию
                setTimeout(() => {
                    if (this.activeIndex === 0) {
                        this.wrapperEl.style.transform = 'translate3d(0px, 0px, 0px)';
                    }
                    sliderElement.classList.remove('swiper-interacting');
                }, this.params.speed + 50);
            },
            
            slideChange: function() {
                // После смены слайда, если это первый слайд - фиксируем позицию
                if (this.activeIndex === 0) {
                    setTimeout(() => {
                        this.wrapperEl.style.transform = 'translate3d(0px, 0px, 0px)';
                    }, this.params.speed + 50);
                }
            }
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    });
});

// const swiperApplicant = new Swiper('.swiper-applicant', {
//   // Optional parameters
//     slidesPerView: 'auto',
//     centeredSlides: true,
//     initialSlide: 0,
//     direction: 'horizontal',
//     speed: 1000,
//     autoplay: false, // автопроигрывание
//     spaceBetween: 10,

//     on: {
//         init: function() {
//             setTimeout(() => {
//                 this.update();
//             }, 100);
//         }
//     },

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true
//     },

// });

// copyright
let date = new Date();  
let res = date.getFullYear();  
const yearElement = document.querySelector('.copyright__year');
yearElement.innerHTML = res;

