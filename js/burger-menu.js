export const burgerMenu = () =>{
    document.addEventListener('DOMContentLoaded', function() {
        // мобильное меню
        const menu = document.querySelector('.nav-menu');
        const menuButton = document.querySelector('.header__burger');

        menuButton.addEventListener("click", () =>{
            menu.classList.toggle("is-active");
            menuButton.classList.toggle('is-active');
        });
        
        console.log("меню работает!");
    });
}