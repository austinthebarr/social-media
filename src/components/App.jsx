import React from "react";
import Nav from "./Nav";
import User from "./User";
import NewsFeed from "./NewsFeed";

function App(){
  return (
    <div>
      <Nav/>
        <User
          name="Hisato Tokyo"/>
        <NewsFeed/>
    </div>
  );
}

export default App;
