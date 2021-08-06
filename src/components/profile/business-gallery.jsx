import React, { Component } from "react";

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
          {this.props.images.map((data) => {
            return <img key={data.id} src={data.image} alt="" />;
          })}
        </div>
      </section>
    );
  }
}

export default BusinessGallery;
