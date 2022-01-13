import React, { Component } from 'react';
import './GamePage.css'

class GamePage extends Component {

     display = () => {
         console.log('working')
        document.querySelector('.answer').style.visibility=visible;
    }

    render() {
        // console.log(this.props.gameInfo)
        return (
            <div>
                <h3><span>Category: {this.props.gameInfo.category?.title}</span> </h3>
                <h3><span>Points: {this.props.gameInfo?.value}</span> </h3>
                <h3><span>Question: {this.props.gameInfo?.question}</span> </h3>

            <div className='answerContainer'>
                <h1 className='answer'><span>Answer: {this.props.gameInfo?.answer}</span></h1>
            </div>

                <button onClick='display()'
                className='revealButton'>Click to Reveal Answer</button>



            </div>
        );
    }
}

export default GamePage;
