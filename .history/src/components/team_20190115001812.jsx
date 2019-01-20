import React, { Component } from "react";
import "./team.css";

class Team extends Component {
  render() {
    return (
      <div>
        {this.props.members.map(m => (
          <div className="roww" key={m.id}>
            <div>
              <img className="photo" alt="img" src="avatar-default.png" />
            </div>
            <div className="details">
              <div>{m.role}</div>
              <div>{m.username}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Team;
