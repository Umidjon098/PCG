import React, { Component } from "react";
import Logo from "../../image/avatar.png";

class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="n-item m-item active">
        <div className="user-img">
          <img src={Logo} alt="" />
        </div>
        <div className="user-data">
          <div className="title">Фирдавс</div>
          <div className="short-des">
            Lorem Ipsum is simply dummy text of ...
          </div>
        </div>
        {/* <div className="time">15 мин</div> */}
        <div className="count">
          <span>3</span>
        </div>
        <div
          className={this.props.select ? "select" : "d-none"}
          onClick={() =>
            this.props.id === 12
              ? this.props.targetItem(null)
              : this.props.targetItem(12)
          }
        >
          <div className={this.props.id === 12 ? "icon" : "d-none"}>
            <i className="fas fa-check"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageItem;
