import React, { Component } from "react";
import Banner from "../../image/main-banner.jpg";
import Banner1 from "../../image/main-banner2.jpg";
import Banner2 from "../../image/main-banner3.jpg";

import Carousel from "react-bootstrap/Carousel";
class Carousell extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Carousell;
