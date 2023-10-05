/*
    Повертає всі співпадіння string с regexp(зобовʼязує до флагу g)
    Кожен збіг є масивом такої самої форми, що й повернуте значення match першого збігу
    Повертає перебираємий обʼєкт або null на відміну від match який повертає звичайний масив або ['']
 */


/*
    Групи захоплення ігноруються під час використання match() із глобальним прапором g
 */

const str0 = "test1test2"
const regExp = /t(e)(st(\d?))/g

console.log(str0.match(regExp)) // ['test1', 'test2']

let iterator0 = str0.matchAll(regExp)
console.log(iterator0) // Object [RegExp String Iterator] {}

for (let el of iterator0) {
    console.log(el)
    console.log(123)
}

/*
[
  'test1',
  'e',
  'st1',
  '1',
  index: 0,
  input: 'test1test2',
  groups: undefined
]
123
[
  'test2',
  'e',
  'st2',
  '2',
  index: 5,
  input: 'test1test2',
  groups: undefined
]
123
 */

let arrIt = [...str0.matchAll(regExp)]
console.log(arrIt)
/*
    [
  [
    'test1',
    'e',
    'st1',
    '1',
    index: 0,
    input: 'test1test2',
    groups: undefined
  ],
  [
    'test2',
    'e',
    'st2',
    '2',
    index: 5,
    input: 'test1test2',
    groups: undefined
  ]
]
 */


//
let str = 'str123'
let iterator = str.matchAll(/[a-z]/g)

console.log(iterator.next())
/*
    {
      value: [ 's', index: 0, input: 'str123', groups: undefined ],
      done: false
    }
 */
console.log(iterator.next()) // ...
console.log(iterator.next()) // ...
console.log(iterator.next()) // { value: undefined, done: true }

let arr = [...str.matchAll(/[a-z]/g)]
console.log(arr)
/*
    [
        [ 's', index: 0, input: 'str123', groups: undefined ],
        [ 't', index: 1, input: 'str123', groups: undefined ],
        [ 'r', index: 2, input: 'str123', groups: undefined ]
    ]
 */
let arrNormalize = Array.from(str.matchAll(/[a-z]/g), (m) => m[0])
console.log(arrNormalize) // [ 's', 't', 'r' ]


