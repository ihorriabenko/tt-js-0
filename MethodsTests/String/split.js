/*
    Розділяє рядок на масив підрядків по divider.
    limit? - довжина масиву.
 */

let str = 'My name is Ihor. Your name is Petr.'
console.log(str.split('name is')) // [ 'My ', ' Ihor. Your ', ' Petr.' ]

str = 'str 123'
console.log(str.split()) // ['str 123']
console.log(str.split(' ')) // ['str', '123']
console.log(str.split('')) // ['s','t','r',' ','1','2','3']
console.log(str.split('',0)) // []

console.log(''.split()) // ['']
console.log(''.split('')) // []
