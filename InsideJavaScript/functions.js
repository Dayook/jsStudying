/**
 * js 표현식에서 함수 이름은 꼭 붙이지 않아도 되는 선택사항이다.
 * 즉 함수의 이름을 지정하지 않아도 함수가 정의되며, 이러한 함수가 익명 함수임
 * 
 * 익명 함수의 대표적인 용도 : 콜백
 * 개발자는 함수를 등록하기만 하고
 * (1) 어떤 이벤트가 발생하거나 특정 시점에 도달했을 때 시스템에서 호출되는 함수
 * (2) 특정 함수의 인자로 넘겨서, 코드 내부에서 호출되는 함수
 * 
 * 
 */

/**
 * 즉시 실행 함수 : 함수를 정의함과 동시에 바로 실행하는 함수
같은 함수를 다시 호출할 수 없다...
따라서 즉시 실행 함수의 이런 특징을 이용한다면 
최초 한 번만의 실행을 필요로 하는 초기화 코드 부분에 사용할 수 있다. 
*/
(function (name) {
    console.log('This is the immediate function ->' + name);
})('foo');


/**
 * 내부 함수
 * 자바스크립트에서는 코드 내부에서도 다시 함수 정의가 가능하다
 * 내부 함수는 자바스크립트의 기능을 보다 강력하게 해주는 클로저를 생성하거나
 * 부모 코드 함수에서 외부의 접근을 막고 독립적인 헬퍼 함수를 구현하는
 * 용도 등으로 사용된다.
 */

function parent() {
    var a = 100;
    var b = 200;

    // child() 내부 함수 정의
    // 자신을 둘러싼 부모 함수의 변수에 접근이 가능하다.

    function child() {
        var b = 300;
        console.log(a);
        console.log(b);
    }

    child();
}

parent();


function parent2() {
    var a = 100;
    var child = function () {
        console.log(a);
        console.log("child");
    }
    // child() 함수 반환
    return child ;
}

var inner = parent2();
inner();


