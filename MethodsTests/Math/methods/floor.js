// Math.floor(x: number): number

/*
    Округлює число до найближчого меншого цілого
 */


/*
    tests
 */

console.log(Math.floor(0)) // 0
console.log(Math.floor(1)) // 1
console.log(Math.floor(1.9)) // 1
console.log(Math.floor('1.9')) // 1
console.log(Math.floor(-1)) // 1
console.log(Math.floor(-1.1)) // -2
console.log(Math.floor(-1.0)) // -1
console.log(Math.floor('-1')) // -1
console.log(Math.floor(true)) // 1
console.log(Math.floor(false)) // 0
console.log(Math.floor(null)) // 0
console.log(Math.floor(undefined)) // NaN
console.log(Math.floor(NaN)) // NaN
// console.log(Math.floor(1n)) // TypeError: Cannot convert a BigInt value to a number
// console.log(Math.floor(Symbol('1'))) // TypeError: Cannot convert a Symbol value to a number
console.log(Math.floor(NaN)) // NaN
console.log(Math.floor({})) // NaN
console.log(Math.floor([])) // 0
console.log(Math.floor([1])) // 1
console.log(Math.floor(['-1'])) // -1
console.log(Math.floor(() => {})) // NaN
console.log(Math.floor(() => 5)) // NaN


/*
    use keys
 */

// Генерувати випадкове ціле число в межах вказаного діапазону
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}