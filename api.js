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
    resp.send('Hello this is a home page');
});

app.get('/about', (req, resp) => {
    resp.send('Hello this is a about us page');
});

app.get('/help', (req, resp) => {
    resp.send('Hello this is a help page');
});
app.listen(5600);