const express = require('express');
const dbConnect = require('./mongodb-connection');
const app = express();

app.post('/', async (req, resp) => {
    let db = await dbConnect();
    console.log(req.body)
    let data = await db.insertOne(req.body);
    resp.send(data)
    // console.log(db)
});
app.listen(5600);