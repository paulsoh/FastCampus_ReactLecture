import React, { Component } from 'react';
import AppIntro from './AppIntro';
import AppHeader from './AppHeader';
import WordLists from './Containers/WordLists';
import WordList from './Containers/WordList';
import Quiz from './Containers/Quiz';
import QuizSession from './Containers/QuizSession';

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
        <div className="ui hidden divider"></div>
        <QuizSession />
        <div className="ui divider hidden"></div>
        <div className="ui hidden divider"></div>
        <WordLists />
        <div className="ui divider hidden"></div>
        <div className="ui hidden divider"></div>
        <WordList />
        <div className="ui divider hidden"></div>
        <div className="ui hidden divider"></div>
        <Quiz />

      </div>
    );
  }
}

export default App;
