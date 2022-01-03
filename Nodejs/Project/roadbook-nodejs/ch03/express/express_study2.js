const express = require('express');

const app = express();
// 포트를 세팅
app.set('port', process.env.PORT || 8080);


app.get('/', (req, res) => {
    res.sendFile(__dirname +'/index.html');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행중!')
});