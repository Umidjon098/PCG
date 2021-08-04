import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FooterMenu from "../main-page/footer-menu";
import Search from "./search";
import UserSearch from "./user-search";

class MainSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Swiper className="mySwiper">
          <SwiperSlide>
            <Search />
          </SwiperSlide>
          <SwiperSlide>
            <UserSearch />
          </SwiperSlide>
        </Swiper>
        <FooterMenu active={"search"} />
      </div>
    );
  }
}

export default MainSearch;
