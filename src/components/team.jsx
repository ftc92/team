import React, { Component } from "react";
import "./team.css";
import SelectSearch from "react-select-search";
import Member from "./member";
import hoverable from "./hover_hoc"
import AddButton from "./addButton"

class Team extends Component {
  state = { showList: false };

  showList = () => {
    console.log("showww");
    this.setState({ showList: true });
  };

  hideList = () => {
    console.log("hideeeeee");
    this.setState({ showList: false });
  };

  render() {
    function renderOption(option) {
      const imgStyle = {
        borderRadius: "50%",
        verticalAlign: "middle",
        marginRight: 10
      };
      return (
        <span>
          <img style={imgStyle} width="40" height="40" src={option.photo} />
          <span>{option.name}</span>
        </span>
      );
    }
	const Member_ = hoverable(Member)
	

    return (
      <div>
        <div className="_outer">
          {this.state.showList ? (
            <SelectSearch
              name="friends"
              multiple={false}
              autofocus={true}
              height={99}
              options={this.props.users}
              placeholder="Add team member to list"
              onChange={(value, state, props) => {
                this.props.onAdd(value.value);
                this.hideList();
              }}
              onBlur={(value, state, props) => {
                this.hideList();
              }}
              renderOption={renderOption}
            />
          ) : (
		  <AddButton onClick={this.showList}></AddButton>
     
          )}

          {this.props.members.map(m => (
		  <Member_ member={m} onDelete={this.props.onDelete}></Member_>
            
          ))}
        </div>
      </div>
    );
  }
}

export default Team;
