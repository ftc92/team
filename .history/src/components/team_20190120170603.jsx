import React, { Component } from "react";
import "./team.css";
import SelectSearch from "react-select-search";

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
    function renderFriend(option) {
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
              renderOption={renderFriend}
            />
          ) : (
            <div className="kanban  add_card " onClick={() => this.showList()}>
              <span>
                <i className="fa fa-plus add_icon" aria-hidden="true" />
                <b className="details">Add team member to this team</b>
              </span>
            </div>
          )}

          {this.props.members.map(m => (
            <div className="kanban profile" key={m.id}>
              <div className="photo_cnt">
                <img className="photo" alt="img" src={m.picture} />
                <i
                  className="fa fa-times del_usr"
                  aria-hidden="true"
                  onClick={() => {
                    this.props.onDelete(m.id);
                  }}
                />
              </div>
              <div className="details">
                <div>{m.role}</div>
                <b>{m.username}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Team;
