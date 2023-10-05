console.log(1);

function delayedPromise(val, time) {
    console.log(val + 0.1);
    return new Promise((resolve) => setTimeout(() => {
        console.log(val + 0.2);
        resolve(val + 0.3);
    }, time));
}

async function asyncTaskD() {
    console.log(2);
    const result = await delayedPromise(3, 400);
    console.log(result);
    console.log(4);
}

async function asyncTaskE() {
    console.log(5);
    await delayedPromise(6, 200);
    console.log(7);
}

function* generatorTaskC() {
    console.log(8);
    yield asyncTaskD();
    console.log(9);
}

const genC = generatorTaskC();
genC.next().value.then(() => {
    genC.next();
});

setTimeout(() => {
    console.log(10);
    asyncTaskE();
}, 0);

queueMicrotask(() => console.log(11));
queueMicrotask(() => console.log(12));
console.log(13);

// 1 8 2 3.1 13 11 12 10 5 6.1 6.2 7 3.2 3.3 4 9