/**
 * 실행 컨텍스트(Execution Context)는 scope, hoisting, this, function, clousre 등 동작 원리를 담고 있는
 * 자바스크립트의 핵심 원리
 * 
 * 실행 가능한 코드를, 형상화하고 구분하는 추상적인 개념
 * 실행 가능한 코드가 실행되기 위해 필요한 환경
 * 
 */

var x = 'xxx';

function foo () {
    var y = 'yyy';

    function bar () {
        var z = 'zzz';
        console.log(x + y + z);
    }
    bar();
}

foo();


