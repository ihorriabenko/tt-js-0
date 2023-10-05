/*
    Намагається конвертувати передане значення в number. :number
 */

console.log(Number('1')) // 1
console.log(Number('1.5')) // 1.5
console.log(Number('-0.0')) // 0
console.log(Number('-0.5')) // 0.5
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
console.log(Number(NaN)) // NaN
console.log(Number({})) // NaN
console.log(Number([])) // 0
console.log(Number([1])) // 1
console.log(Number(['1'])) // 1
console.log(Number([1,2])) // NaN
console.log(Number(() => {})) // NaN
console.log(Number(Infinity)) // Infinity
console.log(Number(-Infinity)) // -Infinity
