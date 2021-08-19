import React, { Component } from "react";
import "../../style/message.css";
class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="notification-box">
        <div className="header">
          <div className="title">Ҳабарлар</div>
          <div className="vertical-btn">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="n-search">
          <form>
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <div className="n-item active">
          <div className="title">Акциялар</div>
          <div className="short-des">
            Lorem Ipsum is simply dummy text of ...
          </div>
          {/* <div className="time">15 мин</div> */}
          <div className="count">
            <span>3</span>
          </div>
        </div>
        <div className="n-item active">
          <div className="title">PCG Admin</div>
          <div className="short-des">
            Lorem Ipsum is simply dummy text of ...
          </div>
          {/* <div className="time">15 мин</div> */}
          <div className="count">
            <span>5</span>
          </div>
        </div>
        <div className="n-item">
          <div className="title">Club Gold</div>
          <div className="short-des">
            Lorem Ipsum is simply dummy text of ...
          </div>
          <div className="time">15 мин</div>
          {/* <div className="count">
            <span>3</span>
          </div> */}
        </div>
        <div className="n-item">
          <div className="title">PCG Admin</div>
          <div className="short-des">
            Lorem Ipsum is simply dummy text of ...
          </div>
          <div className="time">15 мин</div>
          {/* <div className="count">
            <span>3</span>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Notification;
