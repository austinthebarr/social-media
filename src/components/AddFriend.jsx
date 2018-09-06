import React from 'react';
import Friend from './Friend';
import FriendHeader from './FriendHeader';

const friendList = [ 
  {
    name: 'Steven Tran'
  },
  {
    name: 'Jon Lemon'
  },
  {
    name: 'Yoko Bono'
  },
  {
    name: 'E-40'
  },
  {
    name: 'J-Cole'
  },
  {
    name: 'Derek'
  }
];

const AddFriend = () => {
  var friendStyles = {
    border:'2px solid grey',
    maxWidth:'30%',
    float: 'right'
  };

  return (
    <div style ={friendStyles}>
      <FriendHeader/>
      {friendList.map((friend, index )=>
        <Friend
          name={friend.name}
          key={index} />
      )}
    </div>
  );
};

export default AddFriend;
