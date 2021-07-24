import React, { Component } from "react";
import "../../style/preloader.css";
import TopBg from "../../image/t.png";
import BottomBg from "../../image/b.png";

class PreLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="preloader-box">
        <div className="content">
          <div className="top-bg-image">
            <img src={TopBg} alt="" />
          </div>
          <span>
            Perfect <br /> Consulting <br /> Group
          </span>

          <div className="vertical-dash"></div>
          <div className="name">PCG</div>
          <div className="bottom-bg-image">
            <img src={BottomBg} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default PreLoader;
