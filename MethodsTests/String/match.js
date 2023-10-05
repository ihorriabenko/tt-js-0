/*
    Приймає аргумент regexp, повертає масив співпадінь(якщо флаг g) інакше тільки перше співпадіння. :string[]
 */

let str = 'str123'

console.log(str.match(/[1-9]/g)) // [ '1', '2', '3' ]
console.log(str.match(/[1-9]/)) // [ '1', index: 3, input: 'str123', groups: undefined ]
console.log(str.match(/[a-z]/g)) // [ 's', 't', 'r' ]
console.log(str.match(/[a-z]/)) // [ 's', index: 0, input: 'str123', groups: undefined ]

console.log(str.match('1')) // [ '1', index: 3, input: 'str123', groups: undefined ]
console.log(str.match(1)) // [ '1', index: 3, input: 'str123', groups: undefined ]
console.log(str.match('s')) // [ 's', index: 0, input: 'str123', groups: undefined ]
console.log(str.match('str1')) // [ 'str1', index: 0, input: 'str123', groups: undefined ]
console.log(str.match(true)) // null
console.log(str.match([])) // [ '', index: 0, input: 'str123', groups: undefined ]
console.log(str.match({})) // [ 't', index: 1, input: 'str123', groups: undefined ]

str = 'false null undefined Infinity -Infinity'
console.log(str.match(undefined)) // ['',index: 0,input: 'false null undefined Infinity -Infinity',groups: undefined]
console.log(str.match(false)) // ['false',index: 0,input: 'false null undefined Infinity -Infinity',groups: undefined]
console.log(str.match(null)) // ['null',index: 6,input: 'false null undefined Infinity -Infinity',groups: undefined]
console.log(str.match(Infinity)) // ['Infinity',index: 21,input: 'false null undefined Infinity -Infinity',groups: undefined]
console.log(str.match(-Infinity)) // ['-Infinity',index: 30,input: 'false null undefined Infinity -Infinity',groups: undefined]

str = '012'
let arr = str.match(/[0-9]/g)
console.log(arr) // [ '0', '1', '2' ]
arr.map(el => console.log(el)) // 0 1 2