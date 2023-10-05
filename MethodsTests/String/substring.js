/*
    Вирізає частину рядка з indexStart? до indexEnd?(not inclusive) і повертає новий рядок не мутуючи поточний.
    Відмінності від slice: 1. Якщо idxStart > idxEnd вони міняються місцями. 2. Якщо -index то index = 0
 */

let str = 'str123'

console.log(str.substring()) // 'str123'
console.log(str.substring(0, 3)) // 'str'
console.log(str.substring(3, 3)) // ''
console.log(str.substring(3)) // '123'
console.log(str.substring(-3)) // 'str123'
console.log(str.substring(3,-1)) // 'str'
console.log(str.substring(-3, 6)) // 'str123'
console.log(str.substring(-3, -6)) // ''
console.log(str.substring(-3, -1)) // ''
console.log(str.substring(-3, 3)) // 'str'
console.log(str.substring(6)) // ''
console.log(str.substring(null, 3)) // 'str'
console.log(str.substring(undefined, 3)) // 'str'
console.log(str.substring(null, '3')) // 'str'
console.log(str.substring(6, 3)) // '123'
console.log(str.substring(-Infinity, Infinity)) // 'str123'
console.log(str.substring(Infinity, -Infinity)) // 'str123'
console.log(str.substring([3])) // '123'
console.log(str.substring([3],[6])) // '123'
console.log(str.substring([], {})) // ''
console.log(str.substring({}, [])) // ''
console.log(str.substring(NaN, 3)) // 'str'
console.log(str.substring(0, NaN)) // ''



