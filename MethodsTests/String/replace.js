/*
    Повертає новий рядок з однією чи всіма замінами.
    str.replace(whatToReplace: str | regexp, replacement: str | func(called to each matched))
    if (typeof whatToReplace === 'string') - only first occurrence will be replaced.
 */

let str = 'str123'

console.log(str.replace('s','S')) // 'Str123'
console.log(str) // 'str123'
console.log(str.replace(/[a-z]/,'0')) // '0tr123' - only first occurrence
console.log(str.replace(/[a-z]/g,'0')) // '000123' - g flag

console.log(str.replace('', 'X0')) // 'X0str123'
// need to know regexp for magic with replace