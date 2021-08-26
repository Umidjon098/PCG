import React, { Component } from "react";
import Divan from "../../image/divan.png";
import Camera from "../../image/icons/camera-blue.png";

class CarouselItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="carousel-card">
        <img src={Divan} alt="" />
        <img
          className={this.props.add ? "add-btn" : "d-none"}
          src={Camera}
          alt=""
        />
      </div>
    );
  }
}

export default CarouselItem;
