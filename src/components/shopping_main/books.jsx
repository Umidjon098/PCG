import React, { Component } from "react";
import { Link } from "react-router-dom";
import Preloader from "../../image/preloader.gif";
class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { List } = this.props;
    return (
      <div>
        {List.results === undefined ? (
          <div className="preloader">
            <img src={Preloader} alt="" />
          </div>
        ) : (
          List.results.map((data) => {
            return (
              <div key={data.id} className="book-box">
                <div className="book">
                  <div className="book-img">
                    <img src={data.fon_image} alt="" />
                  </div>
                  <div className="content">
                    <Link
                      onClick={() =>
                        this.props.getCourseDetail("book", data.id)
                      }
                      to="/bookdetail"
                      className="title"
                    >
                      {data.title}
                    </Link>
                    <div className="short-description">{data.description}</div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default Books;
