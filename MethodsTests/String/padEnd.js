/*
    Доповнює рядок елементами з кінця до заданої довжини.
    Якщо довжина менше за string.length, повертається string як є.
    padString? - рядок, елемент яким буде доповнено головний рядок. Якщо undefined то ' '
 */

let tel = '06774707'

console.log(tel.padEnd(10, '*')) // '06774707**'
console.log(tel.padEnd(-10, '*')) // '06774707'
console.log(tel.padEnd(1, '*')) // '06774707'
console.log(tel.padEnd(10)) // '06774707  '

console.log(tel.padEnd('10', '*')) // '06774707**'
console.log(tel.padEnd(true, '*')) // '06774707'
console.log(tel.padEnd(9, true)) // '06774707t'
// console.log(tel.padEnd(10n, '*')) // err
console.log(tel.padEnd(9, null)) // '06774707n'
console.log(tel.padEnd(9, undefined)) // '06774707 '
console.log(tel.padEnd([10], '*')) // '06774707**'
console.log(tel.padEnd({}, '*')) // '06774707'
console.log(tel.padEnd(NaN, '*')) // '06774707'
// console.log(tel.padEnd(Infinity, '*')) // err
console.log(tel.padEnd(-Infinity, '*')) // '06774707'