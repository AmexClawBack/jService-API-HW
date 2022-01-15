import React, { Component } from "react";
import "./GamePage.css";

class GamePage extends Component {
  state = {
    //Figure out the state of my answer element
    showMe: false,
  };

  operation = () => {
    console.log("Inside Operation:", this.state.showMe);
    this.setState({
      showMe: !this.state.showMe,
    });
  }

  render() {
    // console.log(this.props.gameInfo)
    // console.log("inside", this.props.gameInfo.id)
    return (
      <div key="id:{this.props.gameInfo.id}">
        <h3>
          <span>Category: {this.props.gameInfo.category?.title}</span>{" "}
        </h3>
        <h3>
          <span>Points: {this.props.gameInfo?.value}</span>{" "}
        </h3>
        <h3>
          <span>Question: {this.props.gameInfo?.question}</span>{" "}
        </h3>

        {this.state.showMe ? <h1>Answer: {this.props.gameInfo.answer}</h1> : <h1>Answer:</h1>}

        <button onClick={this.operation} className="revealButton">
          Click to Reveal Answer
        </button>
      </div>
    );
  }
}

export default GamePage;
