import React from 'react';


export default class WordLists extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui large header">Test Yourself</div>
        <div className="ui divider hidden"></div>

        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">
                TOEIC Words
                &nbsp;
                <div className="ui star rating">
                  <div className="icon">
                  </div>
                  <div className="icon">
                  </div>
                  <div className="icon">
                  </div>
                </div>
              </div>
              <div className="description">
                1423 words
              </div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon"></i>
              Take Quiz
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="header">
                TOEFL Words
                &nbsp;
                <div className="ui star rating">
                  <div className="icon active">
                  </div>
                  <div className="icon active">
                  </div>
                  <div className="icon active">
                  </div>
                </div>
              </div>
              <div className="description">
                852 words
              </div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon"></i>
              Take Quiz
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="header">
                GRE Words
                &nbsp;
                <div className="ui star rating">
                  <div className="icon active">
                  </div>
                  <div className="icon active">
                  </div>
                  <div className="icon">
                  </div>
                </div>
              </div>
              <div className="description">
                5342 words
              </div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon"></i>
              Take Quiz
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="header">
                GMAT Words
                &nbsp;
                <div className="ui star rating">
                  <div className="icon active">
                  </div>
                  <div className="icon">
                  </div>
                  <div className="icon">
                  </div>
                </div>
              </div>
              <div className="description">
                342 words
              </div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon"></i>
              Take Quiz
            </div>
          </div>

        </div>
      </div>
    );
  }
}

