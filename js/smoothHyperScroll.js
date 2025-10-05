export const smoothHyperScroll = () =>{
    document.addEventListener('DOMContentLoaded', function() {
        // Функция плавного скролла
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
        };

        // Обработка кликов по навигационным ссылкам
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


        // гиппер скролл с умным смещением
        const hyperLinks = document.querySelectorAll('.navigation__link--hyper');
        const OFFSET = -120; //  нужное смещение

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

        console.log("гипер ссылки аботают!");
    });
}