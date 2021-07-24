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
        <span className="msg">Addition failed</span>
        <span className="close-btn">
          <span className="fas fa-times"></span>
        </span>
      </div>
    );
  }
}

export default AlertError;
