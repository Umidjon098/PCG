import React, { Component } from "react";
import Rasm from "../../image/book-lg.svg";
class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="product-item">
        <div className="img-box">
          <img src={Rasm} alt="" />
          <div className="popular">
            <i className="fas fa-star"></i>
            <span>ТОП</span>
          </div>
        </div>
        <div className="content">
          <div className="title">Кресло</div>
          <div className="company">MEBEL ART DECOR</div>
          <div className="address">Tashkent </div>
          <div className="size">120х250 см</div>
          <div className="category">Мебель</div>
          <div className="content-footer">
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="price">$ 45 y.e.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
