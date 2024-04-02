import React from "react";
import NoteForm from "./NoteForm";
const NewNote=(props)=>
{

    const saveNoteDataHandler=(enteredNoteData)=>
    {
      const noteData={

        ...enteredNoteData,
        id:Math.random().toString()
      };

      props.onAddNote(noteData);
    };

    return (
        <div>
            <NoteForm onSaveNoteData={saveNoteDataHandler}/>
        </div>
    );
}
export default NewNote;