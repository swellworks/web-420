/*
;============================================
; Title:  api-catalog.js
; Author: Perry Fulfs
; Date:   28 March 2021
; Description: api-catalog
;===========================================
*/

/**
* API Routes
*/
var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');
// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);
// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);
module.exports = router;
// routes to allow user login requests
router.post('/auth/login', auth_controller.user_login);
// new function to the authController to handle user logout requests
exports.user_logout = function(req, res) {
    res.status(200).send({ auth: false, token: null});
};
// routes to allow user logout requests
router.get('/auth/logout', auth_controller.user_logout);
