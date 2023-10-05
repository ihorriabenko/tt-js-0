/*
    Парсить рядок, і повертає з нього float число. :number
    Якщо перший елемент не число і не оператори(+,-) або . або більше одного оператора або . повертає NaN
 */

console.log(Number.parseFloat('00010111001')) // 10111001
console.log(Number.parseFloat('12.5')) // 12.5
console.log(Number.parseFloat('-12.5')) // -12.5
console.log(Number.parseFloat('+12.5')) // 12.5
console.log(Number.parseFloat('+-12.5')) // NaN
console.log(Number.parseFloat('-+12.5')) // NaN
console.log(Number.parseFloat('--12.5')) // NaN
console.log(Number.parseFloat('++12.5')) // NaN
console.log(Number.parseFloat('*12.5')) // NaN
console.log(Number.parseFloat('/12.5')) // NaN
console.log(Number.parseFloat('012.5')) // 12.5
console.log(Number.parseFloat('a012.5')) // NaN
console.log(Number.parseFloat('.012.5')) // 0.012
console.log(Number.parseFloat(12.5)) // 12.5
console.log(Number.parseFloat(12n)) // 12
// console.log(Number.parseFloat(Symbol('12.5'))) // err
console.log(Number.parseFloat(true)) // NaN
console.log(Number.parseFloat(null)) // NaN
console.log(Number.parseFloat(undefined)) // NaN
console.log(Number.parseFloat([])) // NaN
console.log(Number.parseFloat({})) // NaN
console.log(Number.parseFloat([1.5])) // 1.5
console.log(Number.parseFloat([1.5,2.5])) // 1.5
console.log(Number.parseFloat(['1.5','2'])) // 1.5
console.log(Number.parseFloat(Infinity)) // Infinity
console.log(Number.parseFloat(-Infinity)) // -Infinity
console.log(Number.parseFloat(NaN)) // NaN