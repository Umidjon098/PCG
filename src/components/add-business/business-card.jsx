import React, { Component } from "react";
import { Link } from "react-router-dom";
class BusinessCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card-box">
        <Link
          to="/business_detail"
          onClick={() => localStorage.setItem("businessID", this.props.id)}
        >
          <div className="card-banner"></div>
          <div className="card-title">
            <div className="logo-box">
              <img src={this.props.logo} alt="" />
            </div>
            <div className="title">{this.props.name.toUpperCase()}</div>
            <div className="location">
              {this.props.region_name.toUpperCase()}
            </div>
          </div>
          <div className="card-content">
            <div className="business-type">{this.props.activity_type_name}</div>
            <div className="director-name">{this.props.user_full_name}</div>
            <div className="phone">{this.props.user_phone_number}</div>
            <div className="link">{this.props.telegram}</div>
            <div className="link">{this.props.instagram}</div>
            <div className="link">{this.props.facebook}</div>
            <div className="status text-danger" style={{ fontSize: "12px" }}>
              {this.props.status ? "" : "Модератор томонидан тасдиқланмаган"}
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default BusinessCard;
