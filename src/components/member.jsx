import React, { Component } from "react";
import RemoveButton from "./removeButton"
import hoverable from "./hover_hoc"

class Member extends Component {



  render() {
	  
	  let {id,picture,role,username} = this.props.member
	  let {onMouseEnter,onMouseLeave,onDelete,isHovered} = this.props
	  const RemoveButton_ = hoverable(RemoveButton)



    return (
 
		  
            <div className="kanban profile" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={isHovered?{background:"aliceblue"}:{}}  key={id}>
              <div className="photo_cnt"> 
			  {!this.props.isHovered? (<img className="photo" alt="img" src={picture} />
			  
			  ):(
			  <RemoveButton_ id={id}   memberHovered={isHovered}  onDelete={onDelete}></RemoveButton_>
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
