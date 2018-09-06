import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';


function Friend(props) {
  return (
    <div>
      <Avatar/>
      <h3>{props.name}</h3>
      <button>Add</button>
      <hr/>
    </div>
  );
}

Friend.propTypes = {
  name: PropTypes.string.isRequired

};
export default Friend;
