/**
 * 다양한 방식의 암호화를 도와주는 모듈
 * 고객의 비밀번호는 반드시 암호화해야 한다
 * 데이터베이스가 해킹당하지 않도록 하는 동시에 안전 장치를 이중으로 만들어놓는 것이 좋다 
 */


/**
 * 1. 단방향 암호화
 * 복호화(암호화된 문자열을 원래 문자열로 되돌려놓는 것)할 수 없는 암호화 방식
 * 주로 고객 비밀번호 저장에 사용
 * => 해시 기법 사용
 * 
 * createHash
 */
const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));

crypto.randomBytes(64, (err, buf) => { 
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 10000, 64, 'sha512', (err, key) => {
        console.log('password:', key.toString('base64'));
    })
})

/**
 * 양방향 암호화
 * 양방향 대칭형 암호화 - 암호화된 문자열을 복호화 가능. 키(열쇠)사용됨. 암호를 복호화하려면
 * 암호화할 때 사용한 키와 같은 키를 사용해야 함
 * 
 */

const cipher = crypto.createCipheriv('aes-256-cbc', '열쇠');
let result = cipher.update('암호화할 문장', 'utf-8', 'base64');
result += cipher.final('base64');
console.log('암호화:', result);

