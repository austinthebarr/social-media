import React from "react";

function SearchBar(){
  var searchBarStyle = {
    float: 'right',
    
  }
  return (
    <div style={searchBarStyle}>
      <form>
      <input value="Search"/>
      <button>Tweet</button>
      </form>
    </div>

  );
}

export default SearchBar;
