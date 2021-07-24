import React, { Component } from "react";
import "../../style/alert.css";
class Alert extends Component {
  render() {
    return (
      <div className={this.props.showalert === true ? "alert show" : "alert"}>
        <span className="far fa-check-circle"></span>
        <span className="title">Success!</span>
        <span className="msg">The add was completed successfully</span>
        <span className="close-btn">
          <span className="fas fa-times"></span>
        </span>
      </div>
    );
  }
}

export default Alert;
