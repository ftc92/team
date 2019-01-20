import React, { Component } from "react";
import data from "../data.json";

class Select extends Component {
  state = {};

  render() {
    console.log(data);
    return (
      <div className="container">
        <select id="users">
          <option value="" />
        </select>
      </div>
    );
  }
}

export default Select;
