// - Навчитися використовувати логічни оператори (&&, ||, ? :, ?., ??, !)

/*
        && - повертає перший false або останній true
*/

console.log(1 && 2)       // 2
console.log(1 && 0 && 2)  // 0

/*
        || - повертає перший true, якщо немає true повертає останній false
*/

console.log(-1 || 2)           // -1
console.log('' || 0)           // 0
console.log(1 || 0)            // 1
console.log(1 && 0 || 5 && 4)  // 4

/*
        ! (НЕ)
*/

console.log(!true)  // false
console.log(!false) // true

// перетворення значення на булевий тип
console.log(!!"не пустий рядок")  // true
console.log(!!null)               // false

/*
        ? :
*/

let a = 1 ? 'a' : 'b';
console.log(a)  // 'a'

/*
        ?? - повертає праву частину в випадку коли зліва null або undefined, у всіх інших ліву(a !== null && a !== undefined) ? a : b)
*/

console.log(0 ?? 1)                 // 0
console.log('' ?? 1)                // ''
console.log(undefined ?? null ?? 1) // 1

/*
        ?.
*/

const user = {
    name: 'Ihor'
}

console.log(user?.lastName ?? "Object 'user' does not have a last name") // Object 'user' does not have a last name


