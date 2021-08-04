import React, { Component } from "react";
import BusinessCard from "./business-card";
import "../../style/business.css";
import "../../style/main.css";
import FooterMenu from "../main-page/footer-menu";
import { Link } from "react-router-dom";
import axios from "axios";
import Preloader from "../../image/preloader.gif";
import Sidebar from "../sidebar/sidebar";

class AddBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      businessList: [],
    };
  }

  componentDidMount() {
    this.getOwnBusiness();
  }

  getOwnBusiness = () => {
    const url = "/profile/user-business";
    axios(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }).then((response) => {
      this.setState({ businessList: response.data });
    });
  };
  callBackToggle = (toggle) => {
    this.setState({ toggle });
  };
  render() {
    return (
      <div className="business-box">
        <Sidebar
          toggle={this.state.toggle}
          callBackToggle={this.callBackToggle}
        />
        <section className="navbar-section">
          <div
            className="menu-btn"
            onClick={() => this.setState({ toggle: !this.state.toggle })}
          >
            <span className="line1"></span>
            <span className="line2"></span>
          </div>
          <div className="section-title">Бизнес рўйхатлари</div>
        </section>
        {this.state.businessList.length === 0 ? (
          <div className="preloader">
            <img src={Preloader} alt="" />
          </div>
        ) : (
          this.state.businessList.map((data) => {
            return (
              <section key={data.id} className="business-card-box">
                <BusinessCard
                  id={data.id}
                  logo={data.logo}
                  name={data.name}
                  region_name={data.region_name}
                  activity_type_name={data.activity_type_name}
                  user_full_name={data.user_full_name}
                  user_phone_number={data.user_phone_number}
                  telegram={data.telegram}
                  instagram={data.instagram}
                  facebook={data.facebook}
                  status={data.status}
                />
              </section>
            );
          })
        )}
        <div className="add-business">
          <Link to="/businessadd" className="add">
            +
          </Link>
        </div>
        <FooterMenu active={"add_business"} />
      </div>
    );
  }
}

export default AddBusiness;
