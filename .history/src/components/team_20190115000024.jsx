import React, { Component } from "react";
import "./team.css";

class Team extends Component {
  render() {
    return (
      <div>
        {this.props.members.map(m => (
          <div className="crd" key={m.id}>
            <div className="col-md-3">
              <img className="photo" alt="img" src="avatar-default.png" />
            </div>
            <div className="col-md-9">{m.username}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Team;
