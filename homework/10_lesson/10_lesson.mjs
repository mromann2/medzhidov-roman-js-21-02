// Разработать страницу, подобную разработанной в ходе урока. Страница должна содержать инпут для ввода файла и
// дальнейшей отправки на сервер по API https://api.imgbb.com/. Отправляемый файл должен быть закодирован в base64.
// Отправленные изображения должны выводиться на страницу. Приходящие в ответе от сервера ссылки на изображения должны сохраняться в localStorage.
// Если при загрузке страницы в localStorage уже есть сохранённые ссылки на изображения, эти изображения должны выводиться на страницу.
// При выполнении задания необходимо соблюдать модульную структуру (подобную продемонстрированной в уроке посвящённому модулям).
//     *Опционально: При загрузке очередного изображения на сервер необходимо отображать над инпутом лоадер, анимированный на js.
//     В ответе на домашнее задание прикрепить ссылку на GitHub и ссылку на профиль в imgbb.
import {moveRight} from "./move-funcs.mjs";
import {upload} from "./upload-func.js";

export let imgArray = localStorage.getItem('imgArray') ? JSON.parse(localStorage.getItem('imgArray')): [];
let fileInput = document.getElementById('fileInput')
let submitButton = document.querySelector('.submitButton')

imgArray.forEach(addImgtoGallery)

export function addImgtoGallery(url){
    let img =document.createElement('img')
    img.src=url
    document.querySelector('.gallery').append(img)
}

submitButton.addEventListener('click', ()=>{
    moveRight()
    let reader = new FileReader()
    reader.readAsDataURL(fileInput.files[0])
    reader.onload = ()=> upload(reader.result)
})
