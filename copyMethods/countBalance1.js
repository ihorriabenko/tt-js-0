/*
Обмеження:
- 1 цикл for
- charCodeAt

Заборонено використовувати parseInt, parseFloat, Number, +str, 1 * str, 1 / str, 0 + str, etcc

// expected result
// 13019
 */
const text = 'My wallet balance is 14690 USDT. I paid 750 USDT for plane tickets and 921 USDT for a flat'

function countBalance(str = '') {
    let isBalance = true
    let balance = 0
    let costs = 0
    let counter = 0

    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i)

        if (charCode > 47 && charCode < 58) {
            counter = counter * 10 + charCode - 48
            continue
        }

        if (counter) {
            if (isBalance) {
                balance = counter
                counter = 0
                isBalance = false
                continue
            }
            costs += counter
            counter = 0
        }
    }

    if (counter) {
        if (isBalance) {
            balance = counter
        } else {
            costs += counter
        }
    }

    return balance - costs
}

console.log(countBalance(text))