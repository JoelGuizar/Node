const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  }

  try {
    let noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString)
  } catch (error){
    console.log("no notes");
  }

  let duplicateNotes = notes.filter(note => note.title === title)

  if (duplicateNotes.length === 0){
    notes.push(note)
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }

}

const getAll = () => {
  console.log('getting all notes');
};

const getNote = (title) => {
  console.log('getting note', title);
};

const removeNote = (title) => {
  console.log('removing note', title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
