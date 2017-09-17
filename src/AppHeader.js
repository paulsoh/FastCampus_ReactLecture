import React from 'react';
import logo from './logo.svg';


class AppHeader extends React.Component {
  render = () => {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    )
  }
}

export default AppHeader;
