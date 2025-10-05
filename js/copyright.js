export const copyright = () =>{
    document.addEventListener('DOMContentLoaded', function() {
        // Автоматическое обновление даты в footer
        let date = new Date();  
        let res = date.getFullYear();  
        const yearElement = document.querySelector('.copyright__year');
        yearElement.innerHTML = res;

        console.log("copyright работает!");
    });
}