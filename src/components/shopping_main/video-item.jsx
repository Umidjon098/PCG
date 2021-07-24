import React, { Component } from "react";
import Bro from "../../image/icons/bro.svg";
import Buy from "../../image/icons/buy.svg";
import Preloader from "../../image/preloader.gif";
import { Link } from "react-router-dom";
class VideoItem extends Component {
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
              <div key={data.id} className="video-course">
                <div className={data.file === null ? "video" : "d-none"}>
                  <div className="play">
                    <i className="fas fa-play"></i>
                  </div>
                  <img src={data.fon_image} alt="Video image" />
                </div>
                <div className={data.file === null ? "d-none" : "video"}>
                  <video controls>
                    <source src={data.file} type="video/mp4" />
                  </video>
                </div>
                <div className="content">
                  <Link
                    to="/videodetail"
                    onClick={() => this.props.getCourseDetail("video", data.id)}
                    className="title"
                  >
                    {data.title}
                  </Link>
                  <div className="short-description">{data.description}</div>
                  <hr />
                  <div className={data.file === null ? "buy" : "d-none"}>
                    <div className="price">
                      <img src={Bro} alt="" />
                      <span>{data.cost} BRO</span>
                    </div>
                    {data.in_basket ? (
                      <img
                        onClick={() => this.props.buyProduct(data.id, "delete")}
                        src={Buy}
                        alt="buy image"
                      />
                    ) : (
                      <i
                        onClick={() => this.props.buyProduct(data.id, "add")}
                        className="fas fa-shopping-cart"
                      ></i>
                    )}
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

export default VideoItem;
