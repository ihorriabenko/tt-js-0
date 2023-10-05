/*
    Повертає index першого збігу між регулярним виразом і рядком або -1, якщо збігу не знайдено.
    Те саме що indexOf тільки очікує аргумент regexp.
 */

let str = 'str123'

console.log(str.search(/[0-9]/)) // 3
console.log(str.search(/[A-Z]/)) // -1
