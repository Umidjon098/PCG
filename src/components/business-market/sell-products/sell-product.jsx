import React, { Component } from "react";
import CarouselItem from "../carousel-item";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Pagination]);
class SellProduts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sell-product-box">
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
                <CarouselItem add={true} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <section className="form-box">
          <span>Маълумотларни тўлдиринг</span>
          <form onSubmit={this.createBusiness}>
            <input
              type="text"
              placeholder="*Номланиши"
              name="name"
              onChange={this.handleInput}
              required
            />
            <input
              className="mb-4"
              type="text"
              placeholder="*Категорияси"
              name="position"
              onChange={this.handleInput}
              required
            />

            <input
              className="mb-4"
              type="text"
              placeholder="*Нархи"
              name="website"
              onChange={this.handleInput}
              required
            />
            <input
              type="text"
              placeholder="*Ранги"
              onChange={this.handleInput}
              name="instagram"
              required
            />
            <input
              type="url"
              placeholder="*Ўлчами"
              onChange={this.handleInput}
              name="telegram"
              required
            />
            <input
              type="text"
              placeholder="*Жойлашган манзили"
              onChange={this.handleInput}
              name="facebook"
              required
            />
            <input
              type="text"
              placeholder="*Қўшимча маълумотлар"
              onChange={this.handleInput}
              name="facebook"
              required
            />
            <button className="mt-5 mb-3" type="submit">
              ҚЎШИШ
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default SellProduts;
