import React, { Component } from "react";
import data from "../data.json";

class Select extends Component {
  state = {};

  render() {
    console.log("ii");
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
