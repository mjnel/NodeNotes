
console.log("starting notes");

const fs = require ('fs');

// common function
var fetchNotes = () => {
  try {

// is the notes.json file already there/been created
  var noteString = fs.readFileSync("notes-data.json")
  return JSON.parse(noteString);
  }catch(e){
    return [];
  }

}

// common function
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes))
  console.log("saved new file");

}


//*****************************************************************************
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    // building an array which is going to be a duplicate of the notes array IF there are duplicate values
    var duplicateNotes =  notes.filter((element) => element.title === note.title)

    if (duplicateNotes.length === 0){
    notes.push(note)
    saveNotes(notes);
    return note;
    }

};

var getAll = ()=>{
return fetchNotes ();

}


var getNote = (title) => {


  var notes = fetchNotes();
  var specificNote =  notes.filter((element) =>  element.title === title)

  return specificNote[0];




}


var removeNote = (title) => {



  var noteArr = fetchNotes();
  if (noteArr.length > 0){
    var newNoteArray =  noteArr.filter(element => element.title !==   title);
    saveNotes(newNoteArray);
  }else{
    console.log("No Notes, please create one first");
  }

  // true means they're diff lenghts so note removed
  var noteRemoved = noteArr.length !== newNoteArray.length
  //  console.log(`noteRemoved is equal to: `, noteRemoved);
  // return noteRemoved;

  return noteRemoved;


}


var logNote = (note) => {
  //break on this line
  //
  debugger;
  console.log("-------------");
  console.log (`Title: ${note.title}`)
  console.log (`Body: ${note.body}`)

}














module.exports ={
    addNote,
    getAll,
    getNote ,
    removeNote,
    logNote
}
