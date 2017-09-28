// third pary packages
const _ = require ('lodash');
const yargs = require ('yargs');

// node packages
const fs = require('fs');


//appset up
var  titleArgs = {
  describe: 'Title of the Note',
  demand: true,
  alias: 't'
}

var  bodyArgs = {
  describe: 'Body of the Note',
  demand: true,
  alias: 'b'
}

// https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5525266?start=15


const argv = yargs
.command('add', 'Add a new note', {title: titleArgs, body: bodyArgs})
.command('list','List all notes')
.command('read', 'Read a note', {title: titleArgs})
.command('remove', 'Remove a note', {title: titleArgs})
.help()
.argv

const notes = require('./notes.js');






var command = argv._[0];
console.log(`argv is: `, argv);


switch(argv._[0]){

case "add":
debugger;
  var note = notes.addNote (argv.title, argv.body);

      if (note){
        notes.logNote(note);
      }else {
        console.log("Note not saved!");
      }
break;

case "list":
    var allNotes = notes.getAll();
    debugger;
    console.log(`Printing ${allNotes.length} note(s)`)

    allNotes.forEach((e) => notes.logNote(e))  ;


break;

case "read":
debugger;
      var note = notes.getNote(argv.title);

      if (note){
        notes.logNote(note);

      }else {
        console.log("Note not found!");
      }
break;




case "remove":
var test = argv.title;
debugger;
      var noteRemoved =  notes.removeNote(argv.title);
      debugger;
      var message = noteRemoved ? "note was removed" : "note was not removed";

        console.log(message);
break;

case"removeAll":

var removeAll = notes.removeAll();
console.log(removeAll);

break;





default:
    console.log("command not recognised");

}
