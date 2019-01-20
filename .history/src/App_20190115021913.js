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
    const friends = [
      {
        name: "Annie Cruz",
        value: "annie.cruz",
        photo: "https://randomuser.me/api/portraits/women/60.jpg"
      },
      {
        name: "Eli Shelton",
        value: "eli.shelton",
        photo: "https://randomuser.me/api/portraits/men/7.jpg"
      },
      {
        name: "Loretta Rogers",
        value: "loretta.rogers",
        photo: "https://randomuser.me/api/portraits/women/51.jpg"
      },
      {
        name: "Lloyd Fisher",
        value: "lloyd.fisher",
        photo: "https://randomuser.me/api/portraits/men/34.jpg"
      },
      {
        name: "Tiffany Gonzales",
        value: "tiffany.gonzales",
        photo: "https://randomuser.me/api/portraits/women/71.jpg"
      }
    ];
    function renderFriend(option) {
      const imgStyle = {
        borderRadius: "50%",
        verticalAlign: "middle",
        marginRight: 10
      };

      return (
        <span>
          <img style={imgStyle} width="40" height="40" src={option.photo} />
          <span>{option.name}</span>
        </span>
      );
    }
    console.log(difference);
    return (
      <div className="outer">
        <h2>YOUR TEAM FOR THIS TEST</h2>
        <SelectSearch
          name="friends"
          multiple={true}
          height={172}
          options={friends}
          placeholder="Search friends"
          renderOption={renderFriend}
        />
        <Select users={difference} onClick={this.handleClick} />
        <Team members={this.state.members} />
      </div>
    );
  }
}

export default App;
