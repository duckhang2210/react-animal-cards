import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      villagers: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ villagers: users }));
  }
  render() {
    return (
      <div className='App'>
        {this.state.villagers.map((villager) => (
          <h1 key={villager.id}> {villager.name} </h1>
        ))}
      </div>
    );
  }
}
export default App;
