const http = require('http');

const session = {};
const sessKey = new Date();
session[sessKey] = { name: 'roadbook' };


http.createServer((req, res) => {
    res.writeHead(200, { 'Set-cookie': `session=${encodeURI(sessKey)}` }); //세션에 한글 포함 오류 -> `session=${encodeURI(sesskey)}`
    res.end('Session-Cookie --> Header');
})
    .listen(8080, () => {
        console.log('8080포트에서 서버 연결 중 ..');
    });

    