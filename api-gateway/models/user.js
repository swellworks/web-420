/*
;============================================
; Title:  user.js
; Author: Perry Fulfs
; Date:   28 March 2021
; Description: api-gateway
;===========================================
*/

/**
 Fields username, password, and email
 */

 var mongoose = require('mongoose');


 var userSchema = new mongoose.Schema({
     username: String,
     password: String,
     email: String
 });
 
 module.exports = mongoose.model('User', userSchema);
 
 
 /**
  Database queries
  */


