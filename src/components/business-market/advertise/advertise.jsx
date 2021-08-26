import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import ProductItem from "../product-item";

class Advertise extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="advertising-box">
        <Header title={"Реклама қилиш"} />
        <div className="mt-5">
          <ProductItem />
        </div>
        <div className="description">
          <div className="title">
            Товарингиз йоки хизматингизни ушбу коринишда ТОП қилган холда
            реклама қилинг
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic
            non fuga dignissimos vel optio laboriosam ipsam eum quo molestias
            libero eius voluptas iste sequi quibusdam, laudantium adipisci fugit
            soluta illum est voluptate in veniam corrupti? Facere maiores ex
            aspernatur?
          </div>
        </div>
        <Link to="/advertise-detail">рекламага бериш</Link>
      </div>
    );
  }
}

export default Advertise;
