var express = require('express');
var app     = express();
var mongoose = require('mongoose');
var flash    = require('connect-flash');



//routes

app.get('/'), function (req, res) {
    res.send("Hello world!!")
});

app.get('/about'), function (req, res) {
    res.send("This is the About Page")
});