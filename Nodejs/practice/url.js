const url = require('url');

const {URL} = url;
const myURL = new URL('http://www.naver.com');
console.log('new URL():', myURL);
console.log('url.format()', url.format(myURL));
console.log('-----------------------');
const parseUrl = url.parse('https://channel.io/ko');
console.log(parseUrl);