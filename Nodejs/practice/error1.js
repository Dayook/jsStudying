/**
 * 멀티 스레드 시스템에서는 스레드가  하나 멈추면 다른 스레드가 대신함
 * 하지만 노드는 스레드가 하나 뿐이므로 하나를 소중하게 보호해야 한다!
 * 에러가 발생할 것 강튼 부분을 try catch문으로 감싸주자
 */

setInterval(() => {
  console.log("시작");
  try {
    throw new Error("서버를 고장내주마!");
  } catch (err) {
    console.log(err);
  }
}, 1000);
