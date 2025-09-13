import React from 'react'

const NoteCard = ({note}) => {
  return (
    <div className="note">
      <p>{note.text}</p>
    </div>
  )
}

export default NoteCard
