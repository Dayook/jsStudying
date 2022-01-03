var array = ['one', 'two'];
array.name = 'myarray'

for (var index in array) {
    console.log(index + ':  ' + array[index]);
}

for( const value of array){
    console.log(value);
}

const foo = {
    val: 10
}


const bar = foo;
console.log(foo.val, bar.val)
console.log(foo === bar);

bar.val = 20;
console.log(foo.val, bar.val);
console.log(foo === bar);


/**
 * 
 * Immutability(변경불가성)
 * 함수형 프로그래밍의 핵심 원리!
 * 
 * 객체는 참조(reference) 형태로 전달하고 전달 받는다.
 * 의도치 않은 객체의 변경이 발생하는 원인:
 * 레퍼런스를 참조한 다른 객체에서 객체를 변경하기 떄문임.
 * 따라서 객체를 불변 객체로 만들어 프로퍼티의 변경을 방지하는 것이 필요함
 * 
 * 
 * => 객체 변경이 필요한 경우에는 참조가 아닌
 * 객체의 방어적 복사(defensive copy)를 통해 새로운 객체 새성 후 변경
 * 
 * or Observer Pattern으로 객체의 변경에 대처할 수 있다. 
 * 
 */




// ㅇㅇ
// ㅇㅇㅇ
// ㅇㅇ