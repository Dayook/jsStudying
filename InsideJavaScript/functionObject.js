function add(x, y) {
    return x + y;
}

add.result = add(3, 2);
add.status = 'OK';

console.log(add.result);
console.log(add.status);


// 변수에 함수 할당
const foo = 100;
const bar = function () { return 100; };
console.log(bar()); // 출력값 100

// 프로퍼티에 함수 할당
const obj = {};
obj.baz = function () { return 200; };
console.log(obj.baz());


/**
 * 함수는 다른 함수의 인자로도 전달이 가능하다. 
 */

// 함수 표현식으로 foo() 함수 생성
const foo2 = function(func){
    func();
}

// foo() 함수 실행
foo(function(){
    console.log('Function can be used as the argument');
})

const fo0 = function() {
    return function(){
        console.log('this function is the return value')
    };
};

// 함수 객체의 표준 프로퍼티
// 일반 객체와는 다르게, 함수 객체만의 표준 프로퍼티 정의돼있음
function add(x, y) {
    return x + y;
}

console.dir(add);


