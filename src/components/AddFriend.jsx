import React from "react";
import Friend from "./Friend";
import FriendHeader from "./FriendHeader";

function AddFriend() {
  var friendStyles = {
    border:"2px solid grey",
    maxWidth:"30%",
    float: 'right'
  }
  return (
    <div style ={friendStyles}>
      <FriendHeader/>

      <Friend
        name = "Steven Tran"
        />
      <Friend
        name = "Jon Lemon"
        />
      <Friend
        name = "Yoko Bono"
        />
    </div>
  );
}

export default AddFriend;
