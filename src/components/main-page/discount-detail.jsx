import React, { Component } from "react";
import { Link } from "react-router-dom";
import Preloader from "../../image/preloader.gif";
import axios from "axios";
class DiscountDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discountDetail: [],
    };
  }
  componentDidMount() {
    if (this.props.id !== "") {
      this.getdiscountDetail();
    }
  }
  getdiscountDetail = async () => {
    const url = `/posts/discount/${this.props.id}`;
    await axios(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }).then((response) => {
      this.setState({ discountDetail: response.data });
    });
  };

  render() {
    const { discountDetail } = this.state;
    if (discountDetail === undefined) {
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
              <img src={discountDetail.font_photo} alt="" />
              <div className="star">
                <div
                  className={discountDetail.is_favorite ? "fas fa-star" : ""}
                ></div>
              </div>
            </div>
            <div className="text-box">
              <div className="title">{discountDetail.title}</div>
              <div className="content">{discountDetail.font_text}</div>
            </div>
            {discountDetail.parts === undefined ? (
              <div className="preloader">
                <img src={Preloader} alt="" />
              </div>
            ) : (
              discountDetail.parts.map((data) => {
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
                  <span>{discountDetail.views}</span>
                </div>
                <div className="time">
                  <i className="far fa-clock"></i>
                  <span>
                    {discountDetail.created_at === undefined
                      ? ""
                      : discountDetail.created_at.slice(11, 16)}
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

export default DiscountDetail;
