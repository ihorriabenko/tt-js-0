console.log(1);

function resolveAfterDelay(x, delay) {
    console.log(`x${x}`);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, delay);
    });
}

async function asyncFunc1() {
    console.log(2);
    const res1 = await asyncFunc2();
    console.log(res1);
    const res2 = await asyncFunc3();
    console.log(res2);
    console.log(3);
}

async function asyncFunc2() {
    console.log(4);
    await resolveAfterDelay(5, 1000);
    queueMicrotask(() => console.log(6));
    return 7;
}

async function asyncFunc3() {
    console.log(8);
    return new Promise(resolve => {
        console.log(9);
        setTimeout(() => {
            console.log(10);
            resolve(11);
        }, 500);
    });
}

function* generatorFunc1() {
    console.log(12);
    yield resolveAfterDelay(13, 700);
    console.log(14);
}

const generator1 = generatorFunc1();
generator1.next().value.then(val => {
    console.log(val);
    generator1.next();
});

asyncFunc1();

setTimeout(() => {
    console.log(15);
    queueMicrotask(() => console.log(16));
}, 200);

queueMicrotask(() => console.log(17));

console.log(18);

// 1 12 x13 2 4 x5 18 17 15 16 13 14 6 7 8 9 10 11 3

