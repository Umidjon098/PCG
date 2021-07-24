import React, { Component } from "react";
import { Link } from "react-router-dom";
class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const time = this.props.created_at.slice(11, 16);
    return (
      <div className="new-box">
        <div className="image-box">
          <img src={this.props.img} alt="" />
          <div
            className={this.props.is_favorite ? "favorite like" : "favorite"}
          >
            <i
              className="far fa-star"
              onClick={this.props.onCallBackId.bind(this, this.props)}
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
        </div>
        <Link
          to="/news-detail"
          className="title"
          onClick={this.props.onCallBackId.bind(this, this.props.id)}
        >
          {this.props.title}
        </Link>
        <div className="text line-clamp">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default NewsItem;
