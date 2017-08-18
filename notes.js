
const addNote = (title, body) => {
  console.log('adding note', title, body);
}

const getAll = () => {
  console.log('getting all notes');
};

const remove = () => {
  console.log('removing notes');
}

module.exports = {
  addNote,
  getAll,
  remove
}
