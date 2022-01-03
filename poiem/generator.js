/**  ES6에서 도입된 Generator 함수는, 이터러블을 생성하는 함수이다.
* 제너레이터 사용 시 이터레이션 프로토콜을 준수해 이터러블을 생성하는 방식보다 간편하게 이터러블 구현
* 또한 비동기 처리에 유용하게 사용됨
*/


const createInfinityByIteration = function () {
    let i = 0; // 자유 변수
    return {
        [Symbol.iterator]() {return this},
        next(){
            return { value: ++i };
        }
    }
}

for (const n of createInfinityByIteration()) {
    if (n > 5) break;
    console.log(n);
}


function* createInfinityByGenerator() {
    let i = 0;
    while(true) {
        yield ++i;
    }
}

/**
 * 제너레이터 함수의 정의
 * function* 키워드로 정의하며, 하나 이상의 yield문 포함
 * 
 */

function* genDecFunc(){
    yield 1;
}

let generatorObj = genDecFunc();

// 제너레이터 함수 표현식
const genExpFunc = function* (){
    yield 1;
}

generatorObj = genExpFunc();

