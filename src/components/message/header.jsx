import React, { Component } from "react";
import Logo from "../../image/avatar.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="m-header">
        <div className="user">
          <img src={Logo} alt="" />
          <div className="name">Робия Аъзамовна</div>
        </div>
        <div
          className={this.props.target ? "d-none" : "vertical-btn"}
          onClick={() => this.props.toggleModal(true)}
        >
          <i className="fas fa-ellipsis-v"></i>
        </div>
        <div
          className={this.props.target ? "vertical-btn" : "d-none"}
          onClick={() => this.props.toggleModal(true)}
        >
          <i className="fas fa-trash"></i>
        </div>
        <div
          className={this.props.select ? "close-btn" : "d-none"}
          onClick={() => this.props.selectItem(false)}
        >
          <i className="fas fa-times"></i>
        </div>
      </div>
    );
  }
}

export default Header;
