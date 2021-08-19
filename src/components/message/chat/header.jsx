import React, { Component } from "react";
import Logo from "../../../image/avatar.png";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="chat-header">
        <div className="user">
          <div className="img-box">
            <img src={Logo} alt="" />
          </div>
          <div className="name">Мирмухсин</div>
          <span>онлайн</span>
        </div>
        <div className="v-btn">
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
    );
  }
}

export default Header;
