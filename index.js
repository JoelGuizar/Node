const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const _ = require('lodash');
const notes = require('./notes.js');

const argv = yargs.argv
let command = process.argv[2];

console.log('this is', yargs);

if (command === "add") notes.addNote(argv.title, argv.body);
if (command === "read") notes.getAll();
if (command === "remove") notes.remove();
if (command === "list") {
  console.log('listing all notes')
} else {
  console.log('command not recognized');
}
// let user = os.userInfo();
//
// fs.appendFile('greetings.txt', 'Hello' + user.username + 'you are ' + notes.age, err => err ? console.log(err) : console.log("success"))
