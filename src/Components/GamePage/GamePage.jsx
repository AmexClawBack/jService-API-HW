import React, { Component } from "react";
import "./GamePage.css";

class GamePage extends Component {
  state = {
    //Figure out the state of my answer element
    toggle: false,
  };

  operation = () => {
    console.log("Toggle status:", this.state.toggle);
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    // console.log(this.props.gameInfo)
    // console.log("inside", this.props.gameInfo.id)
    return (
      <div key={this.props.gameInfo.id} className="container">
        <h3>
          <span>Category:</span> {this.props.gameInfo.category?.title}
        </h3>
        <h3>
          <span>Points:</span> {this.props.gameInfo?.value}
        </h3>
        <h3>
          <span>Question:</span> {this.props.gameInfo?.question}
        </h3>

        {this.state.toggle ? <h1><span>Answer: </span>{this.props.gameInfo.answer}</h1> : <h1><span>Answer: </span></h1>}
        <div className="buttonBox">
        <button onClick={this.operation} className="revealButton">
          Click to Reveal Answer
        </button>
        </div>
      </div>
    );
  }
}

export default GamePage;
