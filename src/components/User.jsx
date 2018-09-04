import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";

function User(props){
  var userStyles = {
    listStyle:"none",
    display:"flex",
    justifyContent:"space-between",
    marginLeft:"-25px"
  }

  var hisatosBorder = {
    border:"2px solid grey",
    maxWidth:"25%"
  }

  return (
    <div style={hisatosBorder}>
      <Avatar/>
      <h3>{props.name}</h3>
      <ul style={userStyles}>
        <li>Tweets</li>
        <li>Following</li>
        <li>Followers</li>
      </ul>
    </div>
  );
}
User.propTypes = {
 name: PropTypes.string.isRequired
};

export default User;
