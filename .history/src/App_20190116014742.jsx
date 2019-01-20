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

  handleDelete = id => {
    let members = this.state.members.filter(u => u.id != id);

    this.setState({ members });
  };

  render() {
    let difference = this.state.users.filter(
      x => !this.state.members.includes(x)
    );
    let usrs = difference.map(u => {
      return { name: u.username, value: u.id, photo: u.picture };
    });

    //console.log(usrs);
    return (
      <div className="container ">
        <h3>
          YOUR TEAM FOR THIS TEST
          <i class="fa fas fa-lg fa-users" />
        </h3>

        <Team
          members={this.state.members}
          users={usrs}
          onAdd={this.handleClick}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
