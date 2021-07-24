import React, { Component } from "react";
import Banner from "../../image/profile.png";
import Logo from "../../image/icons/business-card-logo.png";
import icon1 from "../../image/icons/1.svg";
import icon2 from "../../image/icons/2.svg";
import icon3 from "../../image/icons/3.svg";
import icon4 from "../../image/icons/4.svg";
import icon5 from "../../image/icons/5.svg";
import IMG from "../../image/news1.png";

import "../../style/profile.css";
import FooterMenu from "../main-page/footer-menu";
import axios from "axios";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      console.log(response);
    });
  };
  render() {
    return (
      <div className="profile-box">
        <div className="banner">
          <img src={Banner} alt="" />
        </div>
        <section className="company">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="title-box">
            <div className="title">ARA Design Studio</div>
            <div className="location">TASHKENT</div>
          </div>
        </section>
        <section className="social">
          <i className="fas fa-globe"></i>
          <i className="fab fa-telegram-plane"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
        </section>
        <section className="main-data">
          <div className="data-item">
            <div className="icon">
              <img src={icon1} alt="" />
            </div>
            <div className="text">Санъат сохаси</div>
          </div>
          <div className="data-item">
            <div className="icon">
              <img src={icon2} alt="" />
            </div>
            <div className="text">Азимова Робия Аъзамовна</div>
          </div>
          <div className="data-item">
            <div className="icon">
              <img src={icon3} alt="" />
            </div>
            <div className="text">Компания асосчиси</div>
          </div>
          <div className="data-item">
            <div className="icon">
              <img src={icon4} alt="" />
            </div>
            <div className="text">+998 97 770 07 70</div>
          </div>
          <div className="data-item">
            <div className="icon">
              <img src={icon5} alt="" />
            </div>
            <div className="text">9-коучинг 3-гурух ўқувчиси </div>
          </div>
        </section>
        <hr />
        <section className="multimedia">
          <div className="title">Бизнес фаолиятига оид фото суратлар</div>
          <div className="img-box">
            <img src={IMG} alt="" />
            <img src={IMG} alt="" />
            <img src={IMG} alt="" />
          </div>
          <div className="title locate">
            <span>Манзил:</span> Тошкент ш., Афросиёб кўчаси., 5а
          </div>
          <div className="map-box">
            <iframe
              src="https://www.google.com/maps"
              title="description"
            ></iframe>
          </div>
        </section>
        <div className="social-user">
          <section className="social mb-3">
            <i className="fas fa-globe"></i>
            <i className="fab fa-telegram-plane"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
          </section>
          <div className="text">
            Азимова Робия Аъзамовнанинг ижтимоий <br /> тармоклардаги шахсий
            саҳифалари
          </div>
        </div>
        <FooterMenu active={"profile"} />
      </div>
    );
  }
}

export default Profile;
