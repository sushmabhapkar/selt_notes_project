import React from 'react';
import './NotesList.css';

function NoteList({ notes, onDelete }) {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className="note-list-container">
      <ul>
        {notes.map((note, index) => (
          <li key={index} className="note-list-item">
            <div>
              <span className="note-title"><strong>{note.title}</strong></span><br />
              <span className="note-description"><strong><p>{note.description}</p></strong></span>
            </div>
            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default NoteList;
