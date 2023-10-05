/*
    Повертає index: number переданого аргументу як перше знаходження
 */

let str = 'sts'

console.log(str.indexOf('s')) // 0
console.log(str.indexOf('s', -1)) // 0
console.log(str.indexOf('s', -10)) // 0
console.log(str.indexOf('s', 10)) // -1
console.log(str.indexOf('s', 1)) // 2
console.log(str.indexOf('st')) // 0
console.log(str.indexOf('St')) // -1

str = '0str1'
console.log(str.indexOf(0)) // 0
console.log(str.indexOf(1)) // 4
console.log(str.indexOf(-1)) // -1
console.log(str.indexOf(1n)) // 4
console.log(str.indexOf([])) // 0
console.log(str.indexOf([1])) // 4
console.log(str.indexOf({})) // -1

str = 'true false null undefined NaN Infinity'
console.log(str.indexOf(true)) // 0
console.log(str.indexOf(false)) // 5
console.log(str.indexOf(null)) // 11
console.log(str.indexOf(undefined)) // 16
console.log(str.indexOf(NaN)) // 26
console.log(str.indexOf(-NaN)) // 26
console.log(str.indexOf(Infinity)) // 30
console.log(str.indexOf(-Infinity)) // -1
console.log(str.indexOf('')) // 0
console.log(str.indexOf('', 15)) // 15
console.log(str.indexOf('', 999)) // 38
