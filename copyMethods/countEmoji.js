/*
expected result
{
kate: 1,
max: 2,
alisa: 2
}

обмеженя:
- 1 цикл for
- 1 object для збереження результатів
- charCodeAt для знаходження необхідних символів, та fromCharCode для перетворення в lower case
 */

// const text = '<@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple:'
const text = '<@Kate/>:apple:<@MAX/><@aLiSa/>:like::apple::apple:<@sasha/>:apple:<@lex/>:like:<@elona/><@musk/>:x::apple::apple:'

function countEmoji(message = '', emoji) {
    let users = {}
    let isName = false
    let name = ''
    let addName = ''
    let isEmj = false
    let emj = ''
    let emjCounter = 0
    let isLoop = false

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i)

        // char === @
        if (charCode === 64) {
            if (name && isLoop) {
                users[name] = emjCounter
                name = ''
                if (addName) {
                    users[addName] = emjCounter
                    addName = ''
                }
                emjCounter = 0
                isLoop = false
            }

            if (name && !isLoop) {
                addName = name
                name = ''
            }

            isName = true
            continue
        }

        if (isName) {
            if (charCode > 64 && charCode < 91) {
                name += String.fromCharCode(charCode + 32)
                continue
            } else if (charCode > 96 && charCode < 123) {
                name += message[i]
                continue
            } else {
                users[name] = 0
                isName = false
                continue
            }
        }

        // char === :
        if (charCode === 58) {
            isLoop = true

            if (emj === emoji) {
                emjCounter++
            }

            emj = ''
            isEmj = !isEmj
            continue
        }

        if (isEmj) {
            emj += message[i]
        }
    }

    if (emjCounter) {
        users[name] = emjCounter
        if (addName) {
            users[addName] = emjCounter
        }
    }

    return users
}

console.log(countEmoji(text, 'apple')) // { kate: 1, max: 2, alisa: 2, sasha: 1, lex: 0, elona: 2, musk: 2 }

