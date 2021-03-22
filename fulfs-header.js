/*
============================================
; Title:  header.js
; Author: Perry Fulfs
; Date:   09 Janruary 2021
; Modified By: Perry Fulfs
; Description: header
===========================================
*/

/*
Params: firstName, lastName, assignment
Response: output
Description: Returns a well-formatted string header
*/

exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\n' +
	new Date().toLocaleDateString('en-US') + "\n"

	return output

}
