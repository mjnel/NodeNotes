

// third pary packages
const _ = require ('lodash');
const yargs = require ('yargs');

// node packages
const fs = require('fs');


//appset up
const argv = yargs.argv;
const notes = require('./notes.js');






var command = argv._[0];


switch(argv._[0]){

case "add":
  var note = notes.addNote (argv.title, argv.body);

      if (note){
        notes.logNote(note);
      }else {
        console.log("Note not found!");
      }
break;

case "list":
    var allNotes = notes.getAll();
    debugger;
    console.log(`Printing ${allNotes.length} note(s)`)

    allNotes.forEach((e) => notes.logNote(e))  ;


break;

case "read":
      var note = notes.getNote(argv.title);

      if (note){
        notes.logNote(note);

      }else {
        console.log("Note not found!");
      }








break;
case "remove":
      var noteRemoved =  notes.removeNote(argv.title);
      var message = noteRemoved ? "note was removed" : "note was not removed";

        console.log(message);
break;
default:
    console.log("command not regognised");

}
