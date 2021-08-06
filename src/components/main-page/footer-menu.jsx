import React, { Component } from "react";
import { Link } from "react-router-dom";

class FooterMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bottom-menu">
        <div
          className={
            this.props.active === "home" ? "menu-item active" : "menu-item"
          }
        >
          <Link to="/mainpage">
            <i className="fas fa-home"></i>
          </Link>
        </div>
        <div
          className={
            this.props.active === "add_business"
              ? "menu-item active"
              : "menu-item"
          }
        >
          <Link to="/addbusiness">
            <i className="fas fa-th-large"></i>
          </Link>
        </div>
        <div
          className={
            this.props.active === "search" ? "menu-item active" : "menu-item"
          }
        >
          <Link to="/search">
            <i className="fas fa-search"></i>
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/message">
            <i className="fas fa-envelope"></i>
          </Link>
        </div>
        <div
          className={
            this.props.active === "profile" ? "menu-item active" : "menu-item"
          }
        >
          <Link to="/profile">
            <i className="fas fa-user"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default FooterMenu;
