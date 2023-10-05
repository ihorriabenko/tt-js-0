console.log(1);

async function asyncTaskA() {
    console.log(2);
    await asyncTaskB();
    console.log(3);
}

async function asyncTaskB() {
    console.log(4);
    await asyncTaskC();
    console.log(5);
}

async function asyncTaskC() {
    console.log(6);
    return new Promise((resolve) => {
        console.log(7);
        queueMicrotask(() => {
            console.log(8);
            resolve();
        });
    });
}

function* generatorTaskA() {
    console.log(9);
    yield asyncTaskB();
    console.log(10);
    yield;
    console.log(11);
}

function* generatorTaskB() {
    console.log(12);
    yield asyncTaskC();
    console.log(13);
    yield asyncTaskA();
    console.log(14);
}

const genA = generatorTaskA();
const genB = generatorTaskB();

genA.next().value.then(() => {
    genA.next();
    genA.next();
});

genB.next().value.then(() => {
    genB.next().value.then(() => {
        genB.next();
    });
});

queueMicrotask(() => console.log(15));
setTimeout(() => console.log(16), 0);
console.log(17);

// 1 9 4 6 7 12 6 7 17 8 8 15 5 13 2 4 6 7 10 11 8 5 3 14 16
