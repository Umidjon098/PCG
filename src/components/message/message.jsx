import React, { Component } from "react";
import "../../style/message.css";
import FooterMenu from "../main-page/footer-menu";
import Header from "./header";
import Search from "./search";
import MessageItem from "./mesage-item";
import ModalMenu from "./modal-menu";
import { Link } from "react-router-dom";
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      v_toggle: false,
      select: false,
      target: null,
      selectedData: [],
    };
  }
  Vtoggle = (v_toggle) => {
    this.setState({ v_toggle });
  };
  targetItem = (id) => {
    this.setState({ target: id });
    this.setState((prevState) => {
      this.setState({ selectedData: [id, ...prevState.selectedData] });
    });
  };
  selectItem = (select) => {
    this.Vtoggle(false);
    this.setState({ select });
  };
  render() {
    return (
      <div className="notification-box">
        <Header
          toggleModal={this.Vtoggle}
          target={this.state.target}
          select={this.state.select}
          selectItem={this.selectItem}
        />
        <Search />
        <Link to="/chat">
          <MessageItem
            select={this.state.select}
            targetItem={this.targetItem}
            id={this.state.target}
          />
        </Link>
        <ModalMenu
          v_toggle={this.state.v_toggle}
          toggleModal={this.Vtoggle}
          selectItem={this.selectItem}
        />
        <FooterMenu active={"message"} />
      </div>
    );
  }
}

export default Message;
