let main = document.querySelector('.main');
let header = document.querySelector('.header');
let themeButton = document.querySelector('.header__theme-button');
let fishBuys = document.querySelectorAll('.fish-buy');


themeButton.onclick = function() {
main.classList.toggle('main_theme_dark');
header.classList.toggle('header_theme_dark');
fishBuys.forEach(el => el.classList.toggle('fish-buy_theme_dark'))
};
