import React from 'react'


export default class QuizComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Inside constructor");
  }

  componentDidMount = () => {
    console.log("I have just mounted");
  }

  componentWillUnmount = () => {
    console.log("I will soon be unmounted");
  }

  render = () => {
    console.log("I have just rendered");
    return (
      <div>
      </div>
    );
  }
}
