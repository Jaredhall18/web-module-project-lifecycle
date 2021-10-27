import React from 'react';
import User from './components/User';
import Follower from './components/Follower';

class App extends React.Component {
  render() {
    return(<div>
     <h1>GitHub User Info</h1>
        <MainUser />
        <Follower />
    </div>);
  }
}

export default App;
