// - Навчитися викростовувати Spread та Rest оператори.

/*
        ...rest
*/

//! ...rest постійно повинен бути в кінці (a, ❌...rest, b)

function sumAll(...args) {
    let sum = 0;

    for (let arg of args) {
        sum += arg
    }

    return sum;
}

sumAll(2, 3, 5) // 10

/*
        ...spread
*/

// arr

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [0, ...arr1, ...arr2, 7]; // [0,1,2,3,4,5,6,7]

sumAll(...arr3) // 28

let arr4 = [...'hi']; // ['h', 'i']

const id = {
    id: '1'
}

// obj

const contact = {
    name: 'Ihor',
    surname: 'Riabenko'
}

const user = {
    ...id,
    ...contact
} // { id: '1', name: 'Ihor', surname: 'Riabenko' }

