/**
 * Rest Parameter: 매개변수 이름 앞 세개 점 ... 붙여 정의
 * Rest Parameter는 함수에 전잘된 인수들의 목록을 배열로 전달받는다.
 */

function foo(...rest) {
    console.log(Array.isArray(rest)) // true
    console.log(rest);
}

foo(1, 2, 3);


function foo2(param, ...rest) {
    console.log(param);
    console.log(rest);
}

foo2([1,2],2,3,4,5);

/** 
 * Rest Parameter는 이름 그대로, 먼저 선언된 파라미터에 할당된 인수를 제외한
 * 나머지 인수들이 모두 배열에 담겨 할당된다.
 * thus, Rest parameter should be the last element of the parameters
 * 
 * 
 * Rest parameter는 함수 정의 시 선언한 매개변수의 개수를 나타내는 함수 객체의 length 프로퍼티에 영향을 주지 않는다
 * 
 */

var foo3 = function() { 
    console.log(arguments);
}

foo3(1);


function sum() {
    var array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    })
}

console.log(sum(1,2,3,4,5));

/**
 * ES6에서는 rest parameter 사용해 가변 인자의 목록을 배열로 전달받을 수 있다.
 * 이를통해 유사 배열인 arguments 객체를 배열로 변환하는 번거로움을 피할 수 있다.
 */

function sum2(...args) {
    console.log(arguments);
    console.log(Array.isArray(arguments)); // false
    console.log(Array.isArray(args)); // true
    return args.reduce((pre, cur) => pre + cur);
}

console.log(sum2(1,2,3,4,5));

/**
 * 화살표 함수에는 함수 객체의 arguments property가 없다.
 * 따라서 화살표 함수로 가변 인자 함수를 구현해야 할 때에는 반드시 rest paratmert 사용햏야 한다.
 */




