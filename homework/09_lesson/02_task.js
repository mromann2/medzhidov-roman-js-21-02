// 2. Реализовать страницу, через десять секунд перенаправляющую на главную страницу
// https://maxima.life (для редиректа поменять свойство window.location) на странице вывести сообщение
// // "вы будите перенаправлены через /*количество оставшихся секунд*/" секунд
//     *Опционально: предусмотреть склонение слова "секунда"




let i = 10
let span = document.querySelector('span')

let interval = setInterval(function (){
    span.textContent = `Вы будете перенаправлены через ${i > 4 ? `${i--} секунд` : `${i === 1 ? `${i--} секунду` : `${i--} секунды` }`}`
    if(i <= 0)clearInterval(interval)
}, 1000)

document.onload( setTimeout(() => {
    window.location = 'https://maxima.life'

}, 10000) )