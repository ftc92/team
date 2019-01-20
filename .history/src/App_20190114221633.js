import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Select from "./components/selectMember";
import Team from "./components/team";

class App extends Component {
  state = {
    users: [{ name: "Ali", id: 1 }, { name: "Asfand", id: 2 }],
    members: []
  };

  handleClick = id => {
    let curr = this.state.users.filter(u => u.id == id);
    let members = [...curr, ...this.state.members];
    this.setState({ members });
  };

  render() {
    let difference = this.state.users.filter(
      x => !this.state.members.includes(x)
    );
    console.log(difference);
    return (
      <div>
        <Select users={difference} onClick={this.handleClick} />
        <Team members={this.state.members} />
      </div>
    );
  }
}

export default App;
