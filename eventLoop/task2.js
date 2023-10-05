console.log(1);

async function asyncFunc1() {
    console.log(2);
    await asyncFunc2();
    console.log(3);
    queueMicrotask(() => console.log(4));
}

async function asyncFunc2() {
    console.log(5);
    return new Promise(resolve => {
        console.log(6);
        setTimeout(() => {
            console.log(7);
            resolve();
        }, 0);
    }).then(() => {
        console.log(8);
        queueMicrotask(() => console.log(9));
    });
}

function* generatorFunc1() {
    console.log(10);
    yield;
    console.log(11);
}

function* generatorFunc2() {
    console.log(12);
    yield;
    console.log(13);
}

const generator1 = generatorFunc1();
generator1.next();
asyncFunc1();
generator1.next();

const generator2 = generatorFunc2();
generator2.next();
generator2.next();

setTimeout(() => {
    console.log(14);
    queueMicrotask(() => console.log(15));
}, 0);

queueMicrotask(() => console.log(16));

console.log(17);

setTimeout(() => {
    console.log(18);
    queueMicrotask(() => console.log(19));
}, 0);

const myPromise = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

myPromise(1000).then(() => console.log(20));
setTimeout(() => console.log(21), 1000);
myPromise(2000).then(() => console.log(22));
setTimeout(() => console.log(23), 2000);

async function resolveAfter5Seconds(x) {
    console.log(`x${x}`);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 5000);
    });
}

async function add(x) {
    console.log(24);
    const a = await resolveAfter5Seconds(25);
    const b = await resolveAfter5Seconds(26);
    console.log(27);
    return x + a + b;
}

add(28).then(console.log);

// 1 10 2 5 6 11 12 13 17 24 x25 16 7 8 9 3 4 15 15 18 19 20 21 22 23 x26 27 79

