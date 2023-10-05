/*
    Чи є переданий аргумент цілим, кінцевим числом? :boolean
    (не конвертує аргумент в число на відміну від isFinite)
 */

console.log(Number.isFinite(-1.0)) // true
console.log(Number.isFinite(Infinity)) // false
console.log(Number.isFinite(-Infinity)) // false
console.log(Number.isFinite(NaN)) // false

console.log(Number.isFinite('1')) // false
console.log(Number.isFinite(true)) // false
console.log(Number.isFinite(1n)) // false
console.log(Number.isFinite(Symbol('1'))) // false
console.log(Number.isFinite([1])) // false
console.log(Number.isFinite({})) // false
console.log(Number.isFinite(Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER)) // true
console.log(Number.isFinite(-Number.MAX_SAFE_INTEGER - Number.MAX_SAFE_INTEGER)) // true

