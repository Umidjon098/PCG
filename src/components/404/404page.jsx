import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../style/404.css";
class PageNotFound extends Component {
  render() {
    return (
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-12  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>
                <div className="contant_box_404">
                  <h3 className="h2">Page not found!</h3>
                  <p>the page you are looking for not avaible!</p>
                  <Link to="/mainpage">Go to home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PageNotFound;
