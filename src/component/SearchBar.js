import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch}) {

  

  return (
    <div className="search-bar-container">
      <h1 className='h1'>NoteBook</h1>
      <label className="search-bar-label">Search Notes:</label>
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search notes...."
        onChange={(e) => onSearch(e.target.value)}

       
      />
       </div>
  );
}

export default SearchBar;
