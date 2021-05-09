/*
============================================
; Title: Assignment 8.4
; Author: Richard Krasso
; Date: 09 May 2021
; Modified By: Perry Fulfs
; Description: API Gateway Part V
;===========================================
*/ 

// Verify token on GET
exports.user_token = function(req, res) {
    User.getById(req.userId, function(err, user) {
        if (err) return res.status(500).send('There was a problem finding the user.');

        if (!user) return res.status(404).send('No user found.');

        res.status(200).send(user);
    });
};

// check token
var jwt = require('jsonwebtoken');
var config = require('./config');


/**
 * Check the HTTP header for a valid JSON web token
 * @param req
 * @param res
 * @param next
 */
function checkToken(req, res, next) {

    var token = req.headers['x-access-token'];

    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.'});

    jwt.verify(token, config.web.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.'});

        req.userId = decoded.id;
        next();
    });
}


module.exports = checkToken;