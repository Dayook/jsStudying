let i = 1;
setInterval(() => {
    if(i === 5) {
        console.log('종료!');
        // 인수로 코드 번호를 줄 수 있음
        // 인수를 주지 않거나 0을 주면 정상 종료, 1은 비정상 정료
        // 에러가 발생하여 종료하는 경우 1을 넣으면 됨
        process.exit();
    }
    console.log(i);
    i+= 1;
}, 1000);