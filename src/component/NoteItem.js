import React from 'react';


const NoteItem=(props)=>
{

    
    return(

        <div className='note-item'>
           <div className='note-item__title'>
               <h2>{props.title}</h2>
           </div>
           <div className='note-item__Description'>
               <h4>{props.description}</h4>
           </div> 
          
        </div>
    );
}
export default NoteItem;