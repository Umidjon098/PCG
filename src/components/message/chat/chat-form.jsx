import React, { Component } from "react";
import Send from "../../../image/icons/send.png";
class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="chat-form">
        <form>
          <textarea placeholder="Write a message"></textarea>
          <div className="send">
            <img src={Send} alt="" />
          </div>
        </form>
      </div>
    );
  }
}

export default ChatForm;
