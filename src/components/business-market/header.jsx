import React, { Component } from "react";
import BM from "../../image/icons/BM.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page-header">
        <div className="burger">
          <span></span>
          <span></span>
        </div>
        <div className="page-title">Бизнес маркет</div>
        <div className="icon">
          <img src={BM} alt="" />
        </div>
      </div>
    );
  }
}

export default Header;
