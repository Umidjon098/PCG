import React, { Component } from "react";
import Bro from "../../image/icons/bro.svg";
import Buy from "../../image/icons/buy.svg";
import Preloader from "../../image/preloader.gif";

class VideoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        {data.length === 0 ? (
          <div className="preloader">
            <img src={Preloader} alt="" />
          </div>
        ) : (
          <div className="video-course detail">
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
              <div className="title">{data.title}</div>
              <div className="short-description detail-text">
                {data.description}
              </div>
              <div className="link">
                <a href="http://www.pcg.uz">http://www.pcg.uz</a>
              </div>
              <hr />
              <div className={data.file === null ? "buy" : "d-none"}>
                <div className="price">
                  <img src={Bro} alt="" />
                  <span>{data.cost} BRO</span>
                </div>
                <img src={Buy} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default VideoDetail;
