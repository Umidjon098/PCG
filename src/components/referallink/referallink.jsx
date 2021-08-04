import React, { Component } from "react";
import "../../style/referallink.css";
import ShareModal from "./share-modal";
class ReferalLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      share: false,
    };
  }
  render() {
    return (
      <div className="referal-box">
        <div className="header">
          <div className="title">Дўстларга таклиф юбориш</div>
        </div>
        <div className="content">
          <div className="note">
            Ҳавола айнан нимага йўналтирилиши кераклигини белгиланг
          </div>
          <form>
            <select name="">
              <option value="">PCG мобил иловасига ссылка</option>
              <option value="">.....сига ссылка</option>
              <option value="">.....сига ссылка</option>
              <option value="">.....сига ссылка</option>
              <option value="">.....сига ссылка</option>
            </select>
          </form>
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque eos,
            animi aut reprehenderit saepe exercitationem quaerat officia!
            Accusantium est dolorum iure dolores temporibus velit cum
            repudiandae error, ratione, officiis quae.
          </div>
          <div className="link">http://app.pcg.uz/referallik?id=123456789</div>
          <div className="share-btn">
            <i
              className="fas fa-share-alt"
              onClick={() => this.setState({ share: !this.state.share })}
            ></i>
            <ShareModal share={this.state.share} />
          </div>
          <div className="counter">
            <div>Таклифингиз орқали кирганлар</div>
            <span>7</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ReferalLink;
