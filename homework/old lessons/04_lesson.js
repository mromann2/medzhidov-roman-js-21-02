//1
//const text = prompt('введите две строки через запятую');
//alert(text.toLowerCase().split(',')[0].includes(text.toLowerCase().split(',')[1]))

//2
//const text = prompt('введите строку');
//const count = prompt('введите количество символов');
//alert(text.slice(0, count) + '...')

//3
// const reg2 = /[\/-]/g
// const text = '12/02/2021 12-00'
// alert(text.replace(reg2, char => char === '-' ? ':' : '.'))


//4
//const reg = /^[а-яA-Я]+ [а-яA-Я]+( [а-яA-Я]+[(вна)(вич)]+)?$/
//const text = prompt('введите ФИО');
//alert(reg.test(text))

//5
//reg = /(?=[A-ZА-Я])/
//const text = prompt('введите строку в CamelCase');
//alert(text.split(reg).join('_').toLowerCase())

//6
// reg = /<!--(.*)-->/gm
// const text = prompt('введите строку');
// alert(text.match(reg))

//7
// reg = /\d+((.)\d+)?/g
// const text = prompt('введите строку');
// alert(text.match(reg))

//8
// reg = /\d{4}-?\d{4}-?\d{4}-?\d{4}-?/
// const text = prompt('введите идентификатор');
// alert(text.match(reg) ? 'ведется поиск' : 'неверный идентификатор')
