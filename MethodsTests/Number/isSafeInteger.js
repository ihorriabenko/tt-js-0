/*
    Чи є переданий аргумент цілим, безпечним числом? :boolean
    (не конвертує аргумент в число)
 */

console.log(Number.isSafeInteger( -0.0)) // true
console.log(Number.isSafeInteger( 1.5)) // false
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)) // true
console.log(Number.isSafeInteger(-Number.MAX_SAFE_INTEGER)) // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)) // false
console.log(Number.isSafeInteger(-Number.MAX_SAFE_INTEGER - 1)) // false

console.log(Number.isSafeInteger( '1')) // false
console.log(Number.isSafeInteger( true)) // false
console.log(Number.isSafeInteger({})) // false
console.log(Number.isSafeInteger( [1])) // false

