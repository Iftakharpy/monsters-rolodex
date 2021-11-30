import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
// import logo from './logo.svg';
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return <CardList monsters={this.state.monsters} />;
  }
}
