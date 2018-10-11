import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';

class IconTooltip extends Component {
  state = {
    tooltipOpen: false
  };

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    this.toggle = this.toggle.bind(this);

    return (
      <Tooltip placement="bottom" delay={0} innerClassName="shadow bg-white text-dark border" hideArrow isOpen={this.state.tooltipOpen} target={this.props.icon} toggle={this.toggle}>
        {this.props.icon}
      </Tooltip>
    );
  }
}

export default IconTooltip;