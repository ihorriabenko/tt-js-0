/*
    Повертає новий рядок з всіма замінами.
    str.replaceAll(whatToReplace: str | regexp, replacement: str | func(called to each matched))
    if regexp(!g flag)
 */

let str = 'strs123'

console.log(str.replaceAll('s','S')) // 'StrS123'
console.log(str) // 'strs123'
// console.log(str.replaceAll(/[a-z]/,'0')) // !g flag
console.log(str.replaceAll(/[a-z]/g,'0')) // '0000123' - g flag

console.log(str.replaceAll('', 'X0')) // 'X0sX0tX0rX0sX01X02X03X0'
// need to know regexp for magic with replaceAll