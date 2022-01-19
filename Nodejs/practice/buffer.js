/**
 * 파일을 읽거나 쓰는 방식에는 크게 두 가지, 버퍼/ 스트림이 있음
 * 파일 읽을 때 메모리에 파일 크기만큼 공간을 마련해두고, 데이터를 메모리에 저장한 뒤
 * 사용자가 조작할 수 있도록 해줌
 *
 */

const buffer = Buffer.from("저를 버퍼로 바꿔보세요");
console.log("from():", buffer);
console.log("length:", buffer.length);
console.log("toString()", buffer.toString());

const array = [
  Buffer.from("띄엄"),
  Buffer.from("띄엄 "),
  Buffer.from("띄어쓰기"),
];
const buffer2 = Buffer.concat(array);
console.log(buffer2.toString());

// alloc
// 빈 버퍼 생성
const buffer3 = Buffer.alloc(5);

