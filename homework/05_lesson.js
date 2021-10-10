// 1. На вход поступает массив, вывести массив, удалив неуникальные значения.
function uniqueValues(array) {
    return Array.from(new Set(array))
}

//2. На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать.
function reverse(array) {
    let newArray= []
    array.forEach((elem, index) => newArray[array.length-1-index] = elem)
    return newArray
}

// 3. На вход поступает массив, содержащий массивы, в которых хранится два элемента.
//     Преобразовать массив в объект, где ключами являются нулевой индекс вложенныхых массивов,
//     а значениями являются элементы с индексом один.
function objectFromArray(array) {
    return Object.fromEntries(array)
}

// 4. На вход поступает объект, вывести сумму числовых свойств объекта.
function sumOfValues(object) {
    return  Object.values(object).reduce((sum, elem) => typeof elem === 'number' ? sum + elem : sum, 0)
}

// 5. На вход поступает массив с числами, вывести среднее арифметическое элементов массива.
function arithmeticMean(array) {
    return array.reduce((sum, elem) => sum + elem) / array.length;
}

// 6. Создать функцию-конструктор для объекта "калькулятор", объект должен иметь поле, хранящее текущее значение и методы сложения,
//     вычитания, умножения и деления, принимающие число и манипулирующий свойством значения в соответствии с назначением метода,
//     а так же функцию, сбрасывающую значение в ноль.
function Calc(){
    this.value = 0;
    this.sum = function (num){
       return  this.value += num
    };
    this.subtraction = function (num){
        return this.value -= num
    };
    this.multiplication = function (num){
        return this.value *= num
    };
    this.division  = function (num){
        return this.value /= num
    };
    this.reset  = function (){
        return this.value = 0
    };
}

// 7. Функция принимает смешанный массив (содержащий значения чисел, строк и объектов),
// вернуть объект с полями numbers, strings и objects, содержащими массив со значениями,
//     соответствующими названию поля.
function objFromArray2(array) {
   return  array.reduce(function (obj, elem) {
        if (typeof elem === 'number') obj.numbers.push(elem)
        if (typeof elem === 'string') obj.strings.push(elem)
        if (typeof elem === 'object') obj.objects.push(elem)
       return obj
    }, {numbers: [], strings: [], objects: [] })
}

// 8. Функция принимает массив чисел и два числовых значения, вернуть новый массив, содержащий элементы первого массива,
//     значение которых попадает под диапазон переданных в функцию чисел (второе переданное число может быть больше первого)
function filter(array, num1, num2) {
    return array.filter(elem => elem >= num1 && elem <= num2)
}

// 9. Функция принимает две строки. Вывести true, если строки являются анаграммами, в противном случае false
function anagram(str1, str2) {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')
}

// 10. Создать объект, выводящий в консоль все ключи и значения объекта в формате "ключ: значение" через запятую
// (считать, что значением ключа объекта не может быть объектом или массивом, содержащими объекты)
// сама функция в консоль выводиться не должна.
let obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    log() {
        let x = []
        for (let [key, value] of Object.entries(this)) {
            x.push(`"${key}: ${value}"`)
        }
        console.log(x.toString())
    }
}

Object.defineProperty(obj, 'log', {
        enumerable: false,
})

// 11. Создать функцию-конструктор для объекта, содержащего методы serProp (установить значение свойства),
// метод принимает ключь (строка), значение (произвольное) и объект со свойствами writable, configurable,
//     enumerable (разрешение перезаписи свойства, разрешение перечисления свойства и разрешение удаления свойства).
// Если какое-то из свойств в объекте отсутствует, действие должно быть разрешено
function Obj(){
    this.setProp = function (str, value, object){
        Object.defineProperty(this, str, {
            value: value,
            writable: object['writable'] ?? true,
            enumerable: object['enumerable'] ?? true,
            configurable: object['configurable'] ?? true,
        });
    }
}
