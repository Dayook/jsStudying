const http = require('http');

http.createServer((req, res) => {
    // 어떻게 응답할지 적어줍니다.
    res.write('<h1>Hello Node!</h1>');
    res.end('<h1>Hello Server!</h1>');
}).listen(8080, () => {
    console.log('8080번 포트에서 서')
})