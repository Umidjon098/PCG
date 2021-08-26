import React, { Component } from "react";
import DeleteModal from "./delete-modal";
import MarketModalMenu from "./footer-menu";
import Header from "./header";
import ProductItem from "./product-item";

class MyProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      v_toggle: false,
    };
  }
  toggleModal = (v_toggle) => {
    this.setState({ v_toggle });
  };
  render() {
    return (
      <div>
        {/* <DeleteModal /> */}
        <Header title={"Менинг товар-услугаларим"} />
        <div className="mt-3 mb-3">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        <MarketModalMenu
          v_toggle={this.state.v_toggle}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

export default MyProducts;
