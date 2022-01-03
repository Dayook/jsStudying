const { Client } = require('@elastic/elasticsearch');
const client = new Client({
    node: 'http://localhost:9200'
})

async function deleteIndex (indexName) { 
    await client.indices.delete({
        index: indexName
    });
}

async function run () {

    // 인덱스 생성 + 정적 매핑
    await client.indices.create({
        index: 'colors',
        body: {
            mappings: { 
                properties:{
                    id: { type: 'integer'},
                    color: { type: 'text'},
                    value: { type: 'text'}
                }
            }
        }
    }, { ignore:[400] })
    
    // 입력할 데이터
    const dataset = [
        {
            "color": "red",
            "value": "#f00"
        },
        {
            "color": "green",
            "value": "#0f0"
        },
        {
            "color": "blue",
            "value": "#00f"
        },
        {
            "color": "cyan",
            "value": "#0ff"
        },
        {
            "color": "magenta",
            "value": "#f0f"
        },
        {
            "color": "yellow",
            "value": "#ff0"
        },
        {
            "color": "black",
            "value": "#000"
        }
    ]

    const body = dataset.flatMap((doc, idx) => 
    [{ index: { _index: 'colors', _id: idx }}, doc]
    );

    const {body: bulkResponse} = await client.bulk({ refresh: true, body})
    if (bulkResponse.errors) {
        const erroredDocuments = []
        // The items array has the same order of the dataset we just indexed.
        // The presence of the `error` key indicates that the operation
        // that we did for the document has failed.
        bulkResponse.items.forEach((action, i) => {
          const operation = Object.keys(action)[0]
          if (action[operation].error) {
            erroredDocuments.push({
              // If the status is 429 it means that you can retry the document,
              // otherwise it's very likely a mapping error, and you should
              // fix the document before to try it again.
              status: action[operation].status,
              error: action[operation].error,
              operation: body[i * 2],
              document: body[i * 2 + 1]
            })
          }
        })
        console.log(erroredDocuments)
      }

    const { body: count } = await client.count({ index: 'colors' })
    console.log(count);
}


deleteIndex("colors").catch(console.log);
// run().catch(console.log)
    