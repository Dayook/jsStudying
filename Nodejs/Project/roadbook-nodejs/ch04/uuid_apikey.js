/* chapter04/board_api2.js */

const morgan = require('morgan');
const url = require('url');
const uuidAPIkey = require('uuid-apikey');

/* express app generate */
const express = require('express');
const app = express();

/* 포트 설정 */
app.set('port', process.env.PORT || 8080);


/* 공통 미들웨어 */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 테스트를 위한 API키 */
const key = {
   apiKey: 'N52HRWE-XXK4QKP-J39BBS8-EVE1GZ7', 
   uuid: 'a9451c71-ef66-4bce-90d2-b5e576dc187c'
}

/* 테스트를 위한 게시글 데이터 */
let boardList = [];
let numOfBoard = 0;

/* 라우팅 설정 */
app.get('/', (req, res) => {
   res.send('This is api.js');
})

/* 게시글 API */
app.get('/board', (req, res) => {
   res.send(boardList);
})

app.post('/board', (req, res) => {
   const board = {
      "id": ++numOfBoard,
      "user_id": req.body.user_id,
      "date": new Date(),
      "title": req.body.title,
      "content": req.body.content
   }
   boardList.push(board);

   res.redirect('/board');
});

app.put('/board/:id', (req, res) => {
   //req.params.id 값 찾아 리스트에서 삭제
   const findItem = boardList.find((item) => {
      return item.id == +req.params.id
   });

   const idx = boardList.indexOf(findItem);
   boardList.splice(idx, 1);

   //리스트에 새로운 요소 추가
   const board = {
      "id": +req.params.id,
      "user_id": req.params.user_id,
      "date": new Date(),
      "title": req.body.title,
      "content": req.body.content
   };
   boardList.push(board);

   res.redirect('/board');
});

app.delete('/board/:id', (req, res) => {
   //req.params.id 값 찾아 리스트에서 삭제
   const findItem = boardList.find((item) => {
      return item.id == +req.params.id
   })
   const idx = boardList.indexOf(findItem);
   boardList.splice(idx, 1);

   res.redirect('/board');
})

/* 게시글 검색 API using uuid-key */
app.get('/board/:apikey/:type', (req, res) => {
   let {type, apikey} = req.params;
   const queryData = url.parse(req.url, true).query;

   if (uuidAPIkey.isAPIkey(apikey) && uuidAPIkey.check(apikey, key.uuid)) {
      if (type === 'search') {
         const keyword = queryData.keyword;
         const result = boardList.filter(e => e.title.includes(keyword))
         res.send(result);
      } 
      else if (type === 'user') { //닉네임으로 게시글 검색
         const user_id = queryData.user_id;
         const result = boardList.filter(e => e.user_id === user_id);
         res.send(result);
      }
      else {
         res.send('Wrong URL');
      }
   } else {
      res.send('Wrong API key');
   }
})

/* 서버와 포트 연결.. */
app.listen(app.get('port'), () => {
   console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
})