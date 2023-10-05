/*
    Повертає рядкове представлення числа в науковому експоненційному вигляді. :string
    fractionDigits? - ціле число(0-100), яке визначеє кількість цифр після .
    Зручний при представленні дуже великих і дуже малих чисел
 */

const numObj = 77.1234;

console.log(numObj.toExponential()); // 7.71234e+1
console.log(numObj.toExponential(4)); // 7.7123e+1
console.log(numObj.toExponential(2)); // 7.71e+1
console.log((77.1234).toExponential()); // 7.71234e+1
console.log((77).toExponential()); // 7.7e+1
