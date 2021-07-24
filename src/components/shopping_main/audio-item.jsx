import React, { Component } from "react";
import BRO from "../../image/icons/bro1.svg";
import Preloader from "../../image/preloader.gif";
import BUY from "../../image/icons/buy.svg";
class AudioItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.List.results === undefined ? (
          <div className="preloader">
            <img src={Preloader} alt="" />
          </div>
        ) : (
          this.props.List.results.map((data) => {
            return (
              <div key={data.id} className="audio-box">
                <div className="audio-img">
                  <img src={data.fon_image} alt="Audio image" />
                </div>
                <div className="audio-data">
                  <div className="item">
                    <audio controls>
                      <source src={data.file} type="audio/mpeg" />
                    </audio>
                  </div>
                  <div className="item">
                    <div>
                      <div className="title">{data.title}</div>
                      <div className="short-description">
                        {data.description}
                      </div>
                    </div>
                    <div className={data.file === null ? "price" : "d-none"}>
                      <img src={BRO} alt="" />
                      <span>{data.cost}</span>
                      <label>BRO</label>
                    </div>
                    <div className={data.file === null ? "buy-btn" : "d-none"}>
                      {data.in_basket ? (
                        <img
                          onClick={() =>
                            this.props.buyProduct(data.id, "delete")
                          }
                          src={BUY}
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
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default AudioItem;
