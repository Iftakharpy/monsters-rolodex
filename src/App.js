import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
// import logo from './logo.svg';
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search for monsters"
          handleChange={(e) => this.setState({ searchText: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
