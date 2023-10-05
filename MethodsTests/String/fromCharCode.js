/*
    Приймає число-а char code-s, і повертає їх рядкове значення
 */

console.log(String.fromCharCode(48, 49, 50)) // '012'
console.log(String.fromCharCode(48.5)) // '0'
console.log(String.fromCharCode(-100)) // 'ﾜ'
console.log(String.fromCharCode('48')) // '0'
console.log(String.fromCharCode(true)) // ''
console.log(String.fromCharCode(false)) // ''
console.log(String.fromCharCode(true + 47)) // '0'
console.log(String.fromCharCode(48 - false)) // '0'
console.log(String.fromCharCode(48 - null)) // '0'
console.log(String.fromCharCode(48 - undefined)) // ''
console.log(String.fromCharCode(48 - undefined)) // ''
// console.log(String.fromCharCode(48n)) // err
// console.log(String.fromCharCode(Symbol('48'))) // err
console.log(String.fromCharCode([48])) // '0'
console.log(String.fromCharCode({'48': 48})) // ''
console.log(String.fromCharCode(Infinity)) // ''
console.log(String.fromCharCode(-Infinity)) // ''
console.log(String.fromCharCode(NaN)) // ''

