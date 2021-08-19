import React, { Component } from "react";
class ChatItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={this.props.own ? "chat-box" : "chat-box own"}>
        <div className="chat-item">
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            sapiente quis expedita!
          </span>
          <div className="time">11:50</div>
        </div>
      </div>
    );
  }
}

export default ChatItem;
