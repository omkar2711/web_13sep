import { useState } from 'react'
import './App.css'
import NoteList from './components/NoteList'
import AddNote from './components/AddNote'

function App() {
  
  const [note , setNote] = useState([]);

  const addNote = (noteText) => {
    const newNote = {
      id : Date.now(),
      text : noteText
    };

    setNote([...note, newNote]);
  }

  return (
    <div className='app-container'>
      <h1>Notes App</h1>
        <AddNote addNote={addNote} />
        <NoteList note={note} />

    </div>
  )
}

export default App
