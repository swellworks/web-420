/*
;============================================
; Title:  user.js
; Author: Perry Fulfs
; Date:   25 April 2021
; Description: api-gateway / user
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

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
}

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
}
// query for finding individual users by email address
module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne(query, callback);
};