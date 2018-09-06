import React from 'react';

function SearchBar(){
  var searchBarStyle = {
    float: 'right',
    
  };
  return (
    <div style={searchBarStyle}>
      <form>
        <input type='text'/>
        <button>Tweet</button>
      </form>
    </div>

  );
}

export default SearchBar;
