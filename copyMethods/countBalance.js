/*
    обмеженя:
    - 1 цикл for
    - 1 object для збереження результатів
    - charCodeAt для знаходження необхідних символів, та fromCharCode для перетворення в lower case

    // result {
    //  kate: 1000,
    //  dmitrty: 350,
    //  max: 600
    //}
 */

const text = 'Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT'

function countBalance(message) {
    let users = {}
    let name = ''
    let isName = false
    let money = 0
    let isMoney = false


    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i)

        /*
            name
         */

        // if char === @
        if (!isName && charCode === 64) {
            isName = true
            continue
        }

        if (isName) {
            // if char Upper case
            if (charCode > 64 && charCode < 91) {
                name += String.fromCharCode(charCode + 32)
                continue
            }

            if (charCode > 96 && charCode < 123) {
                name += message[i]
                continue
            }

            users[name] = 0
            isName = false
        }

        /*
            money
        */

        if (!isMoney && charCode > 47 && charCode < 58) {
            isMoney = true
            money = charCode - 48
            continue
        }

        if (isMoney) {
            if (charCode > 47 && charCode < 58) {
                money = money * 10 + charCode - 48
                continue
            }

            users[name] = money
            money = 0
            name = ''
            isMoney = false
        }

    }

    return users
}

console.log(countBalance(text))