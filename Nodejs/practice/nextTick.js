setImmediate(() => {
    console.log('immediate');
});

// setImmediate나 setTimeout보다 먼저 실행됨.
// resolve된 Promise도 nextTick처럼 다른 콜백들보다 우선시됨
// 따라서 process.nextTick과 Promise를 마이크로태스크라고 구분지어 부름
process.nextTick(() => {
    console.log('nextTick');
})

setTimeout(() => {
    console.log('timeout');
}, 0);

Promise.resolve().then(() => console.group('promise'));