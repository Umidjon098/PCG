import React, { Component } from "react";
import DiscountItem from "./discount-item";
import Preloader from "../../image/preloader.gif";

class Discount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getCallBacDiscountID = (id) => {
    this.props.getCallBacDiscountID(id);
  };
  onCallBackId = (id, is_favorite) => {
    this.props.updateDiscount(id, is_favorite);
  };
  render() {
    if (this.props.discount.results === undefined) {
      return (
        <div className="preloader">
          <img src={Preloader} alt="" />
        </div>
      );
    } else {
      return (
        <div>
          {this.props.discount.results.map((data) => {
            return (
              <div key={data.id}>
                <DiscountItem
                  onCallBackId={this.onCallBackId}
                  is_favorite={data.is_favorite}
                  getCallBacDiscountID={this.getCallBacDiscountID}
                  key={data.id}
                  id={data.id}
                  img={data.font_photo}
                  title={data.title}
                  text={data.font_text}
                />
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Discount;
