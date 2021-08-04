import React, { Component } from "react";
import { Link } from "react-router-dom";
class DiscountItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="discount-box">
        <div className="image-box">
          <div
            className={this.props.is_favorite ? "favorite like" : "favorite"}
          >
            <i
              className="far fa-star"
              onClick={this.props.onCallBackId.bind(
                this,
                this.props.id,
                this.props.is_favorite
              )}
            ></i>
          </div>
          <img src={this.props.img} alt="" />
          <Link
            to="/discount-detail"
            className="title"
            onClick={this.props.getCallBacDiscountID.bind(this, this.props.id)}
          >
            {this.props.title}
          </Link>
          <div className="text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default DiscountItem;
