import React from 'react';
import NavButton from './NavButton';
import SearchBar from './SearchBar';

function Nav(){
  var navStyle = {
    paddingTop: 10,
  };
  return (
    <div style = {navStyle}>
      <NavButton/>
      <SearchBar/>
      <br/><br/>
      <hr/>
    </div>

  );
}

export default Nav;
