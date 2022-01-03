const url = require('url');
const queryString = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
// 자바스크립트 객체로 분해
const query = queryString.parse(parsedUrl.query);
// 분해된 query 객체를 문자열로 다시 조립
console.log('queryString.parse(): ', query);
console.log('queryString.stringfy(): ', queryString.stringify(query));

