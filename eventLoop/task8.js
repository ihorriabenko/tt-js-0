console.log(1);

async function asyncTaskD() {
    console.log(2);
    await asyncTaskE();
    console.log(3);
}

async function asyncTaskE() {
    console.log(4);
    await asyncTaskF();
    console.log(5);
}

async function asyncTaskF() {
    console.log(6);
    return new Promise((resolve) => {
        console.log(7);
        queueMicrotask(() => {
            console.log(8);
            resolve();
        });
    });
}

function* generatorTaskC() {
    console.log(9);
    yield asyncTaskE();
    console.log(10);
    yield asyncTaskD();
    console.log(11);
}

function* generatorTaskD() {
    console.log(12);
    yield asyncTaskF();
    console.log(13);
    yield asyncTaskD();
    console.log(14);
}

function* generatorTaskE() {
    console.log(15);
    yield asyncTaskD();
    console.log(16);
    yield;
    console.log(17);
}

const genC = generatorTaskC();
const genD = generatorTaskD();
const genE = generatorTaskE();

genC.next().value.then(() => {
    genC.next().value.then(() => {
        genC.next();
    });
});

genD.next().value.then(() => {
    genD.next().value.then(() => {
        genD.next();
    });
});

genE.next().value.then(() => {
    genE.next();
    genE.next();
});

queueMicrotask(() => console.log(18));
setTimeout(() => console.log(19), 0);
console.log(20);

/*
    1
    9
    4
    6
    7
    12
    6
    7
    15
    2
    4
    6
    7
    20
    8
    8
    8
    18
    5
    13
    2
    4
    6
    7
    5
    10
    2
    4
    6
    7
    8
    3
    8
    16
    17
    5
    5
    3
    3
    14
    11
    19
 */