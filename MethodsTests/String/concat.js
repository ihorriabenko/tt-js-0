/*
    Конкатенує рядки, повертає новий рядок
 */

let str = 'str'

console.log(str.concat(' 123')) // 'str 123'
console.log(str) // 'str'
console.log(str.concat()) // 'str'
console.log(String.prototype.concat()) // ''
console.log(String.prototype.concat(123)) // '123'
console.log(String.prototype.concat(123,456)) // '123456'
console.log(String.prototype.concat(true)) // 'true'
console.log(String.prototype.concat(null)) // 'null'
console.log(String.prototype.concat(undefined)) // 'undefined'
console.log(String.prototype.concat({})) // '[object Object]'
console.log(String.prototype.concat([])) // ''
console.log(str.concat(1n)) // 'str1'
// console.log(str.concat(Symbol('123'))) // err
console.log(str.concat(() => {})) // 'str()=>{}'
console.log(str.concat(Infinity)) // 'strInfinity'
console.log(str.concat(-Infinity)) // 'str-Infinity'
console.log(str.concat(NaN)) // 'strNaN'
console.log(str.concat(-NaN)) // 'strNaN'
