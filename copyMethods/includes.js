/*
    function includes(text, matchStr, index)
    (заборонено використовувати indexOf та інщі методи. Реалізація повинна бути без перевикористань інших методів)
 */

function includes(text, matchStr, index = 0) {
    if (matchStr.length > text.length - index) {
        return false
    }

    if (index < 0) {
        index = 0
    }

    let matchStrIdx = 0
    let startIdx = index;

    for (let idx = index; idx < text.length; idx++) {

        if (text[idx] === matchStr[matchStrIdx]) {
            matchStrIdx++
            if (matchStrIdx === matchStr.length) {
                return true
            }
        } else {
            idx = startIdx;
            startIdx++;
            matchStrIdx = 0;
        }

    }

    return matchStrIdx === matchStr.length
}

console.log(includes( " aaab", "aab")); // true
console.log(" aaab".includes("aab")); // true

let text = "To be, or not to be, that is the question. we"

console.log(includes(text, "To we")); // false
console.log(text.includes("To we")); // false

console.log(includes(text, "To be")); // true
console.log(text.includes("To be")); // true

console.log(includes(text, "nonexistent")); // false
console.log(text.includes("nonexistent")); // false

console.log(includes(text, "question")); // true
console.log(text.includes("question")); // true

console.log(includes(text, "To be", 1)); // false
console.log(text.includes("To be", 1)); // false

console.log(includes(text, "To be", -1)); // true
console.log(text.includes("To be", -1)); // true

console.log(includes(text, "TO BE")); // false
console.log(text.includes("TO BE")); // false

console.log(includes(text, "")); // true
console.log(text.includes("")); // true