console.log('1');

async function async1() {
    console.log('2');
    await async2();
    console.log('3');
    return 'async1 done';
}

async function async2() {
    console.log('4');
    await async3();
    console.log('5');
}

async function async3() {
    return new Promise(resolve => {
        console.log('6');
        queueMicrotask(() => {
            console.log('7');
            resolve();
        });
    });
}

function* gen2() {
    console.log('8');
    yield async2();
    console.log('9');
}

const gen2Instance = gen2();

queueMicrotask(() => console.log('10'));
async1().then(console.log);
gen2Instance.next().value.then(() => {
    gen2Instance.next();
});
console.log('11');

// 1 2 4 6 8 4 6 11 10 7 7 5 5 3 9 async1done