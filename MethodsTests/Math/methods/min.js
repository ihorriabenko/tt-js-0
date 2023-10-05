// Math.min(...values: number[]): number

/*
    Повертає найменше число з аргументів
 */


/*
    tests
 */

console.log(Math.min()) // Infinity
console.log(Math.min(0)) // 0
console.log(Math.min(0,1)) // 0
console.log(Math.min('1')) // 1
console.log(Math.min('abc')) // NaN
console.log(Math.min(true)) // 1
console.log(Math.min(false)) // 0
console.log(Math.min(null)) // 0
console.log(Math.min(undefined)) // NaN
// console.log(Math.min(1n)) // TypeError: Cannot convert a BigInt value to a number
// console.log(Math.min(Symbol('1'))) // TypeError: Cannot convert a Symbol value to a number
console.log(Math.min({})) // NaN
console.log(Math.min([])) // 0
console.log(Math.min(Infinity)) // Infinity
console.log(Math.min(-Infinity)) // -Infinity
console.log(Math.min(-Infinity,Infinity)) // -Infinity
console.log(Math.min(() => {})) // NaN
console.log(Math.min(() => 5)) // NaN
console.log(Math.min(NaN)) // NaN


/*
    use keys
 */

// Знаходження мінімального значення в наборі даних
let numbers = [1,3,4,3,53,654,21,53]
console.log(Math.min(...numbers)) // 1