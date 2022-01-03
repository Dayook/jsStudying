const {Client} = require('@elastic/elasticsearch')

const client = new Client({node: 'http://localhost:9200'});
try{
    const result = await client.helpers.bulk({
        datasource: generator(),
        onDocument (doc) {
            return {
                index: {_index: 'my-index'}
            }
        }
    })
} catch (error) {
    
}


console.log(result)