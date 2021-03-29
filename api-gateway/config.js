/*
;============================================
; Title:  config.js
; Author: Perry Fulfs
; Date:   28 March 2021
; Description: config.js updates
;===========================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;

config.web.secret = 'topsecret'