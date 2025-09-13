import React from 'react'
import NoteCard from './NoteCard'

const NoteList = ({note}) => {
  return (
    <div>
      <h1>List of Notes</h1>
      {note.length === 0 ? (
        <p>No notes available</p>
      ) : (
        note.map((n) => (
          <NoteCard key={n.id} note={n} />
        ))
      )}
    </div>
  )
}

export default NoteList
