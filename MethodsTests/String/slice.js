/*
    Вирізає частину рядка з indexStart? до indexEnd?(not inclusive) і повертає новий рядок не мутуючи поточний.
 */

let str = 'str123'

console.log(str.slice()) // 'str123'
console.log(str.slice(0, 3)) // 'str'
console.log(str.slice(3)) // '123'
console.log(str.slice(-3)) // '123'
console.log(str.slice(3,-1)) // '12'
console.log(str.slice(-3, 6)) // '123'
console.log(str.slice(-3, -6)) // ''
console.log(str.slice(-3, -1)) // '12'
console.log(str.slice(-3, 3)) // ''
console.log(str.slice(6)) // ''
console.log(str.slice(null, 3)) // 'str'
console.log(str.slice(undefined, 3)) // 'str'
console.log(str.slice(null, '3')) // 'str'
console.log(str.slice(6, 3)) // ''
console.log(str.slice(-Infinity, Infinity)) // 'str123'
console.log(str.slice(Infinity, -Infinity)) // ''
console.log(str.slice([3])) // '123'
console.log(str.slice([3],[6])) // '123'
console.log(str.slice([], {})) // ''
console.log(str.slice({}, [])) // ''
console.log(str.slice(NaN, 3)) // 'str'
console.log(str.slice(0, NaN)) // ''



