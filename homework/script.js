let main = document.querySelector('.main');
let header = document.querySelector('.header');
let themeButton = document.querySelector('.header__theme-button');
let aside = document.querySelector('aside');
let card = document.querySelectorAll('.card');
let footer = document.querySelector('footer');
let fishBuys = document.querySelectorAll('.fish-buy');



themeButton.onclick = function() {
main.classList.toggle('main_theme_dark');
header.classList.toggle('header_theme_dark');
aside.classList.toggle('aside_theme_dark');
footer.classList.toggle('footer_theme_dark');
card.forEach(el => el.classList.toggle('card_theme_dark'))
fishBuys.forEach(el => el.classList.toggle('fish-buy_theme_dark'))
};
