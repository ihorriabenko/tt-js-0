// toString, valueOf

const obj = {
    name: 'Ihor',
    age: 25
}

console.log(obj.toString())  // [object Object]
console.log(obj.valueOf())   // { name: 'Ihor', age: 25 }


/*
    За допомогою Symbol.toPrimitive можна перевизначити
    яке значення буде повертатися при намагані конвертувати obj в примітив.
 */


obj[Symbol.toPrimitive] = function (hint) {
    if (hint === 'string') {
        return this.name
    }
    if (hint === 'number') {
        return this.age
    }
    return true // default
}

console.log(`${obj}`)  // Ihor     - hint is string
console.log(+obj)      // 25       - hint is number
console.log(obj + '')  // true     - hint is default

/*
    Спрробуємо змінити поведінку:
    obj / 5 - toString()
    obj + 5 - valueOf
 */

obj.toString = function () {
    return this.name
}
obj.valueOf = function () {
    return this.age
}
obj[Symbol.toPrimitive] = function (hint) {
    if (hint === 'number') {
        return this.toString()
    }
    return this.valueOf()
}

console.log(obj / 5)  // NaN    - 'Ihor' / 5
console.log(obj + 5)  // 30     - 25 + 5


/*
  ! Алгоритм спочатку шукає Symbol.toPrimitive і повертає примітивне значення об’єкта,
    перш ніж методи valueOf() і toString().
 */

const obj1 = {
    toString() {
        return 'toString'
    },
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return 'Symbol'
        }
    }
}

console.log(String(obj1)) // Symbol
