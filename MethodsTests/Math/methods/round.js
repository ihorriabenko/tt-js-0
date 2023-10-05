// Math.round(x: number): number

/*
    Повертає число, округленное до найближчого цілого.
 */


/*
    tests
 */

console.log(Math.round(1)) // 1
console.log(Math.round(1.5)) // 2
console.log(Math.round(-1)) // -1
console.log(Math.round(-1.5)) // -1
console.log(Math.round(-1.6)) // -2
console.log(Math.round('1.5')) // 2
// console.log(Math.round(1n)) // TypeError: Cannot convert a BigInt value to a number
// console.log(Math.round(Symbol('1'))) // TypeError: Cannot convert a Symbol value to a number
console.log(Math.round(true)) // 1
console.log(Math.round(false)) // 0
console.log(Math.round(NaN)) // NaN
console.log(Math.round(undefined)) // NaN
console.log(Math.round({})) // NaN
console.log(Math.round([])) // 0
console.log(Math.round([1.5])) // 2
console.log(Math.round([1.5, 2])) // NaN
console.log(Math.round(['1.5'])) // 2
console.log(Math.round(() => {})) // NaN
console.log(Math.round(Infinity)) // Infinity
console.log(Math.round(-Infinity)) // -Infinity


/*
    use keys
 */

// коли необхідно взяти найближче ціле