/*
    Доповнює рядок елементами з початку до заданої довжини.
    Якщо довжина менше за string.length, повертається string як є.
    padString? - рядок, елемент яким буде доповнено головний рядок. Якщо undefined то ' '
 */

let tel = '7470767'

console.log(tel.padStart(10, '*')) // '***7470767'
console.log(tel.padStart(-10, '*')) // '7470767'
console.log(tel.padStart(1, '*')) // '7470767'
console.log(tel.padStart(10)) //    '7470767'

console.log(tel.padStart('10', '*')) // '***7470767'
console.log(tel.padStart(true, '*')) // '7470767'
// console.log(tel.padStart(10n, '*')) // err
console.log(tel.padStart(null, '*')) // '7470767'
console.log(tel.padStart(undefined, '*')) // '7470767'
console.log(tel.padStart([10], '*')) // '***7470767'
console.log(tel.padStart({}, '*')) // '7470767'
console.log(tel.padStart(NaN, '*')) // '7470767'
// console.log(tel.padStart(Infinity, '*')) // err
console.log(tel.padStart(-Infinity, '*')) // '7470767'
