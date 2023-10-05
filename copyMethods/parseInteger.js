/*
    function parseInteger(str)
    (заборонено використовувати любі методи парсингу числа зі строк.
    Заборонено +str, 1 * str, parseInt, parseFloat, Number, etc)
 */

function parseInteger(str) {
    let int = 0
    let intListener = false
    let isNegative = false
    let operatorCounter = 0

    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i)

        if (charCode > 47 && charCode < 58) {
            int = int * 10 + charCode - 48

            if (!intListener) {
                intListener = true
            }

        } else if (charCode === 32) {
            if (int || isNegative) {
                break
            }
        } else if (charCode === 43 || charCode === 45) {
            if (int) {
                break
            }

            operatorCounter++

            if (operatorCounter > 1) {
                return NaN
            }
            if (charCode === 45) {
                isNegative = true
            }
        } else {
            break
        }
    }

    if (isNegative) {
        int = -int
    }

    return intListener ? int : NaN
}


console.log(parseInteger('1.5em'))       // 1
console.log(Number.parseInt('1.5em'))  // 1

console.log(parseInteger('-1.5em'))      // -1
console.log(Number.parseInt('-1.5em')) // -1

console.log(parseInteger(' 1.5em'))      // 1
console.log(Number.parseInt(' 1.5em')) // 1

console.log(parseInteger(' -1.5em'))      // -1
console.log(Number.parseInt(' -1.5em')) // -1

console.log(parseInteger('--1.5em'))      // NaN
console.log(Number.parseInt('--1.5em')) // NaN

console.log(parseInteger('++1.5em'))      // NaN
console.log(Number.parseInt('++1.5em')) // NaN

console.log(parseInteger(' -01.5em'))      // -1
console.log(Number.parseInt(' -01.5em')) // -1

console.log(parseInteger(' +01.5em'))      // 1
console.log(Number.parseInt(' +01.5em')) // 1

console.log(parseInteger(' +-1.5em'))      // NaN
console.log(Number.parseInt(' +-1.5em')) // NaN

console.log(parseInteger('em1.5'))      // NaN
console.log(Number.parseInt('em1.5')) // NaN

console.log(parseInteger('0'))      // 0
console.log(Number.parseInt('0')) // 0

console.log(parseInteger('-0'))      // -0
console.log(Number.parseInt('-0')) // -0

console.log(parseInteger('-0a'))      // -0
console.log(Number.parseInt('-0a')) // -0

console.log(parseInteger(' -0a'))      // -0
console.log(Number.parseInt(' -0a')) // -0

console.log(parseInteger(' - 0a'))      // NaN
console.log(Number.parseInt(' - 0a')) // NaN

console.log(parseInteger('- 1a'))      // NaN
console.log(Number.parseInt('- 1a')) // NaN

console.log(parseInteger('*0a'))      // NaN
console.log(Number.parseInt('*0a')) // NaN
