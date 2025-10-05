export const swipers = () =>{
    document.addEventListener('DOMContentLoaded', function() {
        
        const swiper = new Swiper('.swiper', {
            // Главный слайдер (главная)
            direction: 'horizontal',
            loop: true,
            speed: 1000,
            autoplay: false, // автопроигрывание

            // Пагинация нужна
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
        });

        const swiperEventsMobile = new Swiper('.swiper-events', {
            // Мобильный слайдер в событиях
            direction: 'horizontal',
            speed: 2000,
            autoplay: true,
            spaceBetween: 10,
            
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
            },
        });

        const sliderElement = document.getElementById('applicantSlider');
        const swiperApplicant = new Swiper('.swiper-applicant', {
            // Слайдер в абитуриенту
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


        console.log("Свайперы работают!");
    });
}