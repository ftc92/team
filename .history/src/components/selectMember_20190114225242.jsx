import React, { Component } from "react";

class Select extends Component {
  render() {
    // console.log(this.state.users);

    return (
      <div>
        <select
          onChange={e => {
            this.props.onClick(e.target.value);
          }}
        >
          <option key={0} value={0}>
            Add
          </option>
          {this.props.users.map(u => (
            <option key={u.id} value={u.id}>
              {u.username}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Select;
