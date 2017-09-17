import React from 'react';
import {
  Link,
} from 'react-router-dom';


export default class WordLists extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui large header">Words List</div>
        <div className="ui divider hidden"></div>

        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">TOEIC Words</div>
              <div className="description">
                1423 words
              </div>
            </div>
            <Link to="/word-lists/gre">
              <div className="ui bottom attached button">
                <i className="add icon"></i>
                View Word List
              </div>
            </Link>
          </div>
          <div className="card">
            <div className="content">
              <div className="header">TOEFL Words</div>
              <div className="description">
                852 words
              </div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon"></i>
              View Word List
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="header">GRE Words</div>
              <div className="description">
                5342 words
              </div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon"></i>
              View Word List
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="header">GMAT Words</div>
              <div className="description">
                342 words
              </div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon"></i>
              View Word List
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="header">Create New List</div>
              <div className="description">
              </div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon"></i>
              Make New List
            </div>
          </div>
        </div>
      </div>
    );
  }
}
