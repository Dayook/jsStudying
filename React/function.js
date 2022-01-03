
// 자바스크립트 함수는 호출될 때
// 매개변수로 전달되는 인자값 외에 arguments 객체와 this를 암묵적으로 전달 받음

function square(number) {

    console.log(arguments);
    console.log(this);

    return number * number;
}

square(2);

var foo = function () {
    console.dir(this);
}

// 1. 함수 호출
foo(); //window

const obj = { foo: foo };
obj.foo();

const instance = new foo(); // instance

const bar = { name: 'bar' };
foo.call(bar);
foo.apply(bar);
foo.bind(bar)();

c