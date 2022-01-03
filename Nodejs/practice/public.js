var request = require('request');

var url = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=aGeQldhT9zqdEHY5KQKzNWlU%2BBPUa7SCjX8FRJtdYmyq%2F4PKERA22YLOFNh%2FAeiGNQGBhvtoI2pM5k5NKznxsg%3D%3D';

queryParams += '&' + encodeURIComponent('returnType') + '=' + encodeURIComponent('xml'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /* */
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('searchDate') + '=' + encodeURIComponent('2020-11-14'); /* */
queryParams += '&' + encodeURIComponent('InformCode') + '=' + encodeURIComponent('PM10'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});

