import React from 'react'

const wordList = [
  {
    word: 'precarious',
    definition: 'adj. uncertain',
    usage: 'The prime ministers precarious hold on power ended when she lost a vote of confidence in Parliament',
  },
  {
    word: 'precarious',
    definition: 'adj. uncertain',
    usage: 'The prime ministers precarious hold on power ended when she lost a vote of confidence in Parliament',
  },
  {
    word: 'precarious',
    definition: 'adj. uncertain',
    usage: 'The prime ministers precarious hold on power ended when she lost a vote of confidence in Parliament',
  },
  {
    word: 'precarious',
    definition: 'adj. uncertain',
    usage: 'The prime ministers precarious hold on power ended when she lost a vote of confidence in Parliament',
  },
]
class WordCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="item">
      <div
        className="content"
      >
        <a className="header">
          {this.props.word}
        </a>

        <div className="meta">
          <span className="cinema">
            {this.props.definition}
          </span>
        </div>
        <div className="description">
          <p>
            {this.props.usage}
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
    )
  }
}

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
          
          {wordList.map((word) => (
            <WordCard
              word={word.word}
              definition={word.definition}
              usage={word.usage}
            />
          ))}
          </div>
      </div>
    );
  }
}
