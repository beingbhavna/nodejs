const express = require('express');
const app = express();

const middleware = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("This is a middleware and please enter age");
  } else if (req.query.age > 18) {
    console.log("Your age is greater then 18 and you can drive");
    resp.send("Your age is greater then 18 and you can drive");
  } else if (req.query.age < 18) {
    console.log("You are under age you can not drive");
    resp.send("You are under age you can not drive");
  }
  else {
    next();
  }
}

app.use(middleware);//this line is used in application level middleware
app.get('/', (req, res) => {
  res.send('Welcome to the home page');
});
app.get('/users', (req, res) => {
  res.send('Welcome to the users page');
});

app.listen(5600, () => {
  console.log('Server is running on port 5600');
});
