// Math.trunc(x: number): number

/*
    Повертає повертає цілу частину числа.
 */

console.log(Math.trunc(1.123123)) // 1
console.log(Math.trunc()) // NaN
console.log(Math.trunc(0)) // 0
console.log(Math.trunc(-1)) // -1
console.log(Math.trunc(0,1)) // 0
console.log(Math.trunc('1')) // 1
console.log(Math.trunc('abc')) // NaN
console.log(Math.trunc(true)) // 1
console.log(Math.trunc(false)) // 0
console.log(Math.trunc(null)) // 0
console.log(Math.trunc(undefined)) // NaN
// console.log(Math.trunc(1n)) // TypeError: Cannot convert a BigInt value to a number
// console.log(Math.trunc(Symbol('1'))) // TypeError: Cannot convert a Symbol value to a number
console.log(Math.trunc({})) // NaN
console.log(Math.trunc([])) // 0
console.log(Math.trunc(Infinity)) // Infinity
console.log(Math.trunc(-Infinity)) // -Infinity
console.log(Math.trunc(-Infinity,Infinity)) // -Infinity
console.log(Math.trunc(() => {})) // NaN
console.log(Math.trunc(() => 5)) // NaN
console.log(Math.trunc(NaN)) // NaN


/*
    use keys
 */

// Метод Math.trunc() може бути корисним у ситуаціях,
// коли потрібно просто відкинути дробову частину числа без зміни його знаку.