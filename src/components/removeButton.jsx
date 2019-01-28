import React, { Component } from "react";

class RemoveButton extends Component {
	state={isHovered:false}

isHovered = () => {
    this.setState({ isHovered: true });
  };
  
  mouseLeft = () => {
    this.setState({ isHovered: false });
  };


  render() {
	  let {id,onDelete} = this.props
	  


 
    return (
 
		  
            <i
                  className="fa fa-times del_usr"
				  title="Remove user"
                  aria-hidden="true"
				  onMouseEnter={this.isHovered} onMouseLeave={this.mouseLeft}
				  style={this.state.isHovered?{border: "solid 1px", borderRadius: "50%"}:{}} 
                  onClick={() => {
                    onDelete(id);
                  }} 
                ></i>


    );
  }
}

export default RemoveButton;
