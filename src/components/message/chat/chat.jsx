import React, { Component } from "react";
import "../../../style/chat.css";
import ChatForm from "./chat-form";
import ChatItem from "./chat-item";
import Header from "./header";
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="chat-wrapper">
        <Header />
        <ChatItem own={true} />
        <ChatItem own={false} />
        <ChatItem own={true} />
        <ChatItem own={false} />
        <ChatItem own={true} />
        <ChatItem own={false} />
        <ChatItem own={true} />
        <ChatItem own={false} />
        <ChatForm />
      </div>
    );
  }
}

export default Chat;
