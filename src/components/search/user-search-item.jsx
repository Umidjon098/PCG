import React, { Component } from "react";
import "../../style/business.css";
import { Link } from "react-router-dom";
class UserSearchItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card-box">
        <Link
          to="/users_detail"
          onClick={() => localStorage.setItem("userID", this.props.id)}
        >
          <div className="banner">
            <div className="logo">
              <img src={this.props.image} alt="" />
            </div>
            <div className="text">
              <div className="title">
                {this.props.first_name.toUpperCase() +
                  " " +
                  this.props.last_name.toUpperCase()}
              </div>
              <div className="location">{this.props.phone_number}</div>
            </div>
          </div>
          <div className="card-content">
            <div className="link">{this.props.birthday}</div>
            <div className="phone">{this.props.email}</div>
            <div className="link">{this.props.telegram}</div>
            <div className="link">{this.props.instagram}</div>
            <div className="link">{this.props.facebook}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default UserSearchItem;
