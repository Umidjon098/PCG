import React, { Component } from "react";
import Bro from "../../image/icons/bro.svg";
import Buy from "../../image/icons/buy.svg";
import axios from "axios";
class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  buyProduct = async (id, data_tip) => {
    const url = `/courses/cs/${id}/`;
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    };
    let data = {};
    if (data_tip === "add") {
      data = {
        update_type: "add",
      };
    } else {
      data = {
        update_type: "delete",
      };
    }
    await axios.patch(url, data, { headers: headers }).then((data) => {
      this.props.getCallBackList(data);
    });
  };
  render() {
    const { data } = this.props;
    return (
      <div>
        {data === undefined ? (
          <div></div>
        ) : (
          <div className="video-course detail">
            <div className="video">
              <img src={data.fon_image} alt="" />
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
                {data.in_basket ? (
                  <img
                    onClick={() => this.buyProduct(data.id, "delete")}
                    src={Buy}
                    alt="buy image"
                  />
                ) : (
                  <i
                    onClick={() => this.buyProduct(data.id, "add")}
                    className="fas fa-shopping-cart"
                  ></i>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BookDetail;
