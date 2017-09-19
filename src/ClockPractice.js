import React from 'react';

export default class ClockPractice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        }
    }
    componentDidMount = () => {
        this.timer = setInterval(() => this.tic(), 1000)
    }

    componentWillUnmount = () => {
        clearInterval(this.timer);
    }

    tic = () => {
        this.setState({
            time: new Date(),
        })
    }

    render = () => {
        return (
            <div>
                <h1> The Current Time is : </h1>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        )
    }
}