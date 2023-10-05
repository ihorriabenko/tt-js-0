const myPromise = (delay) => new Promise((res, rej) => { setTimeout(res, delay) });

function async1() {
    console.log(2);
    async2().then(() => {
        console.log(3);
    });
}

function async2() {
    return new Promise((resolve) => {
        resolve();
        console.log(4);
    })
}

function* generate() {
    console.log(5);
    yield;
    console.log(6);
}

function* generate2() {
    console.log(7);
    yield;
    console.log(8);
}

function resolveAfter2Seconds(x) {
    console.log(`x${x}`);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 5000);
    });
}

async function add1(x) {
    console.log(9);
    const a = await resolveAfter2Seconds(20);
    setTimeout(() => console.log(23), 1000);
    console.log(10);
    const b = await resolveAfter2Seconds(30);
    console.log(11);
    return x + a + b;
}

console.log(1);

const generator1 = generate();
generator1.next();

setTimeout(() => {
    console.log(12);
    myPromise(1000).then(res => console.log(22));
    queueMicrotask(() => console.log(13));
}, 1000);

async1();

new Promise(function (resolve) {
    console.log(14);
    resolve();
}).then(function () {
    setTimeout(() => console.log(18), 100);
    console.log(15);
});

queueMicrotask(() => console.log(16));

console.log(17);

const generator2 = generate2();

myPromise(2000).then(res => {
    console.log(19)
    generator2.next();
});

setTimeout(() => {
    console.log(20);
    queueMicrotask(() => {
        console.log(21)
        generator2.next();
    });
}, 2000);

myPromise(5000).then(res => console.log(24));
setTimeout(() => {
add1(10).then(console.log);
}, 150)

generator1.next();