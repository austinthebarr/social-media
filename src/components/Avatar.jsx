import React from 'react';
// import PropTypes from 'prop-types';
import austin from '../assets/img/austin.jpg';

function Avatar(){
  var imgStyle = {
    height:'100px',
    width:'100px',
    borderRadius: '25%'
  };
  return (
    <img src={austin} style={imgStyle}/>
  );
}

export default Avatar;
