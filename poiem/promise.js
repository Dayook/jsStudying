 /**
  * 프로미스란?
  * 
  * 자바스크립트는 비동기 처리를 위한 하나의 패턴으로 콜백함수를 사용한다.
  * 하지만 전통적인 콜백 패턴은 콜백 헬로 인해 가독성이 나쁘고 비동기 처리 중 발생한 에러의 처리가 곤란하며
  * 여러 개의 비동기 처리를 한 번에 처리하는 데도 한계가 있다.
  * 
  * ES6에서는 비동기 처리를 위한 또 다른 패턴으로 프로미스를 도입했다.
  * 프로미스는 전통적인 콜백 패턴이 가진 단점을 보완하며 비동기 처리 시점을
  * 명확하게 표현할 수 있다는 장점이 있다.
  * 
  * 
  * 콜백 패턴의 단점.
  * 
  */

 // 비동기 함수
 function get(url) {
     // XMLHttpRequest 객체 생성
     const xhr = new XMLHttpRequest();
    
     // 서버 응답 시 호출될 이벤트 핸들러
     xhr.onreadystatechange = function () {
        // 서버 응답 완료가 아니면 무시 
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        if (xhr.status === 200 ){
            console.log(xhr.response);
            // 비동기 함수 결과에 대한 처리는 반환할 수 없다.
            return xhr.response;
        } else {
            console.log('Error: ' + xhr.status);
        }
    };

    xhr.open('GET', url);
    xhr.send();
 }