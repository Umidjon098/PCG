import React, { Component } from "react";
import ProductItem from "./product-item";

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="products-item">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    );
  }
}

export default AllProducts;
