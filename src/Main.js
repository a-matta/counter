import React, { Component } from "react";

class Main extends Component {
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
    let circleCss = "circle ";

    if (this.state.counter === 0) {
    } else if (this.state.counter % 2 === 0) {
      circleCss += "even";
    } else {
      circleCss += "odd";
    }

    return (
      <div>
        <div className="counter-row">
          <h1 className={circleCss}>{this.state.counter}</h1>
        </div>
        <div className="button-row">
          <button onClick={this.incrementHandler}>Increment</button>
          <button onClick={this.decrementHandler}>Decrement</button>
          <button onClick={this.resetHandler}>Reset</button>
        </div>
      </div>
    );
  }
}
export default Main;
