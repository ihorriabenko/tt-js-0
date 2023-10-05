/*
    Приймає аргументом index(+-) як number та повертає елемент рядка під цим index як string або undefined
    undefined конвертується в 0
    Якщо число float, конвертує його до найближчого меншого цілого.
 */

let str = 'string'

console.log(str.at()) // 's'
console.log(str.at(0)) // 's'
console.log(str.at(0.9)) // 's'
console.log(str.at(-1)) // 'g'
console.log(str.at(10)) // undefined
console.log(str.at(-10)) // undefined

console.log(str.at('0')) // 's'
console.log(str.at('-1')) // 'g'
console.log(str.at(false)) // 's'
console.log(str.at(true)) // 't'
console.log(str.at(null)) // 's'
console.log(str.at(undefined)) // 's'
// console.log(str.at(1n)) // err
// console.log(str.at(Symbol('1'))) // err
console.log(str.at({})) // 's'
console.log(str.at([])) // 's'
console.log(str.at([1])) // 't'
console.log(str.at(NaN)) // 's'
console.log(str.at(Infinity)) // undefined
console.log(str.at(-Infinity)) // undefined

