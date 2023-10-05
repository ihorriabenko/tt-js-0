/*
    Приймає аргументом index як number і повертає utf-16 code елементу рядка як number
    undefined конвертується в 0
    якщо index float то округлюється до найближчого меншого цілого
 */

let str = '0123'

console.log(str.charCodeAt()) // 48
console.log(str.charCodeAt(0)) // 48
console.log(str.charCodeAt(0.9)) // 48
console.log(str.charCodeAt(-1)) // NaN
console.log(str.charCodeAt(10)) // NaN
console.log(str.charCodeAt(-10)) // NaN

console.log(str.charCodeAt('0')) // 48
console.log(str.charCodeAt('-1')) // NaN
console.log(str.charCodeAt(false)) // 48
console.log(str.charCodeAt(true)) // 49
console.log(str.charCodeAt(null)) // 48
console.log(str.charCodeAt(undefined)) // 48
// console.log(str.charCodeAt(1n)) // err
// console.log(str.charCodeAt(Symbol('1'))) // err
console.log(str.charCodeAt({})) // 48
console.log(str.charCodeAt([])) // 48
console.log(str.charCodeAt([1])) // 49
console.log(str.charCodeAt(NaN)) // 48
console.log(str.charCodeAt(Infinity)) // NaN
console.log(str.charCodeAt(-Infinity)) // NaN


