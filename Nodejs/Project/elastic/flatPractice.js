const fruits = ['apple', ['banana', 'orange', ['melon']]];


console.log(fruits.flat(2));
console.log(fruits.flat(1));

console.log(fruits.flat(Infinity));

const children = [[1], [2], [3], [4]];

console.log(children.map((x) => x * 2).flat());

console.log(children.flatMap((x) => [x * 2]));

