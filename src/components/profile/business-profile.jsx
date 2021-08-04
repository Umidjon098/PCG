import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import icon1 from "../../image/icons/1.svg";
import icon2 from "../../image/icons/2.svg";
import icon3 from "../../image/icons/3.svg";
import icon4 from "../../image/icons/4.svg";
import icon5 from "../../image/icons/5.svg";
import Preloader from "../../image/preloader.gif";
import BusinessGallery from "./business-gallery";

import Location from "./location";
class BusinessProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { dataList, phone, first_name, last_name, middle_name } = this.props;
    if (dataList === undefined) {
      return (
        <div className="preloader">
          <img src={Preloader} alt="" />
        </div>
      );
    } else {
      return (
        <Swiper className="mySwiper">
          <div className="business-carousel">
            {dataList.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <section className="company">
                    <div className="logo">
                      <img src={data.logo} alt="" />
                    </div>
                    <div className="title-box">
                      <div className="title">{data.name}</div>
                      <div className="location">{data.region_name}</div>
                    </div>
                  </section>
                  <section className="social">
                    <a href={data.website} target="_blank">
                      <i className="fas fa-globe"></i>
                    </a>
                    <a href={data.telegram} target="_blank">
                      <i className="fab fa-telegram-plane"></i>
                    </a>
                    <a href={data.facebook} target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href={data.instagram} target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </section>
                  <section className="main-data">
                    <div className="data-item">
                      <div className="icon">
                        <img src={icon1} alt="" />
                      </div>
                      <div className="text">{data.activity_type_name}</div>
                    </div>
                    <div className="data-item">
                      <div className="icon">
                        <img src={icon2} alt="" />
                      </div>
                      <div className="text">
                        {first_name + " " + last_name + " " + middle_name}
                      </div>
                    </div>
                    <div className="data-item">
                      <div className="icon">
                        <img src={icon3} alt="" />
                      </div>
                      <div className="text">{data.position}</div>
                    </div>
                    <div className="data-item">
                      <div className="icon">
                        <img src={icon4} alt="" />
                      </div>
                      <div className="text">{phone}</div>
                    </div>
                    <div className="data-item">
                      <div className="icon">
                        <img src={icon5} alt="" />
                      </div>
                      <div className="text">9-коучинг 3-гурух ўқувчиси </div>
                    </div>
                  </section>
                  <hr />
                  <BusinessGallery images={data.gallery} />
                  <Location location={data.location} />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      );
    }
  }
}

export default BusinessProfile;
