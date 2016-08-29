'use strict';

var express = require('express'),
    path    = require('path'),
    body    = require('body-parser'),
    app     = express();

app.use(body.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('home.ejs');
});

app.get('/login', function(req, res) {
	res.render('login.ejs');
});


app.listen(3000, function() {
	console.log("app running on port 3000");   
});