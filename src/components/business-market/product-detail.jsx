import React, { Component } from "react";
import CarouselItem from "./carousel-item";
import Phone from "../../image/icons/phone.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Pagination]);

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="product-detail-box">
        <div className="product-detail-img">
          <div className="circle"></div>
          <div className="edit">
            <i className="fas fa-ellipsis-v"></i>
          </div>
          <div className="text-content">
            <div className="title">Кресло</div>
            <div className="short-description">Lorem ipsum dolor sit amet.</div>
          </div>
          <div className="custom-carousel">
            <Swiper pagination={true} className="mySwiper">
              <SwiperSlide>
                <CarouselItem />
              </SwiperSlide>
              <SwiperSlide>
                <CarouselItem />
              </SwiperSlide>
              <SwiperSlide>
                <CarouselItem />
              </SwiperSlide>
              <SwiperSlide>
                <CarouselItem />
              </SwiperSlide>
              <SwiperSlide>
                <CarouselItem />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="detail-data">
          <span>Ишлаб чиқарувчи</span>
          <div className="company">
            <div className="name">MEBEL ART DECOR</div>
            <div className="city">Tashkent</div>
          </div>
          <div className="main-data">
            <div className="item size">120х250 см</div>
            <div className="item color">Сариғ</div>
            <div className="item price">$45 y.e.</div>
            <div className="item category">Мебель</div>
          </div>
          <div className="description">
            <div className="title">Lorem ipsum dolor sit amet.</div>
            <div className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              saepe earum explicabo ex perferendis, natus quas deserunt magni
              eos. Odit impedit repudiandae consectetur architecto sed sint
              incidunt vitae magnam, modi vero labore maxime, quod velit
              nesciunt doloribus. Consectetur quisquam deleniti necessitatibus?
              Eveniet quasi harum placeat quod molestiae vitae quisquam modi
              temporibus dolore, provident recusandae repudiandae, officia
            </div>
          </div>
          <div className="about-user">
            <div className="name">Азимов Азиз Воҳидович </div>
            <div className="phone">+998 97 707 07 70</div>
          </div>
          <div className="social">
            <div className="media">
              <a href="" target="_blank">
                <i className="fas fa-globe"></i>
              </a>
              <a href="" target="_blank">
                <i className="fab fa-telegram-plane"></i>
              </a>
              <a href="" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="call-btn">
              <img src={Phone} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
