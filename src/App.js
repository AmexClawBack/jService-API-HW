import React, { Component } from 'react';
import GamePage from './Components/GamePage/GamePage';
import Score from './Components/Score/Score'
import './App.css'

class App extends Component {

  state = {
    // baseURL: 'http://jservice.io/api/random',
    // question: '',
    // answer: '',
    // id: '',
    // searchURL: 'http://jservice.io/api/random',
    // data: [],
    gameInfo: {}
  }

  handleSubmit = e => {
    e.preventDefault()
     
         fetch('http://jservice.io/api/random')
         .then(response => response.json()) // returns second Promise
         .then(data => this.setState({gameInfo: data[0]}))
         .then(() => console.log("GameInfo ID:", this.state.gameInfo.id))
         .then(() => console.log("Category:", this.state.gameInfo.category.title))
         .then(() => console.log("Question:", this.state.gameInfo.question))
         .then(() => console.log("Point Value:", this.state.gameInfo.value))
         .catch(error => console.error(error))
      
       
    
    
  }

  render() {
    return (
      <div className='gameContainer'>
        <h1 className='header'>Welcome to Jeopardy</h1>
        <Score />
        <h1><span>Let's Play!</span></h1>
        <button onClick={this.handleSubmit} className='button'>Get Question</button>
        
        <GamePage gameInfo={this.state.gameInfo}/>
        
      </div>
    );
  }
}

export default App;
