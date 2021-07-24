import React, { Component } from "react";
import { Link } from "react-router-dom";
import Preloader from "../../image/preloader.gif";
import axios from "axios";
class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsDetail: [],
    };
  }
  componentDidMount() {
    if (this.props.id !== "") {
      this.getNewsDetail();
    }
  }
  getNewsDetail = async () => {
    const url = `/posts/news/${this.props.id}`;
    await axios(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }).then((response) => {
      this.setState({ newsDetail: response.data });
    });
  };

  render() {
    const { newsDetail } = this.state;
    if (newsDetail === undefined) {
      return (
        <div className="preloader">
          <img src={Preloader} alt="" />
        </div>
      );
    } else {
      return (
        <div className="favorite-box">
          <div>
            <div className="banner">
              <img src={newsDetail.font_photo} alt="" />
              <div className="star">
                <div
                  className={newsDetail.is_favorite ? "fas fa-star" : ""}
                ></div>
              </div>
            </div>
            <div className="text-box">
              <div className="title">{newsDetail.title}</div>
              <div className="content">{newsDetail.font_text}</div>
            </div>
            {newsDetail.parts === undefined ? (
              <div className="preloader">
                <img src={Preloader} alt="" />
              </div>
            ) : (
              newsDetail.parts.map((data) => {
                return (
                  <div>
                    <div className="image-box">
                      <div className="large-img">
                        <img src={data.image} alt="" />
                      </div>
                    </div>
                    <div className="content2">{data.text}</div>
                  </div>
                );
              })
            )}
            <footer>
              <div>
                <div className="seen">
                  <i className="fas fa-eye"></i>
                  <span>{newsDetail.views}</span>
                </div>
                <div className="time">
                  <i className="far fa-clock"></i>
                  <span>
                    {newsDetail.created_at === undefined
                      ? ""
                      : newsDetail.created_at.slice(11, 16)}
                  </span>
                </div>
              </div>
              <div>
                <Link to="/">КЕЙИНГИСИ</Link>
              </div>
            </footer>
          </div>
        </div>
      );
    }
  }
}

export default NewsDetail;
