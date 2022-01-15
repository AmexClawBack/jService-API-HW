import React, { Component } from 'react';
import './score.css'

class Score extends Component {

    state = {
        count: 0
    }

    //Old Way of binding event handlers... Arrow function has it built in
    // constructor() {
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    handleIncrement = () => {
        console.log('Count before click', this.state.count)
        this.setState({ count: this.state.count + 1 })
    }
    handleDecrement = () => {
        console.log('Count before click', this.state.count)
        this.setState({ count: this.state.count - 1 })
    }
    handleReset = () => {
        console.log('Count before click', this.state.count)
    }

    render() {
        return (
            <div className='scoreBox'>
                <h1 className='score'><span>Score:</span> {this.state.count}</h1>
                <div className='incrementers'>
                <button onClick={this.handleIncrement} className='buttonOne'>Increase</button>
                <button onClick={this.handleDecrement} className='buttonTwo'>Decrease</button>
                <button onClick={this.handleReset}className='buttonThree'>Reset</button>
            </div>
            </div>
        );
    }
}

export default Score;
