import * as notesAPI from '../../utilities/notes-api';
import { useState, useEffect } from 'react';

const MyNotePage = () => {
  const [notes, setNotes] = useState([]);
  
  const handleDelete = async (id) => {
    await notesAPI.deleteNotes(id)
    const updatedNotes = notes.filter(n => id !== n._id)
    setNotes(updatedNotes)    
  }


  useEffect(()=> {
    const getNotes = async () => {
      const notes = await notesAPI.getNotes();
      setNotes(notes);
    };
    getNotes();
  },[])
  return (
    <ul>{ notes.map(n => <li key={n._id}><span>{new Date().toLocaleString()}</span> <span>{n.text}</span><button onClick={()=>handleDelete(n._id)}>Delete</button></li> ) }</ul>
  )
};

export default MyNotePage;
