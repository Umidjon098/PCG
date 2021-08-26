import React, { Component } from "react";
import Header from "../header";
import ProductItem from "../product-item";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
class AdvertiseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 3,
    };
  }
  valuetext = (value) => {
    return `${value}`;
  };
  render() {
    return (
      <div className="adver-box">
        <Header title={"Реклама қилиш"} />
        <div className="mt-5">
          <ProductItem />
        </div>
        <div className="slider-value">
          <Typography id="discrete-slider" gutterBottom>
            Муддатни белгиланг
          </Typography>
          <Slider
            onChange={(e) => this.setState({ day: e.target.value })}
            defaultValue={3}
            getAriaValueText={this.valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            max={30}
          />
        </div>
        <div className="form-box px-3">
          <input type="text" value={this.state.day} />
        </div>
        <div className="alert-box">
          <span>Тўлов БРОси</span>
          <div className="text">Кун сонига қараб нарҳ белгиланади</div>
        </div>
        <div className="submit">рекламага бериш</div>
      </div>
    );
  }
}

export default AdvertiseDetail;
