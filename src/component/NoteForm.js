import React,{useState} from "react";
import './NoteForm.css';
const NoteForm=(props)=>
{
const[enteredTitle,setEnteredTitle]=useState('');
const[enteredDescription,setEnteredDescription]=useState('');


const submitHandler=(event)=>
{
    event.preventDefault();

    const noteData={
        title:enteredTitle,
        description:enteredDescription
    };
    props.onSaveNoteData(noteData);
    setEnteredTitle('');
    setEnteredDescription('');
}

    const titleChangeHandler=(event)=>
    {
      setEnteredTitle(event.target.value);
    }

   const descriptionChangeHandler=(event)=>
   {

    setEnteredDescription(event.target.value)
   }



    return(
        <div className="note-form-container">
        <form onSubmit={submitHandler}>
          
          <label>Note Title:</label>
          <input 
          type='text'
          value={enteredTitle}
          onChange={titleChangeHandler}
          />
          
          <br></br>
          
          <label>Note Description:</label>
          <textarea
          value={enteredDescription}
          onChange={descriptionChangeHandler}
          />

          <br></br>
          
          <button type='submit'>Add To Book</button>
      
       </form>
       </div>
    )

}
export default NoteForm;