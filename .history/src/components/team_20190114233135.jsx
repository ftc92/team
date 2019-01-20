import React, { Component } from "react";
import "./team.css";

class Team extends Component {
  render() {
    return (
      <div>
        {this.props.members.map(m => (
          <div className="card" key={m.id}>
            <div className="col-md-3">
              <img src="./avatar-default.png" />
            </div>
            {m.username}
          </div>
        ))}
      </div>
    );
  }
}

export default Team;
