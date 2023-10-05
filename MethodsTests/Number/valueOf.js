/*
    Число, що представляє числове вказаного об’єкта Number
 */

const numObj = new Number(10);
console.log(typeof numObj); // object

const num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
