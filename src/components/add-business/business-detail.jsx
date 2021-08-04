import React, { Component } from "react";
import Preloader from "../../image/preloader.gif";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  SearchControl,
  ZoomControl,
  GeolocationControl,
} from "react-yandex-maps";
import axios from "axios";
import icon1 from "../../image/icons/1.svg";
import icon2 from "../../image/icons/2.svg";
import icon3 from "../../image/icons/3.svg";
import icon4 from "../../image/icons/4.svg";
import icon5 from "../../image/icons/5.svg";
import FooterMenu from "../main-page/footer-menu";
class BusinessDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getBusinessDetail();
  }
  getBusinessDetail = () => {
    const id = localStorage.getItem("businessID");
    const url = `/profile/business/${id}`;
    axios(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((response) => {
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
            <img src={profileData.user_data.image} alt="" />
          </div>
          <section className="company">
            <div className="logo">
              <img src={profileData.logo} alt="" />
            </div>
            <div className="title-box">
              <div className="title">{profileData.name}</div>
              <div className="location">{profileData.region_name}</div>
            </div>
          </section>
          <section className="social">
            <a href={profileData.website} target="_blank">
              <i className="fas fa-globe"></i>
            </a>
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
          <section className="main-data">
            <div className="data-item">
              <div className="icon">
                <img src={icon1} alt="" />
              </div>
              <div className="text">{profileData.activity_type_name}</div>
            </div>
            <div className="data-item">
              <div className="icon">
                <img src={icon2} alt="" />
              </div>
              <div className="text">
                {profileData.user_data.first_name +
                  " " +
                  profileData.user_data.last_name +
                  " " +
                  profileData.user_data.middle_name}
              </div>
            </div>
            <div className="data-item">
              <div className="icon">
                <img src={icon3} alt="" />
              </div>
              <div className="text">{profileData.position}</div>
            </div>
            <div className="data-item">
              <div className="icon">
                <img src={icon4} alt="" />
              </div>
              <div className="text">{profileData.user_data.phone_number}</div>
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
              {profileData.gallery.map((data, index) => {
                return <img key={index} src={data.image} alt="" />;
              })}
            </div>
            <YMaps>
              <Map
                modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
                onClick={this.onMapClick}
                defaultState={{ center: profileData.location, zoom: 9 }}
                width="100%"
                height="210px"
              >
                <ZoomControl />
                <FullscreenControl />
                <GeolocationControl />
              </Map>
            </YMaps>
          </section>
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
              {profileData.user_data.first_name +
                " " +
                profileData.user_data.last_name +
                `нинг ижтимоий  тармоклардаги  шахсий саҳифалари`}
            </div>
          </div>
          <FooterMenu />
        </div>
      );
    }
  }
}

export default BusinessDetail;
