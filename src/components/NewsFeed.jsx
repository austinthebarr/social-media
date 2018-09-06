import React from 'react';
import Tweets from './Tweets';
const tweetList = [ 
  {
    name: 'Steven Tran',
    tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Jon Lemon',
    tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Yoko Bono',
    tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'E-40',
    tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'J-Cole',
    tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Derek',
    tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

function NewsFeed(){
  return (
    <div>
      {tweetList.map((tweet, index)=>
        <Tweets
          name={tweet.name}
          tweet={tweet.tweet} 
          key={index}/>
      )}
    </div>
  );
}

export default NewsFeed;
