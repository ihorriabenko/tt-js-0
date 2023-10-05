/*
    Повертає рядкове представлення числа с заданою точністю цифр переданою як аргумент.
    precision - ціле число(1-100), яке визначає кількість значущих цифр
    Якщо precision не вказано, поводе себе як toString()
    Якщо precision не ціле, округлюється до найближчого цілого
 */

let num = 5.123456;

console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

num = 0.000123;

console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'

console.log((1234.5).toPrecision(2)); // '1.2e+3'
