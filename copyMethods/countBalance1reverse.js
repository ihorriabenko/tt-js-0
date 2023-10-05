/*
Обмеження:
- 1 цикл for
- charCodeAt

Заборонено використовувати parseInt, parseFloat, Number, +str, 1 * str, 1 / str, 0 + str, etcc

// expected result
// 13019
 */
const text = 'I paid 750 USDT for plane tickets and 921 USDT for a flat. My wallet balance is 14690 USDT.'

function countBalance(str) {
    let isBalance = true
    let balance = 0
    let costs = 0
    let counter = 0
    let multi = 1

    for (let i = str.length -1; i > -1; i--) {
        let charCode = str.charCodeAt(i)

        if (charCode > 47 && charCode < 58) {
            counter = counter + (charCode - 48) * multi
            multi *= 10
            continue
        }

        if (counter) {
            if (isBalance) {
                balance = counter
                counter = 0
                multi = 1
                isBalance = false
                continue
            }

            costs += counter
            counter = 0
            multi = 1
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