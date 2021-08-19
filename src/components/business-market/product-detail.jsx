import React, { Component } from "react";
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
        </div>
      </div>
    );
  }
}

export default ProductDetail;
