/*
    Приймає аргументом index як number та повертає елемент рядка під цим index як string
    undefined конвертується в 0
    Якщо число float, конвертує його до найближчого меншого цілого.
    charAt не приймає -index на відміну від at, він є більш старим методом, та повертає '' замість undefined
 */

let str = 'string'

console.log(str.charAt()) // 's'
console.log(str.charAt(0)) // 's'
console.log(str.charAt(0.9)) // 's'
console.log(str.charAt(-1)) // ''
console.log(str.charAt(10)) // ''
console.log(str.charAt(-10)) // ''

console.log(str.charAt('0')) // 's'
console.log(str.charAt('-1')) // ''
console.log(str.charAt(false)) // 's'
console.log(str.charAt(true)) // 't'
console.log(str.charAt(null)) // 's'
console.log(str.charAt(undefined)) // 's'
// console.log(str.charAt(1n)) // err
// console.log(str.charAt(Symbol('1'))) // err
console.log(str.charAt({})) // 's'
console.log(str.charAt([])) // 's'
console.log(str.charAt([1])) // 't'
console.log(str.charAt(NaN)) // 's'
console.log(str.charAt(Infinity)) // ''
console.log(str.charAt(-Infinity)) // ''