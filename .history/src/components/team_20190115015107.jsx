import React, { Component } from "react";
import "./team.css";

class Team extends Component {
  render() {
    return (
      <div>
        <h2>YOUR TEAM FOR THIS TEST</h2>
        {this.props.members.map(m => (
          <div className="roww" key={m.id}>
            <div className="photo_cnt">
              <img className="photo" alt="img" src="avatar-default.png" />
              <i class="fa fa-times del_usr" aria-hidden="true" />
            </div>
            <div className="details">
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
