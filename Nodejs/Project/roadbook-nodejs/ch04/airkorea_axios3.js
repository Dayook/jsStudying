const morgan = require('morgan');
const axios = require('axios');
const express = require('express');
const app = express();

/* 포트 설정 */
app.set('port', process.env.PORT || 8080);

/* 공통 미들웨어 */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 라우팅 설정 */
app.get('/airkorea/detail', async (req, res) => {
    const serviceKey = "tpYCD5ztyfrCKsv%2B%2FY%2BDt1rx5%2BKpKjFzTjfxuUdyaRileIcgcx4W5Gs3c9sFWqcxATSC9DudMjZXEICkhebmFw%3D%3D";
    const airUrl = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?"; //시도별 실시간 측정정보 조회 콜백 url

    let params = encodeURI('serviceKey') + '=' + serviceKey;
    params += '&' + encodeURI('returnType') + '=' + encodeURI('json')
    params += '&' + encodeURI('numOfRows') + '=' + encodeURI('1');
    params += '&' + encodeURI('pageNo') + '=' + encodeURI('1');
    params += '&' + encodeURI('sidoName') + '=' + encodeURI('경기');
    params += '&' + encodeURI('ver') + '=' + encodeURI('1.3');

    const url = airUrl + params;

    try {
      const result = await axios.get(url);
      const resultResBody = result.data.response.body; 
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

      res.send(`관측 지역: ${airItem.location} / 관측 시간: ${airItem.time} <br>
      미세먼지 ${badAir[0]} 초미세먼지 ${badAir[1]} 입니다.`);
  } catch (error) {
      console.log(error);
  }
});

/* 서버와 포트 연결.. */
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 서버 실행 중😂')
});