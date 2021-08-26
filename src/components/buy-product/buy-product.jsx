import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BRO from "../../image/icons/bro.svg";
class BuyProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basketList: [],
    };
  }
  componentDidMount() {
    this.getBasketList();
  }
  getBasketList = () => {
    const url = "/courses/cs/basket/";
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    };
    axios.get(url, { headers: headers }).then((response) => {
      console.log(response.data);
      this.setState({ basketList: response.data });
    });
  };
  buyProducts = async (e) => {
    e.preventDefault();
    const url = "/courses/cs/buy/";
    const headers = {
      Authorization: "Bearer  " + localStorage.getItem("accessToken"),
    };
    const data = {
      total: this.state.basketList.total,
    };
    await axios.post(url, data, { headers: headers }).then(() => {
      this.props.history.push("/library");
    });
  };
  render() {
    return (
      <div className="buy-box">
        <div className="topbar">
          <div className="title">Харид қилиш</div>
        </div>
        <section className="form-box">
          <span>Тўлов миқдори</span>
          <form>
            <img id="bro-icon" src={BRO} alt="" />
            <input
              className="text-center text-success"
              type="text"
              name="total"
              value={
                this.state.basketList.total === undefined
                  ? 0
                  : this.state.basketList.total + " BRO"
              }
            />
            {this.state.basketList.data === undefined
              ? ""
              : this.state.basketList.data.map((data) => {
                  return (
                    <div key={data.id} className="book-box">
                      <div className="book">
                        <div className="book-img">
                          <img src={data.fon_image} alt="" />
                        </div>
                        <div className="content">
                          <div className="title">{data.title}</div>
                          <div className="short-description">
                            {data.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            <button className="mt-3" onClick={this.buyProducts}>
              Tасдиқлаш
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default withRouter(BuyProduct);
