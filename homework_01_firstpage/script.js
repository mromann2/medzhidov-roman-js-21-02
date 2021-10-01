let page = document.querySelector('.main');
let themeButton = document.querySelector('.header__theme-button');


themeButton.onclick = function() {
page.classList.toggle('main_theme_dark');
};