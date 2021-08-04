import React, { Component } from "react";
import Preloader from "../../image/preloader.gif";

import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
class Carousell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: [],
    };
  }
  componentDidMount() {
    this.getCarouselData();
  }
  getCarouselData = () => {
    const url = "/posts/carousel/";
    const headers = {
      Authorization: `Bearer  ${localStorage.getItem("accessToken")}`,
    };
    axios(url, { headers: headers }).then((response) => {
      this.setState({ carouselData: response.data });
    });
  };
  render() {
    if (this.state.carouselData === undefined) {
      return (
        <div className="preloader">
          <img src={Preloader} alt="" />
        </div>
      );
    } else {
      return (
        <div className="carousel-box">
          <Carousel>
            {this.state.carouselData.map((data, index) => {
              return (
                <Carousel.Item key={index}>
                  <img className="d-block" src={data.image} alt="First slide" />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      );
    }
  }
}
// <Carousel.Item>
//   <img className="d-block w-100" src={Banner} alt="First slide" />
//   <Carousel.Caption></Carousel.Caption>
// </Carousel.Item>;
export default Carousell;
