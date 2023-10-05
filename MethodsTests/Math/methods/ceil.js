// Math.ceil(x: number): number

/*
    Округлює число до найближчого більшого цілого
 */


/*
    tests
 */

console.log(Math.ceil(0)) // 0
console.log(Math.ceil(1)) // 1
console.log(Math.ceil(1.1)) // 2
console.log(Math.ceil('1.1')) // 2
console.log(Math.ceil(-1)) // -1
console.log(Math.ceil(-1.1)) // -1
console.log(Math.ceil(-1.0)) // -1
console.log(Math.ceil('-1')) // -1
console.log(Math.ceil(true)) // 1
console.log(Math.ceil(false)) // 0
console.log(Math.ceil(null)) // 0
console.log(Math.ceil(undefined)) // NaN
console.log(Math.ceil(NaN)) // NaN
// console.log(Math.ceil(1n)) // TypeError: Cannot convert a BigInt value to a number
// console.log(Math.ceil(Symbol('1'))) // TypeError: Cannot convert a Symbol value to a number
console.log(Math.ceil(NaN)) // NaN
console.log(Math.ceil({})) // NaN
console.log(Math.ceil([])) // 0
console.log(Math.ceil([1])) // 1
console.log(Math.ceil(['-1'])) // -1
console.log(Math.ceil(() => {})) // NaN
console.log(Math.ceil(() => 5)) // NaN


/*
    use keys
 */

// Генерувати випадкове ціле число в межах вказаного діапазону
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}