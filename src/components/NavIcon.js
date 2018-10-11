import React, { Component } from 'react';
import {
  NavItem,
  NavLink
} from 'reactstrap';

class NavIcon extends Component {
  state = {
    tooltipOpen: false
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    this.toggle = this.toggle.bind(this);
    return (
      <NavItem>
        <NavLink target="_blank" href={this.props.href} className={this.props.className} style={this.props.style}>
          {this.props.children}
        </NavLink>
      </NavItem>
    )
  }
}

export default NavIcon;