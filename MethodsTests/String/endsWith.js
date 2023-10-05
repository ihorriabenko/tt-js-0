/*
    Визначає чи закінчується рядок на передане значення, повертає boolean
    startIndex? - index елементу з якого починати пошук (def - 0)
 */

let str = 'str asd'

console.log(str.endsWith('s')) // false
console.log(str.endsWith('a')) // false
console.log(str.endsWith('asd')) // true
console.log(str.endsWith('a', 3)) // ( ) false
console.log(str.endsWith('a', 4)) // (a) false

str = '0false true1'
console.log(str.endsWith(1)) // true
console.log(str.endsWith(true)) // false

str = 'str0'
console.log(str.endsWith(-0)) // true
console.log(str.endsWith(0.1)) // false
console.log(str.endsWith(-0.1)) // false
console.log(str.endsWith(null)) // false
console.log(str.endsWith(undefined)) // false
console.log(str.endsWith('')) // true
console.log(str.endsWith(' ')) // false
console.log(str.endsWith([])) // true
console.log(str.endsWith({})) // false
console.log(str.endsWith(0n)) // true
// console.log(str.endsWith(Symbol('0'))) // err
console.log(String.prototype.endsWith('', undefined)) // true

