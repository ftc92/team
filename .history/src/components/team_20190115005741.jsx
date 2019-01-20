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
            <div className="detailss">
              <div>{m.role}</div>
              <b>{m.username}</b>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Team;
