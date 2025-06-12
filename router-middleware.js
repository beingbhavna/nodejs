module.exports = middleware = (req,resp,next) =>{
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