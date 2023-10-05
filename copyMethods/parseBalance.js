/*
    function parseBalance(message) {}

    Дозволено використовувати:
    - 1 цикл for
    - charCodes
 */

const text = 'My wallet balance is 14960 USDT'

function parseBalance(message) {
    let balance = 0

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i)

        if (charCode > 47 && charCode < 58) {
            balance = balance * 10 + charCode - 48
        }
    }

    return balance
}

console.log(parseBalance(text))

function parseBalanceReverse(message) {
    let balance = 0
    let multi = 1

    for (let i = message.length - 1; i > -1; i--) {
        let charCode = message.charCodeAt(i)

        if (charCode > 47 && charCode < 58) {
            balance = balance + (charCode - 48) * multi
            multi *= 10
        }
    }

    return balance
}

console.log(parseBalanceReverse(text))

function parseBalance1(message) {
    let balance = 0
    let isBalance = false
    let multi = 1

    for (let i = message.length - 1; i > -1; i--) {
        let charCode = message.charCodeAt(i)

        if (charCode > 47 && charCode < 58) {
            if (!isBalance) {
                isBalance = true
            }
            balance = balance + (charCode - 48) * multi
            multi *= 10
        } else {
            if (isBalance) {
                break
            }
        }
    }

    return balance
}

console.log(parseBalance1(text))


