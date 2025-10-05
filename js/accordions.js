export const accordions = () =>{
    document.addEventListener('DOMContentLoaded', function() {
        jQuery(document).ready(function($){
            $("#accordion").accordionjs(); // Стандартный аккордион
            $('.templates-inner-accordion').accordionjs(); // вложенный аккордион
        });
        
        console.log("accordions работают!");
    });
}