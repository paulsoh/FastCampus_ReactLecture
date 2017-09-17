import React from 'react';

export default class WordLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    }
  }

  handleIndexUp = () => {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
    })
  }

  handleIndexDown = () => {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
    })
  }

  render() {
    const getClassName = (index) => {
      if (index > this.state.activeIndex) {
        return "before";
      } else if (index < this.state.activeIndex) {

        return "after";
      }
      else {
        return "active";
      }
    }

    return (
      <div className="ui container">
        <div className="ui large header">
          GRE Quiz
        </div>
        <div className="ui divider hidden"></div>

        <div className="ui progress">
          <div className="bar">
            <div className="progress"></div>
          </div>
        </div>

        <div className="ui divider hidden"></div>

        <div className="ui two column centered grid">
          <div className="column">
            <h1 className="ui top attached header">
              PRECARIOUS
            </h1>
            <div className="ui padded attached segment">
              <h3>Dogs are one type of animal</h3>
            </div>
            <div className="ui divider hidden"></div>
            <div className="ui divider hidden"></div>

            <div>
              <div className="ui fluid buttons">
                <button className="ui labeled icon button">
                  <i className="left chevron icon"></i>
                  Prev.
                </button>
                <button className="ui red button">
                  <i className="remove icon"></i>
                  Incorrect
                </button>
                <button className="ui blue button">
                  <i className="circle icon"></i>
                  Correct
                </button>
                <button className="ui right labeled icon button">
                  Next
                  <i className="right chevron icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

