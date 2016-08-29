'use strict';

var express = require('express'),
    path    = require('path'),
    body    = require('body-parser'),
    ejs     = require('ejs'),
    app     = express();


app.use(body.urlencoded({extended: false}));

app.use(function(err, req, res, next) {
	console.error("Error Occurred");
	console.error(err.stack);
	res.status(500).render('error.ejs');
});

app.get('/', function(req, res) {
	res.render('home.ejs');
});

app.get('/login', function(req, res) {
	res.render('login.ejs');
});

app.post('/login', function(req, res) {
	var firstName = req.body.firstname,
		lastName  = req.body.lastname;
	console.log("this is body");
	console.log(firstName);
	console.log(lastName);
	res.render('home.ejs');
});


app.use(function(req,res, next) {
	console.error("PAGE NOT FOUND!!");
	res.render('error.ejs');
});

app.listen(3000, function() {
	console.log("app running on port 3000");   
});