import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

  this.state =  {
    color: 'white',
    clickCounter: 0 
  }  
}

onChange = (e) => {
  let x = Math.floor(Math.random()*3);
  let diffColors = ['silver','black', '#80DB98'];
    this.setState({
      color: diffColors[x],
      clickCounter: this.state.clickCounter++
  })
}
  render(){
    return (
      <div className="App">
      <button className="colorbox"
            style = {{backgroundColor:this.state.color}} 
            onClick={this.onChange} >
            <p > Cambio De Color </p>
      </button>

      </div>
    )
  }
}
export default App;
