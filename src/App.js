import React, { Component } from 'react';
import AppIntro from './AppIntro';
import AppHeader from './AppHeader';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppIntro />
      </div>
    );
  }
}

export default App;
