import React from 'react';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';

import User from './User';
import NewsFeed from './NewsFeed';
import AddFriend from './AddFriend';

function App() {
  var appStyles = {
    display: 'flex',
    justifyContent: 'space-between',

  };
  return (
    <div>
      <Nav />
      <div style={appStyles}>
        <Switch>
          <Route path="/hisato" 
            component={User}
            name="Hisato Tokyo" />
        </Switch>
        <NewsFeed style />
        <AddFriend />
      </div>
    </div>
  );
}

export default App;
