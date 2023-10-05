console.log('A');

async function taskX() {
    console.log('B');
    await taskY();
    console.log('C');
}

async function taskY() {
    console.log('D');
    await taskZ();
    console.log('E');
}

async function taskZ() {
    return new Promise(resolve => {
        console.log('F');
        queueMicrotask(() => {
            console.log('G');
            resolve();
        });
    });
}

function* gen1() {
    console.log('H');
    yield taskY();
    console.log('I');
}

const generatorInstance = gen1();

taskX();
generatorInstance.next().value.then(() => {
    generatorInstance.next();
});
console.log('J');

// a b d f h d f j g g e e c i
