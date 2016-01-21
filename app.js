var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Rat = require('./models/rat');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.get('/', function(req, res){
  Rat.find({}, function(err, rats){
    res.render('index', {rats: rats});
  });
});

app.post('/rats', function(req, res){
  var rat = new Rat(req.body.rat);
  rat.save(function(err, result){
    res.redirect('/');
  });
});

app.listen(process.env.PORT || '3000');
