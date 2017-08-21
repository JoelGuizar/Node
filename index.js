const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const _ = require('lodash');
const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];

//console.log('this is', yargs);

if (command === "add") notes.addNote(argv.title, argv.body) ? console.log('note added'): console.log('couldnt log note');
if (command === "list") notes.getAll();
if (command === "remove") notes.removeNote(argv.title) ? console.log('removed'): console.log('doesnt exist');
if (command === "read") notes.getNote(argv.title);
if (command !== "read" || "remove" || "list" || "add") console.log("command not found");
// let user = os.userInfo();
//
// fs.appendFile('greetings.txt', 'Hello' + user.username + 'you are ' + notes.age, err => err ? console.log(err) : console.log("success"))
