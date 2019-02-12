import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Team from "./components/team";
import data from "./data.json";
import SelectSearch from "react-select-search";

class App extends Component {
  state = {
    users: data,
    members: [],
    showAll: false,
    max: 5
  };

  handleClick = id => {
    let currentUser = this.state.users.filter(u => u.id == id);
    let members = [...this.state.members, ...currentUser];
    this.setState({ members });
  };

  handleDelete = id => {
    let members = this.state.members.filter(u => u.id != id);

    this.setState({ members });
  };
  showAll = () => {
    console.log("showAll");
    this.setState({ showAll: true });
  };

  render() {
    let difference = this.state.users.filter(
      x => !this.state.members.includes(x)
    );
    let users = difference.map(u => {
      return { name: u.username, value: u.id, photo: u.picture };
    });
    let members = this.state.members.slice(0, this.state.max);

    if (this.state.showAll) {
      members = this.state.members;
    }

    return (
      <div>
        <div className="container_main ">
          <b className="top_heading ">
            YOUR TEAM FOR THIS TEST
            <span className="team_icon ">
              <span className="team_icon_text ">TEAM PAGE</span>
              <i className="fa fas fa-lg fa-users" />
            </span>
          </b>

          <Team
            members={members}
            users={users}
            onAdd={this.handleClick}
            onDelete={this.handleDelete}
          />
        </div>
        {!this.state.showAll && this.state.members.length > this.state.max && (
          <div className="show_all" onClick={() => this.showAll()}>
            SHOW ALL
            <i class="fa fa-angle-down" aria-hidden="true" />
          </div>
        )}
      </div>
    );
  }
}

export default App;
