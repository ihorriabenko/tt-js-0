/*
    Повертає index: number переданого аргументу як перше знаходження.
    Шукає справа на ліво
 */

let str = 'sts'

console.log(str.lastIndexOf('s')) // 2
console.log(str.lastIndexOf('s', -1)) // 0
console.log(str.lastIndexOf('s', -10)) // 0
console.log(str.lastIndexOf('s', 10)) // 2
console.log(str.lastIndexOf('s', 1)) // 0
console.log(str.lastIndexOf('st')) // 0
console.log(str.lastIndexOf('St')) // -1

str = '0str10'
console.log(str.lastIndexOf(0)) // 5
console.log(str.lastIndexOf(1)) // 4
console.log(str.lastIndexOf(-1)) // -1
console.log(str.lastIndexOf(1n)) // 4
console.log(str.lastIndexOf([])) // 6
console.log(str.lastIndexOf([1])) // 4
console.log(str.lastIndexOf({})) // -1

str = 'true false null undefined NaN Infinity'
console.log(str.lastIndexOf(true)) // 0
console.log(str.lastIndexOf(false)) // 5
console.log(str.lastIndexOf(null)) // 11
console.log(str.lastIndexOf(undefined)) // 16
console.log(str.lastIndexOf(NaN)) // 26
console.log(str.lastIndexOf(-NaN)) // 26
console.log(str.lastIndexOf(Infinity)) // 30
console.log(str.lastIndexOf(-Infinity)) // -1
console.log(str.lastIndexOf('')) // 38
console.log(str.lastIndexOf('', 15)) // 15
console.log(str.lastIndexOf('', 999)) // 38
