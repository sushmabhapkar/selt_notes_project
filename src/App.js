import React,{useState} from 'react';
import SearchBar from './component/SearchBar';
import NotesList from './component/NotesList';
import NewNote from './component/NewNote';
import './App.css';
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
   }
];



function App(props) {
  const [notes,setNotes]=useState(Dummy_notes);

  const [searchTerm, setSearchTerm] = useState('');

  const addNoteHandler = (note) => {
    setNotes((prevNotes) => {
        return [note, ...prevNotes];
    });
};

const handleDeleteNote = (index) => {
  const updatedNotes = [...notes];
  updatedNotes.splice(index, 1);
  setNotes(updatedNotes);
};

const filteredNotes = notes.filter(note =>
  note.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>

    
      <SearchBar onSearch={setSearchTerm} />
      <div className='notes-info'>
       <strong><h3>Total Notes:{notes.length}</h3></strong> 
      <strong><h3>Showing: {filteredNotes.length}</h3></strong> 
      </div>
       <NewNote onAddNote={addNoteHandler}/>
       <NotesList notes={filteredNotes} onDelete={handleDeleteNote} />
    </div>
  );
}

export default App;
