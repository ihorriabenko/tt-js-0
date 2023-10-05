// - Навчитися використовувати деструктурізацію обьєктів та масивів.

/*
        obj
*/

const obj = {
    asd: 1,
    inner: {
        user: ['Ihor', 'Riabenko']
    },
    rest: 'rest'
}

const {
    asd: x,
    y = 2,
    inner: {
        user: [name, surname]
    },
    ...rest
} = obj;

console.log(x)          // 1
console.log(y)          // 2
console.log(name)       // Ihor
console.log(surname)    // Riabenko
console.log(rest)       // { rest: 'rest' }


/*
        arr
*/

const arr = [1, 2, 3];

const [first, , third] = arr;
console.log(third)  // 3

const [...rest1] = arr;
console.log(rest1)   // [1,2,3]

//    string

let [a, b, c] = "abc"; // ["a", "b", "c"]