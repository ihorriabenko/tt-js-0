console.log(1);

async function complexAsyncA() {
    console.log(2);
    const partA = await nestedAsyncFuncA();
    console.log(partA);
    const partB = await nestedAsyncFuncB();
    console.log(partB);
    console.log(3);
}

async function nestedAsyncFuncA() {
    console.log(4);
    return new Promise(async (resolve) => {
        await resolveAfterDelay(5, 300);
        queueMicrotask(() => console.log(6));
        resolve(7);
    });
}

async function nestedAsyncFuncB() {
    console.log(8);
    return new Promise(resolve => {
        console.log(9);
        resolve(10);
    }).then(val => {
        console.log(val);
        queueMicrotask(() => console.log(11));
        return 12;
    });
}

function* intricateGeneratorFuncA() {
    console.log(13);
    yield complexAsyncA();
    console.log(14);
    yield resolveAfterDelay(15, 200);
    console.log(16);
}

function* intricateGeneratorFuncB() {
    console.log(17);
    const firstYield = yield resolveAfterDelay(18, 400);
    console.log(firstYield);
    const secondYield = yield nestedAsyncFuncB();
    console.log(secondYield);
    console.log(19);
}

const genFuncA = intricateGeneratorFuncA();
genFuncA.next().value.then(() => {
    genFuncA.next().value.then(() => {
        genFuncA.next();
    });
});

const genFuncB = intricateGeneratorFuncB();
genFuncB.next().value.then(val => {
    genFuncB.next(val).value.then(val2 => {
        genFuncB.next(val2);
    });
});

setTimeout(() => {
    console.log(20);
    queueMicrotask(() => console.log(21));
}, 100);

queueMicrotask(() => console.log(22));
console.log(23);

function resolveAfterDelay(x, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, delay);
    });
}

// 1 13 2 4 17 23 22 20 21 6 7 8 9 10 11 12 3 14 18 8 9 10 11 12 19 16

