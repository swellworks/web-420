/*
;============================================
; Title:  app.js
; Author: Perry Fulfs
; Date:   28 March 2021
; Description: app
;===========================================
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./api-gateway/routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// Configure the MongoDB connection
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
/**
*
Database connection
*/
mongoose.connect('mongodb+srv://swellworks:l0vem3d0!@buwebdev-cluster-1.nclbl.mongodb.net//mean-library', { // IMPORTANT: Not sure if this is correct
promiseLibrary: require('bluebird')
}).then ( () => console.log('connection successful'))
.catch( (err) => console.error(err));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// api-catalog routes
var apiCatalog = require('./routes/api-catalog');

// Register the API Catalog’s routes
App.use('/api', apiCatalog);

module.exports = app;

