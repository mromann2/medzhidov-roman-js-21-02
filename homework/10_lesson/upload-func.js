import {interval} from "./move-funcs.mjs";
import {imgArray, addImgtoGallery} from "./10_lesson.mjs";


export function upload (file){
    let formData = new  FormData()
    formData.set('key', 'd08ef02456d9fdca6a2c2de88430e8e2')
    formData.set('image', file.split(',').pop())
    fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
        .then(obj => {
            imgArray.push(obj.data.display_url)
            addImgtoGallery(obj.data.display_url)
            cancelAnimationFrame(interval)
            localStorage.setItem('imgArray',  JSON.stringify(imgArray))
        })
}
