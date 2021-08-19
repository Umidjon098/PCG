import React, { Component } from "react";
import Divan from "../../image/divan.png";
class CarouselItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="carousel-card">
        <img src={Divan} alt="" />
      </div>
    );
  }
}

export default CarouselItem;
