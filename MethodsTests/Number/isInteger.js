/*
    Чи є переданий аргумент цілим числом? :boolean
    (не конвертує аргумент в число)
 */

console.log(Number.isInteger(-0.0)) // true
console.log(Number.isInteger(1.5)) // false
console.log(Number.isInteger(Infinity)) // false
console.log(Number.isInteger(-Infinity)) // false
console.log(Number.isInteger(NaN)) // false

console.log(Number.isInteger(5.0000000000000001)) // true
console.log(Number.isInteger(Number.MAX_SAFE_INTEGER + 0.5)) // true
console.log(Number.isInteger(Number.MAX_SAFE_INTEGER - 0.5)) // true
console.log(Number.isInteger('1')) // false
console.log(Number.isInteger(true)) // false
console.log(Number.isInteger({})) // false
console.log(Number.isInteger([1])) // false
