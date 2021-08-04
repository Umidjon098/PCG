import React, { Component } from "react";
import { Link } from "react-router-dom";
import Preloader from "../../image/preloader.gif";
import "../../style/profile.css";
import FooterMenu from "../main-page/footer-menu";
import axios from "axios";
import BusinessProfile from "./business-profile";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
    };
  }
  componentDidMount() {
    this.getProfiledata();
  }
  getProfiledata = () => {
    const url = "/profile/user/";
    const headers = {
      Authorization: `Bearer  ${localStorage.getItem("accessToken")}`,
    };
    axios(url, { headers: headers }).then((response) => {
      this.setState({ profileData: response.data });
    });
  };
  render() {
    const { profileData } = this.state;
    if (profileData === undefined) {
      return (
        <div className="preloader">
          <img src={Preloader} alt="" />
        </div>
      );
    } else {
      return (
        <div className="profile-box">
          <div className="banner">
            <img src={profileData.image} alt="" />
            <div className="icon">
              <Link to="/edit">
                <i class="far fa-edit"></i>
              </Link>
            </div>
          </div>
          <BusinessProfile
            phone={profileData.phone_number}
            dataList={profileData.businesses}
            first_name={profileData.first_name}
            last_name={profileData.last_name}
            middle_name={profileData.middle_name}
          />
          <div className="social-user">
            <section className="social mb-3">
              <a href={profileData.telegram} target="_blank">
                <i className="fab fa-telegram-plane"></i>
              </a>
              <a href={profileData.facebook} target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={profileData.instagram} target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </section>
            <div className="text">
              {profileData.first_name +
                " " +
                profileData.last_name +
                `нинг ижтимоий  тармоклардаги  шахсий саҳифалари`}
            </div>
          </div>
          <FooterMenu active={"profile"} />
        </div>
      );
    }
  }
}

export default Profile;
