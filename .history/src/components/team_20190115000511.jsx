import React, { Component } from "react";
import "./team.css";

class Team extends Component {
  render() {
    return (
      <div>
        {this.props.members.map(m => (
          <div className="row" key={m.id}>
            <div>
              <img className="photo" alt="img" src="avatar-default.png" />
            </div>
            <div>{m.username}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Team;
