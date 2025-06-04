const fs = require("fs");
const path = require("path");
const express = require('express');
const app = express();
app.set('view engine', 'ejs')
const publicPath = path.join(__dirname, 'public')
console.log(publicPath)
// app.use(express.static(publicPath));
app.get('', (req, resp) => {
    resp.sendFile(`${publicPath}/home.html`)
});
app.get('/profile', (req, resp) => {
    const user = {
        name: 'Bhavna',
        email: 'test@gmail.com',
        number:'7895030785'
    }
    resp.render('profile',{user})
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