import React from 'react';

function NavButton(){
  var navButtonStyle = {
    float: 'left'
  };
  return (
    <div style={navButtonStyle}>
      <button>Home</button>
      <button>Notification</button>
      <button>Messages</button>
    </div>
  );
}

export default NavButton;
