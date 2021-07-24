import React, { Component } from "react";
import "../../style/waiting.css";
import Background from "../../image/waiting-bg.png";
import Surface from "../../image/icons/surface1.png";

class Waiting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="waiting-box">
        <div className="dark-overlay"></div>
        <img src={Background} alt="" />
        <div className="icon-box">
          <img src={Surface} alt="" />
        </div>
        <div className="title">
          <span>СИЗ МОДЕРАТОР ТЕКШИРУВИДАН МУВАФФАҚИЯТЛИ ЎТДИНГИЗ</span>
        </div>
        <div className="video-box">VIDEO PRIVETSTVIYA</div>
        <button>давом этиш</button>
      </div>
    );
  }
}

export default Waiting;
