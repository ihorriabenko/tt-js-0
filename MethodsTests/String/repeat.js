/*
    Повертає новий рядок, який містить указану кількість копій цього рядка з’єднаних разом.
    count: number - кількість копій
 */

let str = 'str'

// console.log(str.repeat(-1)) // RangeError
console.log(str.repeat()) // ''
console.log(str.repeat(0)) // ''
console.log(str.repeat(1)) // 'str'
console.log(str.repeat(2)) // 'strstr'

console.log(str.repeat(false)) // ''
console.log(str.repeat(true)) // 'str'
console.log(str.repeat('2')) // 'strstr'
console.log(str.repeat(null)) // ''
console.log(str.repeat([1])) // 'str'
console.log(str.repeat({})) // ''
// console.log(str.repeat(1n)) // TypeError
// console.log(str.repeat(Symbol('1'))) // TypeError
// console.log(str.repeat(Infinity)) // RangeError
// console.log(str.repeat(-Infinity)) // RangeError
