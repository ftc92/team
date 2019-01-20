import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Select from "./components/selectMember";
import Team from "./components/team";
import data from "./data.json";
import SelectSearch from "react-select-search";

class App extends Component {
  state = {
    users: data,
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
    const options = [
      { name: "Swedish", value: "sv" },
      { name: "English", value: "en" },
      {
        type: "group",
        name: "Group name",
        items: [{ name: "Spanish", value: "es" }]
      }
    ];
    console.log(difference);
    return (
      <div className="outer">
        <h2>YOUR TEAM FOR THIS TEST</h2>
        <SelectSearch
          options={options}
          value="sv"
          name="language"
          placeholder="Choose your language"
        />
        <Select users={difference} onClick={this.handleClick} />
        <Team members={this.state.members} />
      </div>
    );
  }
}

export default App;
