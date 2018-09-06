import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

function Tweets(props) {
  return (
    <div>
      <Avatar/>
      <h3>{props.name}</h3>
      <p>{props.tweet}</p>
    </div>
  );
}

Tweets.PropTypes = {
  name: PropTypes.string.isRequired,
  tweet: PropTypes.string.isRequired
};

export default Tweets;
