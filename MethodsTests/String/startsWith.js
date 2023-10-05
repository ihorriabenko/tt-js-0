/*
    Визначає чи починається рядок на передане значення, повертає boolean
    startIndex? - index елементу з якого починати пошук (def - 0)
 */

let str = 'str asd'

console.log(str.startsWith('s')) // true
console.log(str.startsWith('a')) // false
console.log(str.startsWith('a', 2)) // (r) false
console.log(str.startsWith('a', 3)) // ( ) false
console.log(str.startsWith('a', 4)) // (a) true

str = '1true 2false'
console.log(str.startsWith(1)) // true
console.log(str.startsWith(true)) // false
console.log(str.startsWith(true,1)) // true
console.log(str.startsWith(false, 7)) // true

str = '0str'
console.log(str.startsWith(-0)) // true
console.log(str.startsWith(0.1)) // false
console.log(str.startsWith(-0.1)) // false
console.log(str.startsWith(null)) // false
console.log(str.startsWith(undefined)) // false
console.log(str.startsWith('')) // true
console.log(str.startsWith(' ')) // false
console.log(str.startsWith([])) // true
console.log(str.startsWith({})) // false
console.log(str.startsWith(0n)) // true
// console.log(str.startsWith(Symbol('0'))) // err
console.log(String.prototype.startsWith('', undefined)) // true

