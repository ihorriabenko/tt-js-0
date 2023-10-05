// Math.random(): number

/*
    Повертає псевдовипадкове число між 0 (включно) і 1 (не включаючи 1)
 */


/*
    use keys
 */

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 5));