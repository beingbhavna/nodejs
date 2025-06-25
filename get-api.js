const express = require('express');
const dbConnect = require('./mongodb-connection');
const app = express();
const mongodb = require('mongodb')
app.use(express.json());

app.get('', async (req, resp) => {
    let db = await dbConnect();
    let data = await db.find().toArray();
    resp.send(data)
    console.log(data)
});

app.post("/", async (req, resp) => {
    let db = await dbConnect();
    console.log(req.body)
    let data = await db.insertOne(req.body);
    resp.send(data)
    console.log(data)
});

app.put("/:name", async (req, resp) => {
    console.log(req.body);
    let db = await dbConnect();
    let result = db.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    resp.send({ result: "update" })
});

app.delete("/:id", async (req, resp) => {
    console.log(req.params.id);
    let db = await dbConnect();
    let data = db.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    resp.send("Delete");
})
app.listen(5600);