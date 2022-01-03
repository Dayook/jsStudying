const {odd, even} = require('./var');
const checkNumber = require('./func');
/**
 * var.js와  func.js 모두 참조,
 * 모듈 하나가 여러 개의 모듈 사용할 수 있음
 * 변수 이름 다르게 지정할 수 있음
 */

function checkStringOddOrEven(str){
    if(str.length % 2) { 
        return odd
    }

    function checkStringOddOrEven(str){
        if(str.length % 2){
            // 홀수면
            return odd;
        }
        return even;
    }

}


console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));