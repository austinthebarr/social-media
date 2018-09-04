import React from "react";
import Nav from "./Nav";
import User from "./User";
import NewsFeed from "./NewsFeed";
import AddFriend from "./AddFriend";

function App(){
  var appStyles = {
    display:"flex",
    justifyContent:"space-between"
  }
  return (
    <div>
      <Nav/>
      <div style ={appStyles}>

        <User
          name="Hisato Tokyo"/>
        <NewsFeed style/>
        <AddFriend/>
      </div>
    </div>
  );
}

export default App;
