// 1. Разработать скрипт. Пользователь вводит два числа (i, j),
//     каждую секунду выводить число от i до j (реализвать через setTimeout и setInterval).
//
function oneSec(i, j) {
    setTimeout(function repeat(i) {
            console.log(i++)
        if(i <= j) setTimeout(repeat, 1000, i)
    }, 1000, i)
}


function oneSec2(i, j) {
    let interval = setInterval(() => {
        console.log(i++)
        if(i > j)clearInterval(interval)
    }, 1000)

}
