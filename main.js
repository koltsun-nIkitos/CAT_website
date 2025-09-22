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

// accordion
jQuery(document).ready(function($){
    $("#accordion").accordionjs();
    $('.templates-inner-accordion').accordionjs();
});




// Smooth scroll
function smoothScrollTo(targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset;
    const headerHeight = document.querySelector('header').offsetHeight;
    
    window.scrollTo({
        top: offsetPosition - headerHeight - 20, // Учитываем высоту шапки
        behavior: 'smooth'
    });
    
    // Обновляем URL без перезагрузки страницы
    history.pushState(null, null, `#${targetElement.id}`);
}

document.addEventListener('DOMContentLoaded', function() {
    // 1. Обработка кликов по навигационным ссылкам
    const navLinks = document.querySelectorAll('.navigation__link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                smoothScrollTo(targetElement);
            }
        });
    });
});


// copyright
let date = new Date();  
let res = date.getFullYear();  
const yearElement = document.querySelector('.copyright__year');
yearElement.innerHTML = res;

// hyper smooth scroll
// hyper smooth scroll с умным смещением
const hyperLinks = document.querySelectorAll('.navigation__link--hyper');
const OFFSET = -120; // Настройте нужное смещение

hyperLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href && href.includes('#')) {
            const [page, anchor] = href.split('#');
            const isExternalPage = page && page !== window.location.pathname;
            
            if (isExternalPage) {
                e.preventDefault();
                
                // Сохраняем данные для прокрутки
                sessionStorage.setItem('scrollData', JSON.stringify({
                    anchor: anchor,
                    offset: OFFSET,
                    timestamp: Date.now()
                }));
                
                window.location.href = page;
            }
        }
    });
});

// Обработка на целевой странице
document.addEventListener('DOMContentLoaded', function() {
    const scrollData = sessionStorage.getItem('scrollData');
    
    if (scrollData) {
        const { anchor, offset, timestamp } = JSON.parse(scrollData);
        
        // Проверяем что данные не старше 5 секунд
        if (Date.now() - timestamp < 5000) {
            setTimeout(() => {
                const element = document.getElementById(anchor);
                if (element) {
                    const targetY = element.getBoundingClientRect().top + 
                                  window.pageYOffset + 
                                  (offset || 0);
                    
                    window.scrollTo({
                        top: targetY,
                        behavior: 'smooth'
                    });
                }
                
                sessionStorage.removeItem('scrollData');
            }, 300);
        }
    }
});