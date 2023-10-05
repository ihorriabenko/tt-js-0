/*
    function split(text, divider)
    (заборонено використовувати нативні методи. Реалізація повинна бути без перевикористань інших методів)
 */

function split(text = '', divider) {
    let arr = []
    let arrIdx = 0
    let subStr = ''
    let subStr2 = ''
    let dividerIdx = 0
    let dividerLengthCounter = 0
    let dividerListener = false

    if (divider === undefined) {
        arr[arrIdx] = text
        return arr
    }

    if (!divider) {
        for (let idx = 0; idx < text.length; idx++) {
            arr[arrIdx] = text[idx]
            arrIdx++
        }
        return arr
    }

    if (divider.length === 1) {
        for (let idx = 0; idx < text.length; idx++) {
            if (divider === text[idx]) {
                arr[arrIdx] = subStr
                arrIdx++
                subStr = ''
                continue
            }
            subStr += text[idx]
        }

        if (subStr) {
            arr[arrIdx] = subStr
        }

        return arr
    }

    for (let idx = 0; idx < text.length; idx++) {

        if (divider[dividerIdx] === text[idx]) {
            dividerListener = true
            dividerLengthCounter++
            dividerIdx++
            subStr2 += text[idx]

            if (divider.length === dividerLengthCounter) {
                dividerListener = false
                dividerLengthCounter = 0
                dividerIdx = 0
                arr[arrIdx] = subStr
                arrIdx++
                subStr = ''
                subStr2 = ''
            }
            continue
        }

        if (dividerListener) {
            dividerListener = false
            dividerLengthCounter = 0
            dividerIdx = 0
            subStr += subStr2
            subStr2 = ''
        }

        subStr += text[idx]
    }

    if (subStr) {
        arr[arrIdx] = subStr
    }

    return arr
}

let str = "Hello, my name is Ihor, i'm software engineer and my friend name is Victor"

console.log(split(str, 'name is'))
console.log(str.split('name is'))

str = 'qwe asd'

console.log(split(str))
console.log(str.split())

console.log(split(str, ''))
console.log(str.split(''))

console.log(split(str, ' '))
console.log(str.split(' '))

