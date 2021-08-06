import React, { Component } from "react";
import "../../style/partner.css";
class Partner extends Component {
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
          <div className="title">Хамкорлик</div>
        </div>
        <div className="content">
          <div className="title">Lorem ipsum dolor sit amet.</div>
          <div className="text mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque eos,
            animi aut reprehenderit saepe exercitationem quaerat officia!
            Accusantium est dolorum iure dolores temporibus velit cum
            repudiandae error, ratione, officiis quae. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Atque eos, animi aut
            reprehenderit saepe exercitationem quaerat officia! Accusantium est
            dolorum iure dolores temporibus velit cum repudiandae error,
            ratione, officiis quae. amet consectetur adipisicing elit. Atque
            eos, animi aut reprehenderit saepe exercitationem quaerat officia!
            Accusantium est dolorum iure dolores temporibus velit cum
            repudiandae error, ratione, officiis quae.
          </div>
        </div>
        <div className="cooperation">
          <div className="title">Биз билан ҳамкорлик қилишга таййормисиз?</div>
          <div className="submit text-success">ХА</div>
          <div className="submit">йўқ</div>
        </div>
      </div>
    );
  }
}

export default Partner;
