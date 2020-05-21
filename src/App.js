import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      villagers: [],
      searchField: '',
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
        <input
          type='search'
          placeholder='Search villagers'
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList villagers={this.state.villagers} />
      </div>
    );
  }
}
export default App;
