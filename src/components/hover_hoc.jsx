import React, { Component } from "react";

function hoverable (WrappedComponent, propName = 'isHovered') {
  return class HoverableComponent extends Component {
    constructor (props) {
      super(props)

      this.state = { hovered: false }
    }

    onHover = () => {
      this.setState({ hovered: true })
    }

    onLeave = () => {
      this.setState({ hovered: false })
    }

    render () {
      const props = { [propName]: this.state.hovered, ...this.props }
      return (
          <WrappedComponent onMouseEnter={this.onHover} onMouseLeave={this.onLeave} { ...props } />
      )
    }
  }
}

export default hoverable;
