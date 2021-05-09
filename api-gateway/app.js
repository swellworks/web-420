/*
;============================================
; Title:  app.js
; Author: Perry Fulfs
; Date:   09 May 2021
; Description: Assignment 8.4 – API Gateway Part V
;===========================================
*/

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// Configure the MongoDB connection
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var index = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');
// var usersRouter = require('./routes/users');

var app = express();

/**
*
Database connection
*/
mongoose.connect('mongodb+srv://admin:admin@buwebdev-cluster-1.nclbl.mongodb.net/api-gateway?retryWrites=true&w=majority', { // IMPORTANT: Not sure if this is correct
  promiseLibrary: require('bluebird')
}).then ( () => console.log('connection successful'))
.catch( (err) => console.error(err));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', apiCatalog);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

