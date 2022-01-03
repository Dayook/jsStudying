var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace',
    apiVersion: '7.1'
})

client.ping({
    requestTimeout: 1000
}, function(error){
    if(error){
        console.trace('elasticsearch cluster is down!');
    } else {
        console.log('All is well');
    }
});




client.search({
    index: 'test_data',
    body: {
        query: {
            match: {
                title: 'nginx'
            }
        }
    }
}).then(function (body) {
    var hits = body.hits.hits;
}, function(error) {
    console.trace(error.message);
});




// try{
//     const response = await client.search({
//         q: 'pants'
//     });
// } catch(error) {
//     console.trace(error.message)
// }

// const response = await client.search({
//     index: 'twitter',
//     type: 'tweets',
//     body: {
//         query: {
//             match: {
//                 body: 'elasticsearch'
//             }
//         }
//     }
// })

// for (const tweet of response.hits.hits) {
//     console.log('tweet', tweet);
// }
