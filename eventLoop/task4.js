console.log(1);

async function asyncFuncA() {
    console.log(2);
    const res = await asyncFuncB();
    console.log(res);
    console.log(3);
    queueMicrotask(() => console.log(4));
}

async function asyncFuncB() {
    console.log(5);
    const a = await resolveAfterDelay(6, 400);
    const b = await resolveAfterDelay(7, 100);
    console.log(8);
    return a + b;
}

async function asyncFuncC() {
    console.log(9);
    const c = await asyncFuncD();
    console.log(c);
}

async function asyncFuncD() {
    console.log(10);
    return new Promise((resolve, reject) => {
        console.log(11);
        setTimeout(() => {
            console.log(12);
            resolve(13);
        }, 500);
    });
}

function* generatorFuncA() {
    console.log(14);
    yield resolveAfterDelay(15, 200);
    console.log(16);
}

function* generatorFuncB() {
    console.log(17);
    yield asyncFuncA();
    console.log(18);
    yield asyncFuncC();
    console.log(19);
}

const genA = generatorFuncA();
const valA = genA.next().value;
valA.then(result => {
    console.log(result);
    genA.next();
});

const genB = generatorFuncB();
genB.next().value.then(() => {
    genB.next().value.then(() => {
        genB.next();
    });
});

setTimeout(() => {
    console.log(20);
    queueMicrotask(() => console.log(21));
}, 300);

console.log(22);

queueMicrotask(() => console.log(23));

function resolveAfterDelay(x, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, delay);
    });
}

// 1 14 17 2 5 22 23 15 16 20 21 8 13 3 4 18 9 10 11 12 13 19
