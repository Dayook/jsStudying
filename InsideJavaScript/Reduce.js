const array1 = [1, 2, 3, 4];

const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(array1.reduce(reducer));

console.log(array1.reduce(reducer, 5));

/**
 * 리듀서 함수는 네 개의 인자를 가진다.
 * 1. 누산기(acc)
 * 2. 현재 값(cur)
 * 3. 현재 인덱스(idx)
 * 4. 원본 배열
 */

var maxCallback = (acc, cur) => console.log(Math.max(acc.x, cur.x));
var maxCallback2 = (max, cur) => console.log(Math.max(max, cur));

[{ x: 22 }, { x: 42 }].reduce(maxCallback);

[{ x: 22 }, { x: 42 }].map((el) => el.x).reduce(maxCallback2);

// reduce 작동 방식
[0, 1, 2, 3, 4].reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  return accumulator + currentValue;
});

[0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr);

// 배열 객체에서 값 합산
var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
  accumulator,
  currentValue
) {
  return accumulator + currentValue.x;
},
7);

console.log(sum);

// 중첩 배열 펼치기
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);

var flattend2 = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, curr) => acc.concat(curr), []);

console.log(flattend2);

// 객체 내의 값 인스턴스 개수 세기
var names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countedNames);

// 속성으로 객체 분류하기
var people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

var groundPeople = groupBy(people, "age");
console.log(groundPeople);

/**
 * Runs Promises from array of functions that can return promises
 * in chained manner
 */

function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  );
}

function p1(a) {
  return new Promise((resolve, reject) => {
    resolove(a * 5);
  });
}

function p2(a) {
  return new Promise((resolove, reject) => {
    resolove(a * 2);
  });
}
