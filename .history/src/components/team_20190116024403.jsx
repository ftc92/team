import React, { Component } from "react";
import "./team.css";
import SelectSearch from "react-select-search";

class Team extends Component {
  state = { showList: false };
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
      <div className="row">
        <SelectSearch
          name="friends"
          multiple={false}
          height={99}
          options={this.props.users}
          placeholder="Add team member to list"
          onChange={(value, state, props) => {
            this.props.onAdd(value.value);
            console.log(state, this);
          }}
          renderOption={renderFriend}
        />

        <div className="col-sm-6 col-xs-12 roww">
          <div className="photo_cnt">
            <i className="fa fa-add photo" aria-hidden="true" />
          </div>
          <div className="details">
            <div>{m.role}</div>
            <b>{m.username}</b>
          </div>
        </div>
        {this.props.members.map(m => (
          <div className="col-sm-6 col-xs-12 roww" key={m.id}>
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
    );
  }
}

export default Team;
