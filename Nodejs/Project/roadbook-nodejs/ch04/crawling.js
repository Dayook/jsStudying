const cheerio = require("cheerio");
const axios = require("axios");

const getHtml = async () => {
  try {
    return await axios.get(
      "https://roadbook.co.kr/category/%EC%8B%A0%EA%B0%84%EC%86%8C%EA%B0%9C"
    );
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then((html) => {
    let ulList = [];
    const $ = cheerio.load(html.data); //html 문자열 -> cheerio 객체로 변환하는 함수 cheerio.load() 사용하여 $ 변수에 cheerio 객체 저장
    console.log($("div#searchList ol").children("li")); //html 셀렉터 받음
    const $bodyList = $("div#searchList ol").children("li"); //원하는 데이터 $bodyList 변수 안에 넣기

    $bodyList.each(function (i, elem) {
      //태그들이 담긴 배열을 순회하면서 콜백 함수를 실행
      ulList[i] = {
        bookList: $(this).find("a").text(), //find()함수와 text() 함수를 통해 <a> 태그 안에 텍스트만 뽑기
        url: $(this).find("a").attr("href"), //attr() : 해당 속성 안에 들어있는 텍스트 뽑기
      };
    });

    const data = ulList.filter((n) => n.bookList);
    return data;
  })
  .then((res) => console.log(res));
