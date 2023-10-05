const text = 'Mike received $159,34, good job man. Lisa received $95,59 but Kate received $140,12-winner. Platform deposit $950,81 was made at the beginning of March. How much money is left on the platform?';

function countBalance(str) {
    let costs = 0
    let counter = 0
    let prevValue = 0


    for (let index = 0; index < str.length; index++) {

        let charCode = str.charCodeAt(index)

        if (charCode > 47 && charCode < 58) {
            counter = counter * 10 + charCode - 48
        }

        if (counter && charCode !== 44) {

            if (charCode < 48 || charCode > 57) {
                let floatCounter = counter / 100

                prevValue = floatCounter
                costs = costs + floatCounter
                counter = 0
            }
        }

    }


    return prevValue * 2 - costs

}

console.log(countBalance(text))

function countBalanceReverse(text) {
    let isBalance = true
    let balance = 0
    let costs = 0
    let counter = 0
    let multi = 1

    for (let index = text.length - 1; index > -1; index--) {

        let charCode = text.charCodeAt(index)

        if (charCode > 47 && charCode < 58) {
            counter = counter + (charCode - 48) * multi
            multi *= 10
        }

        if(counter && charCode !== 44) {

            if(charCode < 48 || charCode > 57) {

                if (isBalance) {
                    balance = counter / 100
                    counter = 0
                    multi = 1
                    isBalance = false
                    continue
                }

                costs = costs + counter / 100
                counter = 0
                multi = 1
            }

        }
    }
    return balance - costs
}

console.log(countBalanceReverse(text))