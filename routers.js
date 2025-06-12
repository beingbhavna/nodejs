
const express = require('express');
const middleware = require('./router-middleware');
const app = express();
const route = express.Router();

route.use(middleware);
app.get('/', (req, resp) => {
    resp.send("Wlcome to the home page");
})
route.get('/help', (req, resp) => {
    resp.send("Wlcome to the help page");
})
route.get('/users', (req, resp) => {
    resp.send("Wlcome to the users page");
})
route.get('/about', (req, resp) => {
    resp.send("Wlcome to the about page");
})

app.use('/', route)
app.listen(5600);
