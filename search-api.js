require('./config');
const product = require('./products-schema');
const express = require('express');
const app = express();

app.use(express.json());

app.get("/list/:key", async (req, resp) => {
    console.log(req.params.key);
    let data = await product.find(
        {
            "$or": [
                { "name": { $regex: req.params.key } },
                { "brand": { $regex: req.params.key } },
                { "category": { $regex: req.params.key } },
                { "price": { $regex: req.params.key } }
            ]
        }
    );
    resp.send(data)
});

app.listen(5600);