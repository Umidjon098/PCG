import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "../../style/sidebar.css";
import Banner from "../../image/sidebar-banner.png";
import Avatar from "../../image/avatar.png";
import SidebarItem from "./sidebar-item";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onDisplayProfile = () => {};
  render() {
    return (
      <div className={this.props.toggle ? "sidebar-box active" : "sidebar-box"}>
        <div
          className={this.props.toggle ? "dark-overlay" : ""}
          onClick={() => this.props.callBackToggle(false)}
        ></div>

        <div className="banner">
          <img src={Banner} alt="" />
          <div className="search-box">
            <i className="fas fa-search"></i>
          </div>
          <div
            className="close"
            onClick={() => this.props.callBackToggle(false)}
          >
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="user-data">
          <img src={Avatar} alt="" />
          <Link to="/profile">Робия Аъзамовна</Link>
          <div className="phone">+998 97 707 07 70</div>
        </div>
        <Scrollbars style={{ height: "62vh" }}>
          <SidebarItem url={"/mainpage"} icon={"fas fa-home"} name={"Асосий"} />
          <SidebarItem
            url={"/"}
            icon={"fas fa-money-check-alt"}
            name={"Маблағни текшириш"}
          />
          <SidebarItem url={"/"} icon={"far fa-bell"} name={"Ҳабарлар"} />
          <SidebarItem
            url={"/shopping"}
            icon={"fas fa-book-open"}
            name={"PCG Онлайн дўкон"}
          />
          <SidebarItem
            url={"/"}
            icon={"far fa-building"}
            name={"Бизнес маркет"}
          />
          <SidebarItem
            url={"/"}
            icon={"far fa-handshake"}
            name={"Ҳамкорлик учун"}
          />
          <hr />
          <SidebarItem
            url={"/"}
            icon={"fas fa-envelope-open-text"}
            name={"Дўстларга таклиф..."}
          />
          <SidebarItem
            url={"/library"}
            icon={"fas fa-clipboard-list"}
            name={"Ҳаридлар архиви"}
          />
          <SidebarItem url={"/edit"} icon={"fas fa-cog"} name={"Созламалар"} />
          <SidebarItem url={"/"} icon={"fas fa-sign-out-alt"} name={"Чиқиш"} />
        </Scrollbars>
      </div>
    );
  }
}

export default Sidebar;
