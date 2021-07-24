import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class SidebarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar-item-box">
        <div className="item">
          <i className={this.props.icon}></i>
          <NavLink to={this.props.url}>{this.props.name}</NavLink>
        </div>
      </div>
    );
  }
}

export default SidebarItem;
