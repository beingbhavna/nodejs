require('./config');
const product = require('./products-schema');
const express = require('express');
const app = express();
app.use(express.json());
app.post("/create", async (req, resp) => {
    let data = new product(req.body);
    let result = await data.save();
    console.log(result);
    resp.send("Created");
});


app.get("/list", async (req, resp) => {
    let data = await product.find();
    console.log(data);
    resp.send(data);
});


app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params);
    let data = await product.deleteOne(req.params);
    resp.send(data);
});


app.put("/update/:_id", async (req, resp) => {
    let data = await product.updateOne(
        req.params,
        {
            $set: req.body
        }
    )
    resp.send("Updated", data);
})

app.listen(5600);