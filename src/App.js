import React, { Component } from "react";

class App extends Component {
  state = { counter: 0 };
  incrementHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  resetHandler = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.incrementHandler}>Increment</button>
        <button onClick={this.decrementHandler}>Decrement</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}
export default App;
