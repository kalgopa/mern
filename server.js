var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello from server.js")
});

console.log("Server running on port 3000");
