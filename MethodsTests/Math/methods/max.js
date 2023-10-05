// Math.max(...values: number[]): number

/*
    Повертає найбільше число з аргументів
 */


/*
    tests
 */

console.log(Math.max()) // -Infinity
console.log(Math.max(0)) // 0
console.log(Math.max(0,1)) // 1
console.log(Math.max('1')) // 1
console.log(Math.max('abc')) // NaN
console.log(Math.max(true)) // 1
console.log(Math.max(false)) // 0
console.log(Math.max(null)) // 0
console.log(Math.max(undefined)) // NaN
// console.log(Math.max(1n)) // TypeError: Cannot convert a BigInt value to a number
// console.log(Math.max(Symbol('1'))) // TypeError: Cannot convert a Symbol value to a number
console.log(Math.max({})) // NaN
console.log(Math.max([])) // 0
console.log(Math.max(Infinity)) // Infinity
console.log(Math.max(-Infinity)) // -Infinity
console.log(Math.max(-Infinity,Infinity)) // Infinity
console.log(Math.max(() => {})) // NaN
console.log(Math.max(() => 5)) // NaN
console.log(Math.max(NaN)) // NaN


/*
    use keys
 */

// Знаходження максимального значення в наборі даних
let numbers = [1,3,4,3,53,654,21,53]
console.log(Math.max(...numbers)) // 654