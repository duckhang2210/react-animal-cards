import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      animals: [
        { name: 'Tiger', id: 'anm0' },
        { name: 'Dolphin', id: 'anm1' },
        { name: 'Mockingbird', id: 'anm2' },
      ],
    };
  }
  render() {
    return (
      <div className='App'>
        {this.state.animals.map((animal) => (
          <h1 key={animal.id}> {animal.name} </h1>
        ))}
      </div>
    );
  }
}
export default App;
