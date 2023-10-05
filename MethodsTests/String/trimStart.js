/*
    Видаляє пробіли з початку і повертає новий рядок не мутуючи поточний.
 */

let str = '   str 123   '
console.log(str.trimStart()) // 'str 123   '
console.log(str) // '   str 123   '