import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="shoping-nav">
        <div className="top-nav">
          <div className="burger-bot" onClick={this.sidebarToggle}>
            <span></span>
            <span></span>
          </div>
          <div className="logo">PCG</div>
          <Link to="/buyproduct" className="cart">
            <i className="fas fa-shopping-cart"></i>
            <div
              className={
                this.props.basketList.data === undefined
                  ? "d-none"
                  : this.props.basketList.data.length === 0
                  ? "d-none"
                  : "count-basket"
              }
            >
              <small>
                {this.props.basketList.data === undefined
                  ? ""
                  : this.props.basketList.data.length}
              </small>
            </div>
          </Link>
        </div>
        <div className="nav-links">
          <Link
            to="/"
            className={this.props.page === "audio" ? "active" : ""}
            onClick={() => this.getCourses(this.state.number, "audio")}
          >
            Аудио курс
          </Link>
          <Link
            to="/"
            className={this.props.page === "video" ? "active" : ""}
            onClick={() => this.getCourses(this.state.number, "video")}
          >
            Видео курс
          </Link>
          <Link
            to="/"
            className={this.props.page === "book" ? "active" : ""}
            onClick={() => this.getCourses(this.state.number, "book")}
          >
            Китоблар
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
