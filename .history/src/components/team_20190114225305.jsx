import React, { Component } from "react";

class Team extends Component {
  render() {
    return (
      <div>
        {this.props.members.map(m => (
          <div key={m.id}>{m.username}</div>
        ))}
      </div>
    );
  }
}

export default Team;
