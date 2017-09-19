import React from 'react'


export default class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamA: 0,
      teamB: 0,
    }
  }

  increaseTeamScore = (teamName) => {
    let updatedState = this.state;

    updatedState[teamName] = updatedState[teamName] + 1;
    
    this.setState({
      ...updatedState,
    })
  }
  decreaseTeamScore = (teamName) => {
    let updatedState = this.state;

    updatedState[teamName] = updatedState[teamName] - 1;
    
    this.setState({
      ...updatedState,
    })
  }


  render() {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '80vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>
            Team A
          </h1>
          <h2
            style={{
              color: 'red',
            }}
          >
            {this.state.teamA}
          </h2>
          <div>
            <button
              onClick={() => this.increaseTeamScore('teamA')}
            >
              + 1 Point
            </button>
            <button
              onClick={() => this.decreaseTeamScore('teamA')}
            >
              - 1 Point
            </button>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>
            Team B
          </h1>
          <h2
            style={{
              color: this.state.teamA > this.state.teamB ? 'blue' : 'red',
            }}
          >
            {this.state.teamB}
          </h2>
          <div>
            <button
              onClick={() => this.increaseTeamScore('teamB')}
            >
              + 1 Point
            </button>
            <button
              onClick={() => this.decreaseTeamScore('teamB')}
            >
              - 1 Point
            </button>
          </div>
        </div>
      </div>
    );
  }
}
