const fs = require("fs");
const path = require("path");
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'public')
console.log(publicPath)
// app.use(express.static(publicPath));
app.get('', (req, resp) => {
    resp.sendFile(`${publicPath}/home.html`)
});
app.get('/about', (req, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
});
app.get('/help', (req, resp) => {
    resp.sendFile(`${publicPath}/help.html`)
});
// app.get('*', (req, resp) => {
//     resp.sendFile(`${publicPath}/nopage.html`)
// })

app.listen(5600);