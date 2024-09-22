const {MongoClient} = require("mongodb");
const url = ""

const database = "eComm"
const client = new MongoClient(url);
async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection("products");
   // let response = await collection.find({}).toArray();

   // let response = await collection.insertOne({name: "point", timings: "9:00 to 12:30"})

   let response = await collection.deleteOne({name: "point", timings: "9:00 to 12:30"})
     
   //let response = await collection.updateOne({name: "point", timings: "9:00 to 12:30"})


    console.log(response);

}

getData();
