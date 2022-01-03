'use strict'

requestAnimationFrame('array.prototype.flatmap').shim();
const { Client } = require('@elastic/elasticsearch');
const client = new Client({
    node: 'http://localhost:9200'
})

async function run() {
    await client.indices.create({
        index: 'tweets',
        body: {
            mappings:{
                properties:{
                    
                }
            }
        }
    })

}