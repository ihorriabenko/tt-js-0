// - Навчитися використовувати всі математичні оператори (+, -, *, **, / , %, ++, --, ^, >, <, ~)

// операнд(1) оператор(+) операнд(1) = 2
// оператор є унарним, якщо він має один операнд
// оператор є бінарним, якщо він має два операнди

/*
        +
*/

console.log('1' + '1')   // '11'
console.log(1 + '1')     // '11' (якщо будь-який з операндів є рядком, тоді інший також перетворюється на рядок(працює тільки з +))
console.log(+true)       // 1
console.log(+false)      // 0
console.log(+'')         // 0
console.log(+'1')        // 1
console.log(+'1' + +'1') // 2 (тому що унарні оператори мають вище приорітет)

/*
        -
*/

console.log(6 - '2')           // 4
console.log(-'' === -false)    //true


/*
        *
*/

console.log('2' * 2)    // 4


/*
        **
*/

console.log(2 ** 4)     // 16


/*
        /
*/

console.log('6' / '2')   // 3


/*
        %
*/

console.log(5 % 2)       // 1


/*
        ++   --
*/

// Інкремент/декремент можуть застосовуватися лише до змінних.
// Спроба використати їх із значенням, як от 5++, призведе до помилки.

let c = 1;
console.log(++c)        // 2 префіксна форма
console.log(c--)        // 2 постфіксна форма
console.log(c)          // 1

/*
"" + 1 + 0      '10'
"" - 1 + 0       -1
true + false     1
6 / "3"          2
"2" * "3"        6
4 + 5 + "px"    '9px'
"$" + 4 + 5     '$45'
"4" - 2          2
"4px" - 2        NaN
"  -9  " + 5     "  -9  5"
"  -9  " - 5     -14
null + 1         1
undefined + 1    NaN
" \t \n" - 2     -2
*/

/*
        ~ бітовий оператор НЕ
*/

// повернути з indexOf 0 замість -1

if (~'someString'.indexOf('x')) { // ~-1 // 0
    console.log('Substring found!');
} else {
    console.log('Substring not found.'); // Substring not found.
}

/*
        ^ Побітове виключне АБО
*/

// поміняти місцями змінні

let a = 5;
let b = 3;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a);  // 3
console.log(b);  // 5