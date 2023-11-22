import './NewNote.css';
import { useState } from 'react';
import * as notesAPI from '../../utilities/notes-api';

const NewNotePage = () => {
  const [textInput, setTextInput] = useState('');
  const handleInput = (e) => {
    setTextInput(e.target.value)
  }
  const addNote = async (newNote) =>{
    await notesAPI.createNote(newNote)
  }
  const handleSubmit = event => {
    event.preventDefault();
    addNote(textInput)
    setTextInput('')
  };
  return (
    <div>
      <p style={{ color: 'black' }}>Add a new note : {textInput}</p>
      <form
        className="note-submit"
        onSubmit={handleSubmit}
      >
        <div>
          <textarea name="text" id="note" cols="30" rows="10" onChange={handleInput} value={textInput}></textarea>
        </div>

        <button>Add note</button>
      </form>
    </div>
  );
};

export default NewNotePage;
