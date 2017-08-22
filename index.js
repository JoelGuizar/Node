const fs = require('fs');
const os = require('os');
const yargs = require('yargs');
const _ = require('lodash');
const notes = require('./notes.js');

  //the commands shown to be available.
const argv = yargs
  .command('add', 'Add a new note', {
    title: {
      describe: 'Title of note', //what's passed into
      demand: true, //false by default, now if you run add command without title you will fail
      alias: 't' //allows you to provide shortcut so you don't have to type '--', all you need is the flag and the alias '-t'
    },
    body: {
      describe: 'Body of note',
      demand: true,
      alias: 'b'
    }
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: {
      describe: 'Title of note',
      demand: true,
      alias: 't'
    }
  })
  .command('remove', 'Remove a note')
  .help() //sets up yargs to return info
  .argv;

let command = argv._[0];


if (command === "add") notes.addNote(argv.title, argv.body) ? console.log('note added'): console.log('couldnt log note');
if (command === "list") notes.getAll();
if (command === "remove") notes.removeNote(argv.title) ? console.log('removed'): console.log('doesnt exist');
if (command === "read") notes.getNote(argv.title);
if (command !== "read" || "remove" || "list" || "add") console.log("command not found");
// let user = os.userInfo();
//
// fs.appendFile('greetings.txt', 'Hello' + user.username + 'you are ' + notes.age, err => err ? console.log(err) : console.log("success"))
