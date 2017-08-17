const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let res = notes.add(1,2);
console.log(res);

// let user = os.userInfo();
//
// fs.appendFile('greetings.txt', 'Hello' + user.username + 'you are ' + notes.age, err => err ? console.log(err) : console.log("success"))
