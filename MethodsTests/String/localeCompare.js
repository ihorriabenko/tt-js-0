/*
    Основна перевага localeCompare перед звичайним оператором порівняння (>, <) полягає в тому, що він враховує специфіку мови.
    Наприклад, в деяких мовах символи з діакритичними знаками можуть сортуватися по-іншому, ніж в англійській.
 */

console.log('a'.localeCompare('b')) // -1
console.log('b'.localeCompare('b')) // 0
console.log('c'.localeCompare('b')) // 1

let str1 = "a";
let str2 = "á";

console.log(str1 > str2);                // true
console.log(str1.localeCompare(str2, 'es'));   // -1

const a = 'réservé';
const b = 'RESERVE';

console.log(a.localeCompare(b)); // 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' })); // 0

const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']