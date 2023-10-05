/*
    Навчитися розрізняти любі типи данних
    Date, Array, null, Object, Int, WeekMap, WeekSet, CustomEvent, CustomClass, etc.
 */

function isObject(data) {
    try {
        return Object.getPrototypeOf(data) === Object.prototype
    } catch (e) {
        return false
    }
}

class customClass {
}

console.log(isObject({})) // true
console.log(isObject(new customClass())) // false
console.log(isObject(null)) // false
console.log(isObject(new Date())) // false
console.log(isObject(new WeakMap())) // false
