import React, {useState} from 'react'

const AddNote = ({addNote}) => {
    const [noteText, setNoteText] = useState('');

    const handleSubmit = (e) => {
        console.log("Add Note button is clicked!");
        console.log(noteText);
        e.preventDefault();
        if(noteText.trim().length > 0) {
            addNote(noteText);
            setNoteText('');
        }
    }
    

  return (
    <div>
        <h1>Add a New Note</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Type to add a note...'
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
            />
            <button type= "submit">Add Note</button>
        </form>
    </div>
  )
}

export default AddNote
