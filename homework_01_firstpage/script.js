let main = document.querySelector('.main');
let themeButton = document.querySelector('.header__theme-button');


themeButton.onclick = function() {
main.classList.toggle('main_theme_dark');
};