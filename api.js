const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const express = require ('express');
const app = express();
const bodyParser = require('body-parser')
app.use(express.json());
app.use(bodyParser.json())

app.get('/',async(req, res)=>{
let data = await dbConnect();
data = await data.find().toArray();
console.log(data)
res.send(data);
});

app.post('/',async(req, res)=>{
let data = await dbConnect();

let result = await data.insertOne (req.body)
res.send(result)
});

app.put('/update/:id', async (req, res)=>{
    const data = await dbConnect();
    const {id} = req.params;
    const {name} = req.body;
    const objId = new mongodb.ObjectId(id)
    const result = await data.updateOne({_id:objId}, {$set:req.body})
    res.send("update successfully")
    })
    
    app.delete("/:id", async(req, res)=>{
    console.log(req.params.id)
    const data = await dbConnect();
    const result = await data.deleteOne(
    {_id:new mongodb.ObjectId(
    req.params.id)})
    res.send(result)
    })
    
    app.listen(5000)