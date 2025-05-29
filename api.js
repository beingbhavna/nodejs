// const http = require("http");
// const data = require('./data')
// const fs = require('fs');

// const input = process.argv;
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])    
// }else{
//     console.log('this is invalid input')
// }

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-type':'text/html'});
//     resp.write(JSON.stringify(data))
// }).listen(4500);



// express.js


const express = require('express');
const app = express();

app.get('', (req, resp) => {
    resp.send(`<h1>Hello this is a home page</h1>
        <a href="/about">Go to about page</a>
        `);
});


// http://localhost:5600/about?name=Bhavna

app.get('/about', (req, resp) => {
    resp.send(`<h1>Hello this is a about us page</h1>
        <input type="text" placeholder="User Name" value="${req.query.name}"/>
        <a href="/help">Go to help page</a><br>
        <a href="/">Go to home page</a>
        `);
});

app.get('/help', (req, resp) => {
    resp.send(`<h1>Hello this is a help page</h1>
        {
        name:"Bhavna",
        age : "27",
        designation : "Deveoper"
        }<br>
        <a href="/about">Go to home page</a>
        `);
});
app.listen(5600);