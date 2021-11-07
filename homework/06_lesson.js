// 1. Реализовать функцию, принимающую число (индекс в последовательности Фибоначчи),
// функция должна вернуть значение числа. Использовать рекурсию.
function fibonacci(index){
    if (index === 1){
        return 0
    } else if (index <= 3){
        return 1
    } else {
        return fibonacci(index-1) + fibonacci(index-2)
    }
}

// 2. Модернизировать написанную функцию, добавив кэширование (функция “”запоминает””
// входной параметр и вычесленное значение, при следующем вызыве с этим же параметром,
//     функция не вычисляет значение, а возвращает из памяти)
const  fibonacci2 = (()=>{
    const cash = {}
    return (index) => {
        if (cash[index]){
            return cash[index]
        }else  if (index === 1) {
            return 0
        } else if (index <= 3) {
            return 1
        } else {
            return cash[index] = fibonacci2(index - 1) + fibonacci2(index - 2)
        }
    }
})()

// 3. Разработать рекурсивную функцию, принимающую массив, содержащий массивы из двух
// элементов, в каждом из которых первый элемент является строкой, а второй строкой, числом,
// логическим значением, объектом, или таким же массивом. Функция должна преобразовать
// массив в объект.
function objectFromArray(array) {
    return Object.fromEntries(array.map((elem) => {
        let [a, b] = elem
        if(typeof b != 'object'){
            return[a, b]
        }else {
            return [a, objectFromArray(b)]
        }
    }))
}
