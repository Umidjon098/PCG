import React, { Component } from "react";
class AlertError extends Component {
  render() {
    return (
      <div
        className={
          this.props.showalert === false
            ? "alert-error show"
            : this.props.showalert === true
            ? "alert-error"
            : "alert-error"
        }
      >
        <span className="fas fa-exclamation-circle"></span>
        <span className="title">Error!</span>
        <span className="msg">Muhum maydonlarni to'ldiring!</span>
        <span className="close-btn">
          <span
            className="fas fa-times"
            onClick={() => this.props.closeAlert(true)}
          ></span>
        </span>
      </div>
    );
  }
}

export default AlertError;
