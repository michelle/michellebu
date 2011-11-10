require.paths.unshift('./node_modules')

var express = require('express');
var fs = require('fs');
var app =  express.createServer();

// Initialize main server
app.use(express.bodyParser());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/', function(req, res){
  res.render('home', {page: 'home'});
});

app.get('/home', function(req, res){
  res.render('home', {page: 'home'});
});

app.get('/projects', function(req, res){
  res.render('projects', {page: 'projects'});
});


app.get('/design', function(req, res){
  res.render('design', {page: 'design', projects: projects});
});

app.get('/photo', function(req, res){
  res.render('photo', {page: 'photo', people: people});
});

app.get('/contact', function(req, res){
  res.render('contact', {page: 'contact'});
});

app.listen(process.env.PORT || 8082);


