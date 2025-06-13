const express = require('express');
const dbConnect = require('./mongodb-connection');
const app = express();


 app.get('', async(req,resp)=>{
    let db =  await dbConnect();
    let data = await db.find().toArray();
    resp.send(data)
    console.log(data)
});
app.listen(5600);