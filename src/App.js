import React, { Component } from 'react';
import AppIntro from './AppIntro';
import AppHeader from './AppHeader';
import WordLists from './Containers/WordLists';

class App extends Component {
  render() {
    return (
      <div>
        <div className="ui attached stackable menu">
          <div className="ui container">
            <a className="item">
              <i className="home icon"></i> Word Lists
            </a>
            <a className="item">
              <i className="tasks icon"></i> Quiz
            </a>
          </div>
        </div>

        <div className="ui divider hidden"></div>
        <WordLists />

      </div>
    );
  }
}

export default App;
