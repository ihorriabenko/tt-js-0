/*
    Парсить рядок, і повертає з нього ціле число. :number
    Необовʼязковий аргумент radix(сч числа) повертає в 10сч.
    Якщо перший елемент не число і не оператори(+,-) або більше одного оператора повертає NaN.
 */

console.log(Number.parseInt('10111001',2)) // 185
console.log(Number.parseInt('000010111001')) // 10111001
console.log(Number.parseInt('12.5')) // 12
console.log(Number.parseInt('-12.5')) // -12
console.log(Number.parseInt('+12.5')) // 12
console.log(Number.parseInt('+-12.5')) // NaN
console.log(Number.parseInt('-+12.5')) // NaN
console.log(Number.parseInt('--12.5')) // NaN
console.log(Number.parseInt('++12.5')) // NaN
console.log(Number.parseInt('*12.5')) // NaN
console.log(Number.parseInt('/12.5')) // NaN
console.log(Number.parseInt('012.5')) // 12
console.log(Number.parseInt('a012.5')) // NaN
console.log(Number.parseInt('.012.5')) // NaN
console.log(Number.parseInt(12.5)) // 12
console.log(Number.parseInt(12n)) // 12
// console.log(Number.parseInt(Symbol('12'))) // err
console.log(Number.parseInt(true)) // NaN
console.log(Number.parseInt(null)) // NaN
console.log(Number.parseInt(undefined)) // NaN
console.log(Number.parseInt([])) // NaN
console.log(Number.parseInt({})) // NaN
console.log(Number.parseInt([1])) // 1
console.log(Number.parseInt([1,2])) // 1
console.log(Number.parseInt(['1','2'])) // 1
console.log(Number.parseInt(Infinity)) // NaN
console.log(Number.parseInt(-Infinity)) // NaN
console.log(Number.parseInt(NaN)) // NaN

