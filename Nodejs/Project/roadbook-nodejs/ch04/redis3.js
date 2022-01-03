/* redis3.js */
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, "../.env")})
const morgan = require('morgan');
const axios = require('axios');

/* express app generate */
const express = require('express');
const app = express();

/* redis connect */
const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1');
client.on('error', (err) => {
   console.log('Redis Error: ' + err);
});

/* 포트 설정 */
app.set('port', process.env.PORT);

/* 공통 미들웨어 */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 라우팅 설정 */
app.get('/airkorea/redis', async (req, res) => {
   await client.lrange('airItems', 0, -1, async (err, cachedItems) => {
      if (err) throw err;
      if (cachedItems.length) { //data in cache
         res.send(` 데이터가 캐시에 있습니다. <br>
            관측 지역: ${cachedItems[0]} / 관측 시간: ${cachedItems[1]} <br>
            미세먼지 ${cachedItems[2]} 초미세먼지 ${cachedItems[3]} 입니다.
         `);
      } else { //data not in cache
         const serviceKey = process.env.airServiceKey;
         const airUrl = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?";

         let params = encodeURI('serviceKey') + '=' + serviceKey;
         params += '&' + encodeURI('returnType') + '=' + encodeURI('json')
         params += '&' + encodeURI('numOfRows') + '=' + encodeURI('1');
         params += '&' + encodeURI('pageNo') + '=' + encodeURI('1');
         params += '&' + encodeURI('stationName') + '=' + encodeURI('종로구');
         params += '&' + encodeURI('dataTerm') + '=' + encodeURI('DAILY');
         params += '&' + encodeURI('ver') + '=' + encodeURI('1.3');

         const url = airUrl + params;
         try {
            const result = await axios.get(url);
            const resultResBody = result.data.response.body; 
            // res.send(resultResBody);
            // res.json(result.data.response.body.items[0]['dataTime']);
            const airItem = {
                "location": resultResBody.items[0]['stationName'], // 지역
                "time": resultResBody.items[0]['dataTime'], // 시간대
                "pm10": resultResBody.items[0]['pm10Value'], // pm10 수치
                "pm25": resultResBody.items[0]['pm25Value'] // pm25 수치
            }
            const badAir = [];
            // pm10은 미세먼지 수치
            if (airItem.pm10 <= 30) {
                badAir.push("좋음😀");
            } else if (airItem.pm10 > 30 && airItem.pm10 <= 80) {
                badAir.push("보통😐");
            } else {
                badAir.push("나쁨😡");
            }
      
            //pm25는 초미세먼지 수치
            if (airItem.pm25 <= 15) {
                badAir.push("좋음😀");
            } else if (airItem.pm25 > 15 && airItem.pm10 <= 35) {
                badAir.push("보통😐");
            } else {
                badAir.push("나쁨😡");
            }

            const airItems = [airItem.location, airItem.time, badAir[0], badAir[1]];
            airItems.forEach(val => {
               client.rpush('airItems', val); //redis에 저장
            })
            client.expire('airItems', 60 * 60) //데이터 유효 시간 설정: 60분
            res.send('캐시된 데이터가 없습니다.');
        } catch (error) {

            console.log(error);
        }
      }
   })     
});

/* 서버와 포트 연결.. */
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
    console.log('airkorea redis test')
});