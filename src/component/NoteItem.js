import React from 'react';


const NoteItem=(props)=>
{

    
    return(

        <div>
           <div >
               <h2>{props.title}</h2>
           </div>
           <div >
               <h4>{props.description}</h4>
           </div> 
          
        </div>
    );
}
export default NoteItem;