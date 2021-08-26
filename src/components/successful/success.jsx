import React, { Component } from "react";
import "../../style/success.css";
import SuccessLogo from "../../image/icons/success.png";
class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="success-box">
        <div>
          <div className="img-box">
            <img src={SuccessLogo} alt="" />
          </div>
          <div className="success-title">
            <span>
              СЎРОВНОМАНГИЗ ҚАБУЛ ҚИЛИНДИ! ҚИСҚА МУДДАТДА МОДЕРАТОРЛАРИМИЗ СИЗНИ
              РЎЙҲАТДАН ЎТКАЗИШАДИ
            </span>
            <small>Модераторларимиз текширувини кутинг!</small>
          </div>
          <div className="indecator-box">
            <span className="active"></span>
            <span className="active"></span>
            <span className="active"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
