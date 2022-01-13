import React, { Component } from 'react';
import './score.css'

class Score extends Component {
    render() {
        return (
            <div className='scoreBox'>
                <h1 className='score'><span>Score:</span> </h1>
                <div className='incrementers'>
                <button className='buttonOne'>Decrease</button>
                <button className='buttonTwo'>Increase</button>
                <button className='buttonThree'>Reset</button>
            </div>
            </div>
        );
    }
}

export default Score;
