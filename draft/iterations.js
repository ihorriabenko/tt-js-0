// - Навчитися користуватися циклами (for, for of, for in, while, do while)

/*
        for (початок; умова; шаг) { тіло } (Якщо умова === true → Виконати тіло, Виконати шаг)
*/

for (let i = 0; i < 3; i++) {
    console.log(i) // 0, 1, 2
}

// пропуск частин for
let x = 0;
for (; x < 3; x++) {
    console.log(x) // 0, 1, 2
}

for (let i = 0; i < 3;) {
    console.log(i++) // 0, 1, 2
}

/*
        while (condition) {}
*/

let w = 0;
while (w < 3) {
    console.log(w) // 0, 1, 2
    w++
}

/*
        do{} while(condition) - цикл спочатку виконає тіло, а потім перевірить умову
*/

let dw = 2;
do {
    dw++
    console.log(dw) // 3
} while (w < 3)

/*
        break
*/

// let sum = 0;
//
// while (true) {
//
//   let value = +prompt("Введите число", '');
//
//   if (!value) break; // (*)
//
//   sum += value;
//
// }
// alert( 'Сумма: ' + sum );

/*
        continue
*/

for (let i = 0; i <= 10; i++) {

    if (i % 2) continue;

    console.log(i)  // 2, 4, 6, 8, 10
}

/*
        Мітки для break/continue. labelName: for() {}
*/

outer: for (let i = 0; i < 3; i++) {
    console.log(i)  // 0

    for (let i = 0; i < 3; i++) {
        console.log(i)  // 0, 1, 2
        if (i === 2) {
            break outer
        }
    }
}

/*
        for (let key in obj) {}
*/

let obj = {
    name: 'Ihor',
    lastName: 'Riabenko'
}

for (let key in obj) {
    console.log(obj[key])  // Ihor Riabenko
}





