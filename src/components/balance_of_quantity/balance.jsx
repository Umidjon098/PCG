import axios from "axios";
import React, { Component } from "react";
import BRO from "../../image/icons/bro.svg";
import CART from "../../image/icons/cart.svg";

class Balance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: {},
    };
  }
  componentDidMount() {
    this.getBalance();
  }
  getBalance = () => {
    const url = "/profile/mywallet/";
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    };
    axios.get(url, { headers: headers }).then((response) => {
      this.setState({ balance: response.data });
    });
  };
  render() {
    return (
      <div className="balance-box">
        <div className="linear-bg">
          <div className="title">Баланс миқдори</div>
          <div className="value-box">
            <div className="value-box-item">
              <div className="item">
                <img src={BRO} alt="" />
                <div className="value">{this.state.balance.balance}</div>
              </div>
            </div>
          </div>
          <div className="plan-box">
            <div className="plan-item">
              <span>Тариф 1</span>
              <p>Club Silver</p>
            </div>
            <div className="plan-item">
              <span>Тариф 2</span>
              <p>Сlub Bronza</p>
            </div>
            <div className="plan-item active">
              <span>Тариф 3</span>
              <p>Сlub Gold</p>
            </div>
          </div>
          <div className="cart-box">
            <div className="cart-item">
              <div className="number">000 001</div>
              <div className="user-name">{this.state.balance.full_name}</div>
              <img src={CART} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Balance;
