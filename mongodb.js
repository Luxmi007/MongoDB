const {MongoClient} = require('mongodb');

const url=''

const database='eComm'

const client=new MongoClient(url);

async function dbConnect(){

let result = await client.connect();

db = result.db(database);

return db.collection('products');
}

module.exports=dbConnect;
