const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

let command = process.argv[2];

if (command === "add") console.log('adding new note');
if (command === "read") console.log('reading note');
if (command === "list") {
  console.log('listing all notes')
} else {
  console.log('command not recognized');
}
// let user = os.userInfo();
//
// fs.appendFile('greetings.txt', 'Hello' + user.username + 'you are ' + notes.age, err => err ? console.log(err) : console.log("success"))
