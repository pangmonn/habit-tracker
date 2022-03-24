import React, { Component } from 'react';
import './app.css';
import Button from './components/button';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
        {id: 0, name: 'Reading', count: 0},
        {id: 1, name: 'Running', count: 0},
        {id: 2, name: 'Coding', count: 0},
    ]
  };

  changeState = habits => {
    this.setState({ habits });
  }

  render() {
    return (
      <>
        <Navbar habits={this.state.habits} />
        <Habits habits={this.state.habits} change={this.changeState} />
        <Button habits={this.state.habits} change={this.changeState} />
      </>
  
    );
  }

}
export default App;
