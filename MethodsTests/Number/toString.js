/*
    Повертає рядкове представлення числа.
    radix? - в яку сч(2-36) конвертувати число
 */

let num = 156

console.log(num.toString()) // '156'
console.log(num.toString(2)) // '10011100'

console.log((254).toString(16)) // 'fe'
console.log((-0xff).toString(2)) // '11111111'

num = new Number(156)
num.toString = () => 'Overridden'
console.log(num.toString()) // 'Overridden'
