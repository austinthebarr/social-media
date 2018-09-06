import React from 'react';
import Tweets from './Tweets';

function NewsFeed(){
  return (
    <div>
      <Tweets
        name="austin"
        tweet="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      <Tweets
        name="Hisato"
        tweet="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      <Tweets
        name="honeyBOOBOO"
        tweet="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
    </div>
  );
}

export default NewsFeed;
