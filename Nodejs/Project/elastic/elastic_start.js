/**
 * Creating Client
 * 
 * Start using Elasticsearch.js is by creating an instance of the elasticsearch.Client class
 * elasticsearch.CLient 클래스의 인스턴스를 생성함으로써 시작됩니다.
 * Client 생성자는 인자로 단일 객체를 받을 수 있으며 이 객체 안에서 설정을 할 수 있습니다. 
 */

var elasticsearch = require('@elastic/elasticsearch');
var client = new elasticsearch.Client(
    { node: 'http://localhost:9200' }
)

/** 
 * Say hello to Elasticsearch
 * 
 * client의 대부분의 메소드들은 두 가지의 인자를 받을 수 있습니다.
 * (1) params 
 * (2) callback - 메소드의 최종 결과와 함께 호출될 함수. 수행되면 promise가 return 됨 
 */

client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.log(error);
        console.error('elasticsearch cluster is down');
    } else {
        console.log('All is well');
    }
})


