import React, { Component } from "react";
import IMG from "../../image/news1.png";

class BusinessGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="multimedia">
        <div className="title">Бизнес фаолиятига оид фото суратлар</div>
        <div className="img-box">
          {this.props.images.map((data, index) => {
            return <img key={index} src={data.image} alt="" />;
          })}
        </div>
      </section>
    );
  }
}

export default BusinessGallery;
