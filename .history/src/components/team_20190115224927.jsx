import React, { Component } from "react";
import "./team.css";

class Team extends Component {
  render() {
    const friends = [
      {
        name: "Annie Cruz",
        value: "annie.cruz",
        photo: "https://randomuser.me/api/portraits/women/60.jpg"
      },
      {
        name: "Eli Shelton",
        value: "eli.shelton",
        photo: "https://randomuser.me/api/portraits/men/7.jpg"
      },
      {
        name: "Loretta Rogers",
        value: "loretta.rogers",
        photo: "https://randomuser.me/api/portraits/women/51.jpg"
      },
      {
        name: "Lloyd Fisher",
        value: "lloyd.fisher",
        photo: "https://randomuser.me/api/portraits/men/34.jpg"
      },
      {
        name: "Tiffany Gonzales",
        value: "tiffany.gonzales",
        photo: "https://randomuser.me/api/portraits/women/71.jpg"
      }
    ];
    function renderFriend(option) {
      const imgStyle = {
        borderRadius: "50%",
        verticalAlign: "middle",
        marginRight: 10
      };
    return (
      <div className="row">
      <SelectSearch
          name="friends"
          multiple={false}
          height={99}
          options={friends}
          placeholder="Search friends"
          renderOption={renderFriend}
        />
        {this.props.members.map(m => (
          <div className="col-sm-6 col-xs-12 roww" key={m.id}>
            <div className="photo_cnt">
              <img className="photo" alt="img" src="avatar-default.png" />
              <i class="fa fa-times del_usr" aria-hidden="true" />
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
