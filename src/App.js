import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      villagers: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ villagers: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { villagers, searchField } = this.state;
    const filteredVillager = villagers.filter((villager) =>
      villager.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Not a Monster </h1>
        <SearchBox
          placeholder="Search villagers"
          handleChange={this.handleChange}
        />
        <CardList villagers={filteredVillager} />
      </div>
    );
  }
}
export default App;
