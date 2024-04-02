import React from "react";
import NoteItem from "./NoteItem";

const Notes=(props)=>
{
    return (
        <div>
          {props.items.map(note => (
            <NoteItem
              key={note.id}
              title={note.title}
              description={note.description}
            />
          ))}
        </div>
      );
      
}
export default Notes;