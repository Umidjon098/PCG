import React, { Component } from "react";
import "../../style/business.css";

class SearchItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card-box">
        <div className="banner">
          <div className="logo">
            <img src={this.props.logo} alt="" />
          </div>
          <div className="text">
            <div className="title">{this.props.name.toUpperCase()}</div>
            <div className="location">
              {this.props.region_name.toUpperCase()}
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="business-type">{this.props.activity_type_name}</div>
          <div className="director-name">{this.props.user_full_name}</div>
          <div className="phone">{this.props.user_phone_number}</div>
          <div className="link">{this.props.telegram}</div>
          <div className="link">{this.props.instagram}</div>
          <div className="link">{this.props.facebook}</div>
        </div>
      </div>
    );
  }
}

export default SearchItem;
