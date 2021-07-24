import React, { Component } from "react";

class FavoriteDiscount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.favoriteDiscount.discount.results);
    return (
      <div className="discount-box">
        <div className="image-box">
          <img src={this.props.favoriteDiscount.discount.img} alt="" />
          <div className="title">
            {this.props.favoriteDiscount.discount.title}
          </div>
          <div className="text">
            {this.props.favoriteDiscount.discount.text}
          </div>
        </div>
      </div>
    );
  }
}

export default FavoriteDiscount;
