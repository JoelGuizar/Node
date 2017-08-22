const fs = require('fs');

const fetchNotes = () => {
  try {
    let noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString)
  } catch (error){
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}


const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  }
  let duplicateNotes = notes.filter(note => note.title === title)

  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    console.log('note printed');
    return note
  } else {
    console.log('note not printed');
    return "note not printed"
  }

}

const getAll = () => {
  let notes = fetchNotes();
  return notes;
};

const getNote = (title) => {
  let notes = fetchNotes();
  return notes.filter(note => note.title === title)[0].body;
};

const removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title !== title)
  saveNotes(filteredNotes);

  return notes !== filteredNotes.length
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
