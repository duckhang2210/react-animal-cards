import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
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
    const { villagers, searchField } = this.state;
    const filteredVillager = villagers.filter((villager) =>
      villager.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <SearchBox
          placeholder='Search villagers'
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList villagers={filteredVillager} />
      </div>
    );
  }
}
export default App;
