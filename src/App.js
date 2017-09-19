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
import ClockPractice from './ClockPractice';
import QuizComponent from './QuizComponent';


class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamAScore: 0,
      teamBScore: 0,
    }
  }

  render = () => {
    return (
      <div>
        <div>
          <h1>Team A</h1>
          
        </div>

        <div>
          <h1>Team B</h1>

        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 'abc',
      value2: 'def',
    }
  }

  updateValue1 = () => {
    this.setState({
      value1: '123',
    })
  }

  render() {
    return (
      <ClockPractice />
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
