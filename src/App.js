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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPathName: '/',
    }
  }

  componentDidMount = () => {
    const currentPathName = window.location.pathname;
    this.setState({
      currentPathName: currentPathName,
    })
  }

  goToPath = (pathname) => {
    this.setState({
      currentPathName: pathname,
    })

    window.location.pathname = pathname;
  }


  render() {
    let componentToRender;
    if (this.state.currentPathName === '/word-list') {
      componentToRender = <WordList />;
    } else if (this.state.currentPathName === '/quizes') {
      componentToRender = <QuizSession />;
    }

    return (
      <div>
        <div className="ui attached stackable menu">
          <div className="ui container">
            <a onClick={() => this.goToPath('/word-list')} className="item">
              <i className="home icon"></i> Word Lists
            </a>
            <a onClick={() => this.goToPath('/quizes')} className="item">
              <i className="tasks icon"></i> Quiz
            </a>
          </div>
        </div>

        <div className="ui hidden divider"></div>
        <div className="ui hidden divider"></div>

        {componentToRender}
      </div>
    );
  }
}

export default App;
