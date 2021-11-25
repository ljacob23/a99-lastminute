var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const api = require('./backend/api')
app.use('/app', api)

const frontendPath = __dirname + "/frontend/"
app.get('/', function (req, res) {
    res.sendFile(frontendPath + 'index.html')
})

app.get('/game', function (req, res) {
    res.sendFile(frontendPath + 'game.html')
})

module.exports = app;
