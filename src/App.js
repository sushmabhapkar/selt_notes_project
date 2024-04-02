import React,{useState} from 'react';

import Notes from './component/Notes';
import NewNote from './component/NewNote';

const Dummy_notes=[
  {
    title:'Module 1',
    description:'Basic react Course....'
   },
  
   {
    title:'Module 2',
    description:'Advanced react Course....'
   },
   
   {
    title:'Module 3',
    description:'Frontend full Course....'
   },
   {
    title:'Module 4',
    description:'Backend full Course....'
   }
];



function App(props) {
  const [notes,setNotes]=useState(Dummy_notes);

  const addNoteHandler = (note) => {
    setNotes((prevNotes) => {
        return [note, ...prevNotes];
    });
};

  return (
    <div>
      <h1>NoteBook App</h1>
       <NewNote onAddNote={addNoteHandler}/>
      <Notes items={notes}/>
    </div>
  );
}

export default App;
