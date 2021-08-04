import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class PageLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { url } = this.props.match;
    return (
      <div className="links">
        <Link to={`${url}`} className="link-item">
          Барчаси
        </Link>
        <Link to="/" className="link-item active">
          Овқат
        </Link>
        <Link to="/" className="link-item">
          Кийим
        </Link>
        <Link to="/" className="link-item">
          Техника
        </Link>
        <Link to="/" className="link-item">
          Бошкалар
        </Link>
      </div>
    );
  }
}

export default withRouter(PageLink);
