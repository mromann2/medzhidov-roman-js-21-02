// Реализовать объект animal, с полем клички, методом eat, выводящим сообщение "/*кличка*/ ест" и методом say, выводящим фразу,
//     "неизвестное животное молчит", путём прототипного наследования создать объекты кота, собаки и попугая. Переопределить в них метод say,
//     в зависимости от типа животного. Для кота добавить новый метод hunt, выводящий сообщение "/*кличка*/ охотится".
//     Все перечисленные методы и свойства должны быть защищены от удаления и перезаписи. Методы должны быть неперечисляемыми.
//     Разработать метод rename, для смены клички животного. Новая кличка должна содержать только кирилические символы, пробелы или символ "-".
//     Выполнить то же самое использую функции конструкторы. Выполнить то же самое, используя классы.

//1. Объект
'use strict'
const animal  = {
    _name: 'noname',
    eat(){
        console.log(`${this.name} ест`)
    },
    say(){
        console.log('неизвестное животное молчит')
    },
    set name(newName){
        const reg = /^[а-яА-Я\s-]+$/g
        return reg.test(newName) ? this._name = newName  : 'Новая кличка должна содержать только кирилические символы, пробелы или символ "-"'
    },
    get name(){
        return this._name
    }
}
Object.defineProperties(animal, {
    '_name': {
        writable: true,
        configurable: false,
        enumerable: false
    },
    'eat': {
        writable: false,
        configurable: false,
        enumerable: false
    },
    'say': {
        writable: false,
        configurable: false,
        enumerable: false
    }
});


const cat  = {
    say(){
        console.log('мяу')
    },
    hunt(){
        console.log(`${this.name} охотится`)
    },
}
Object.setPrototypeOf(cat, animal)
Object.defineProperties(cat, {
    'say': {
        writable: false,
        configurable: false,
        enumerable: false
    },
    'hunt': {
        writable: false,
        configurable: false,
        enumerable: false
    }
});

const dog  = {
    say(){
       return  console.log('гав')
    }
}
Object.setPrototypeOf(dog, animal)
Object.defineProperties(dog, {
    'say': {
        writable: false,
        configurable: false,
        enumerable: false
    }
});

const parrot  = {
    say(){
        console.log('чирик')
    }
}
Object.setPrototypeOf(parrot, animal)
Object.defineProperties(parrot, {
    'say': {
        writable: false,
        configurable: false,
        enumerable: false
    }
});

//Функция конструктор