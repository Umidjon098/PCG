import React, { Component } from "react";
import "../../style/balance.css";
class BalanceOfQuantity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="balance-box">
        <div className="topbar">
          <div className="title">Баланс миқдори</div>
        </div>
        <div className="content">
          <div className="title">PCG картасига уланиш</div>
          <div className="text">
            Балансингизда <span>BRO</span> лар бўлиши ва уларни ҳарид қилишингиз
            учун <span>UZCARD</span> ингизни <span>PCG</span> картасига улаб
            олишингиз керак бўлади
          </div>
          <div className="warning">
            PCG картасига уланиш учун картангиздан маълум миқдорда пул тўлови
            отказилиши керак бўлади
          </div>
        </div>
        <div className="form-box">
          <form action="">
            <label htmlFor="">Карта рақамингизни киритинг</label>
            <input
              className="mb-4"
              type="text"
              placeholder="0000 0000 0000 0000"
            />
            <span>Карта муддатини киритинг</span>
            <div className="date">
              <input type="text" placeholder="00" />
              <input type="text" placeholder="00" />
            </div>
            <button>улаш</button>
          </form>
        </div>
      </div>
    );
  }
}

export default BalanceOfQuantity;
