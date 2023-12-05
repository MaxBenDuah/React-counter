import React from "react";

class ClassCounter extends React.Component {

  constructor () {
    super ()

    this.state =  {
      count: 0
    }
  }

  handleDecrease = () => {
    this.setState({count: this.state.count - 1});
  }

  handleIncrease = () => {
    this.setState({count: this.state.count + 1});
  }

  render () {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleDecrease}>Decrease Count</button>
        <button onClick={this.handleIncrease}>Increase Count</button>
      </div>
    );
  }
}

export default ClassCounter;