import React, { Component } from "react";
import RemoveButton from "./removeButton"

class Member extends Component {
	state={isHovered:false}

isHovered = () => {
    this.setState({ isHovered: true });
  };
  
  mouseLeft = () => {
    this.setState({ isHovered: false });
  };


  render() {
	  
	  let {id,picture,role,username} = this.props.member

 
    return (
 
		  
            <div className="kanban profile" style={this.state.isHovered?{background:"aliceblue"}:{}} onMouseEnter={this.isHovered} onMouseLeave={this.mouseLeft} key={id}>
              <div className="photo_cnt"> 
			  {!this.state.isHovered? (<img className="photo" alt="img" src={picture} />
			  
			  ):(
			  <RemoveButton id={id}  onDelete={this.props.onDelete}></RemoveButton>
			  )
			  
			  }
				
                
              </div>
              <div className="details">
                <div>{role}</div>
                <b>{username}</b>
              </div>
            </div>


    );
  }
}

export default Member;
