import React, { Component } from 'react';
import AppIntro from './AppIntro';
import AppHeader from './AppHeader';
import WordLists from './Containers/WordLists';
import WordList from './Containers/WordList';
import Quiz from './Containers/Quiz';
import QuizSession from './Containers/QuizSession';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
// import Clock from './Clock';
import QuizComponent from './QuizComponent';

class App extends Component {
  render() {
    return (
      <QuizComponent />
    )
    /*
    return (
      <BrowserRouter>
        <div>
          <div className="ui attached stackable menu">
            <div className="ui container">
              <Link to="/word-lists" className="item">
                <i className="home icon"></i> Word Lists
              </Link>
              <Link to="/quizes" className="item">
                <i className="tasks icon"></i> Quiz
              </Link>
            </div>
          </div>

          <div className="ui hidden divider"></div>
          <div className="ui hidden divider"></div>

          <Route exact path="/quizes" component={Quiz} />
          <Route path="/quizes/:gre" component={QuizSession} />
          <Route exact path="/word-lists" component={WordLists} />
          <Route path="/word-lists/:gre" component={WordList} />

        </div>
      </BrowserRouter>
    );
    */
  }
}

export default App;
