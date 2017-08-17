const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const _ = require('lodash');
const notes = require('./notes.js');


let command = process.argv[2];

if (command === "add") console.log('adding new note');
if (command === "read") console.log('reading note');
if (command === "remove") console.log('removing note');
if (command === "list") {
  console.log('listing all notes')
} else {
  console.log('command not recognized');
}
// let user = os.userInfo();
//
// fs.appendFile('greetings.txt', 'Hello' + user.username + 'you are ' + notes.age, err => err ? console.log(err) : console.log("success"))
