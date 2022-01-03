/**
 * Spread 문법(Spread Syntax, ...)는 대상을 개별 요소로 분리한다.
 * Spread 문법의 대상은 이터러블이어야 한다.
 */

// ... [1,2,3] 
console.log(...[1,2,3]); 
console.log(...'Hello');

console.log(... new Map([['a', '1'], ['b', '2']]));
console.log(... new Set([1,2,3]));

// 이터러블이 아닌 일반 객체는 Spread 문법의 대상 아님.


/**
 * reduce() 메서드는 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값 반환
 */
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(array.reduce(reducer));

