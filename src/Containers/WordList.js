import React from 'react'


export default class WordList extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h2 className="ui header">
          GRE Words
          <div className="sub header">
            1534 words
          </div>
        </h2>

        <div className="ui hidden divider"></div>

        <div className="ui divided items">
          <div className="item">
            <div className="content">
              <a className="header">
                precarious
              </a>
              <div className="meta">
                <span className="cinema">
                  adj. uncertain
                </span>
              </div>
              <div className="description">
                <p>
                  The prime minister's precarious hold on power ended when she lost a vote of confidence in Parliament
                </p>
              </div>
              <div className="extra">
                <div className="ui label">Difficult</div>
                <div className="ui label">
                  <i className="globe icon"></i>
                  Marked
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="content">
              <a className="header">
                prattle
              </a>
              <div className="meta">
                <span className="cinema">
                  n. meaningless, foolish talk
                </span>
              </div>
              <div className="description">
                <p>
                  The sociologist theorizes that what may seem like prattle often has an important social function.
                </p>
              </div>
              <div className="extra">
                <div className="ui label">Difficult</div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="content">
              <a className="header">
                purport
              </a>
              <div className="meta">
                <span className="cinema">
                  v. to profess; suppose; claim
                </span>
              </div>
              <div className="description">
                <p>
                  The US is generally considered to be a secular society in which church and state are separate; however, religion plays a large role, since nearly everyone purports to believe in God and many people are members of churches.
                </p>
              </div>
              <div className="extra">
                <div className="ui label">Difficult</div>
                <div className="ui label">
                  <i className="globe icon"></i>
                  Marked
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
