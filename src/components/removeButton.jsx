import React, { Component } from "react";
import hoverable from "./hover_hoc"

class RemoveButton extends Component {

  
  getStyle = () => {
   if (this.props.isHovered)
		   return {border: "solid 1px", borderRadius: "50%",background:"white"};
	if (this.props.memberHovered)
		   return {borderRadius: "50%",background:"white"};
  };


  render() {
	  let {id,onDelete,onMouseEnter,onMouseLeave} = this.props
	
    return (
 
		  
            <i
                  className="fa fa-times del_usr"
				  title="Remove user"
                  aria-hidden="true"
				  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
				  style={this.getStyle()} 
                  onClick={() => {
                    onDelete(id);
                  }} 
                ></i>


    );
  }
}

export default RemoveButton;
