import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "../../style/sidebar.css";
import Banner from "../../image/sidebar-banner.png";
import Avatar from "../../image/avatar.png";
import SidebarItem from "./sidebar-item";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarData: [],
    };
  }
  componentDidMount() {
    this.getProfiledata();
  }
  logOut = () => {
    localStorage.clear();
    this.props.history.push("/login");
  };
  getProfiledata = () => {
    const url = "/profile/user-profile/";
    const headers = {
      Authorization: `Bearer  ${localStorage.getItem("accessToken")}`,
    };
    axios(url, { headers: headers }).then((response) => {
      this.setState({ sidebarData: response.data });
    });
  };
  render() {
    const { sidebarData } = this.state;
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
          <img src={sidebarData.image} alt="" />
          <Link to="/profile">
            {sidebarData.first_name + " " + sidebarData.last_name}
          </Link>
          <div className="phone">{sidebarData.phone_number}</div>
        </div>
        <Scrollbars style={{ height: "62vh" }}>
          <SidebarItem url={"/mainpage"} icon={"fas fa-home"} name={"Асосий"} />
          <SidebarItem
            url={"/balance_cart"}
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
            url={"/business_market"}
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
            url={"/referal_link"}
            icon={"fas fa-envelope-open-text"}
            name={"Дўстларга таклиф..."}
          />
          <SidebarItem
            url={"/library"}
            icon={"fas fa-clipboard-list"}
            name={"Ҳаридлар архиви"}
          />
          <SidebarItem url={"/"} icon={"fas fa-cog"} name={"Созламалар"} />
          <SidebarItem url={"/"} icon={"fas fa-sign-out-alt"} name={"Чиқиш"} />
        </Scrollbars>
      </div>
    );
  }
}

export default withRouter(Sidebar);
