// Math.abs(x: number): number

/*
    Перетворює від'ємні числа на додатні і залишає додатні числа без змін.
 */


/*
    tests
 */

console.log(Math.abs()) // NaN
console.log(Math.abs(-2)) // 2
console.log(Math.abs("-1")) // 1
console.log(Math.abs("")) // 0
console.log(Math.abs("string")) // NaN
console.log(Math.abs(true)) // 1
console.log(Math.abs(false)) // 0
console.log(Math.abs(null)) // 0
console.log(Math.abs(undefined)) // NaN
console.log(Math.abs({})) // NaN
console.log(Math.abs([])) // 0
console.log(Math.abs([2])) // 2
console.log(Math.abs([1,2])) // NaN
console.log(Math.abs(['2'])) // 2
console.log(Math.abs([1, 2])) // NaN
// console.log(Math.abs(1n)) // TypeError: Cannot convert a BigInt value to a number
// console.log(Math.abs(Symbol('1'))) // TypeError: Cannot convert a Symbol value to a number
console.log(Math.abs(Infinity)) // Infinity
console.log(Math.abs(-Infinity)) // Infinity
console.log(Math.abs(() => {})) // NaN


/*
    use keys
 */

// Для перетворення від'ємних чисел на додатні

