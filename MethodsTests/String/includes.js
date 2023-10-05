/*
    Визначає чи було знайдено передане значення в межах рядка на якому було викликано метод. :boolean
    indexStart?
 */

let str = 'str123'

console.log(str.includes('s')) // true
console.log(str.includes('s', 1)) // false
console.log(str.includes('t', 1)) // true
console.log(str.includes(1)) // true
console.log(str.includes(-1)) // false
console.log(str.includes(1n)) // true
// console.log(str.includes(Symbol('1'))) // err

str = 'true false null undefined NaN'

console.log(str.includes(true)) // true
console.log(str.includes(false)) // true
console.log(str.includes(null)) // true
console.log(str.includes(undefined)) // true
console.log(str.includes(NaN)) // true
console.log(str.includes(-NaN)) // true
console.log(str.includes(Infinity)) // false
console.log(str.includes(-Infinity)) // false

console.log(str.includes('')) // true
console.log(str.includes([])) // true
console.log(str.includes({})) // false
