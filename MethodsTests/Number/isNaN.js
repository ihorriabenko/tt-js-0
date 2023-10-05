/*
    Чи є переданий аргумент NaN? :boolean
    (не конвертує аргумент в число на відміну від isNaN)
 */

console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(Number.NaN)) // true
console.log(Number.isNaN('A' * 1)) // true

console.log(Number.isNaN('a')) // false
console.log(Number.isNaN(1)) // false
console.log(Number.isNaN(undefined)) // false
console.log(Number.isNaN(null)) // false
console.log(Number.isNaN({})) // false
console.log(Number.isNaN([NaN])) // false

console.log(NaN == NaN) // false
console.log(NaN === NaN) // false
