/*
============================================
; Title: Assignment 2.3 - API Gateway Part II
; Author: Richard Krasso
; Date: 28 March 2021
; Modified By: Perry Fulfs
; Description: API Gateway Part II
;===========================================
*/ 

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
