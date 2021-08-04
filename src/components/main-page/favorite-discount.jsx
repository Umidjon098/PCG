import React, { Component } from "react";

class FavoriteDiscount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const time = this.props.created_at.slice(11, 16);
    return (
      <div className="discount-box">
        <div className="image-box">
          <img src={this.props.img} alt="" />
          <div
            className={this.props.is_favorite ? "favorite like" : "favorite"}
          >
            <i
              className="far fa-star"
              onClick={() =>
                this.props.updateDiscount(this.props.id, this.props.is_favorite)
              }
            ></i>
          </div>
          <div className="seen">
            <i className="fas fa-eye"></i>
            <span>{this.props.views}</span>
          </div>
          <div className="time">
            <i className="far fa-clock"></i>
            <span>{time}</span>
          </div>
          <div className="title">{this.props.title}</div>
          <div className="text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default FavoriteDiscount;
