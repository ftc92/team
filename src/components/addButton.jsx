import React, { Component } from "react";
import hoverable from "./hover_hoc";

class AddButton extends Component {
  render() {
    let { isHovered, onClick, onMouseEnter, onMouseLeave } = this.props;

    return (
      
      <div
        className="kanban  add_card "
        style={isHovered ? { background: "aliceblue" } : {}}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        <span>
          <i
            style={isHovered ? { background: "white" } : {}}
            className="fa fa-plus add_icon"
            aria-hidden="true"
          />
          <b className="details">Add team member to this team</b>
        </span>
      </div>
    );
  }
}

export default hoverable(AddButton);
