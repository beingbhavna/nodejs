const express = require('express');
const EventEmmitter = require('events');
const app = express();
let event = new EventEmmitter();
let count = 0;
event.on("countApi", () => {
    count++;
    console.log("event called", count)
})

app.get("/", (req, resp) => {
    resp.send("api called");
    event.emit("countApi")
});

app.get("/list", (req, resp) => {
    resp.send("list api called");
    event.emit("countApi")
});

app.get("/update", (req, resp) => {
    resp.send("update api called");
    event.emit("countApi")
});

app.get("/serach", (req, resp) => {
    resp.send("serach api called");
    event.emit("countApi")
});

app.listen(5600);