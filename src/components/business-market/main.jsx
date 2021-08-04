import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "../../style/business_market.css";
import AllProducts from "./allProducts";
import MarketFIlter from "./filter";
import Header from "./header";
import PageLink from "./link";
import MarketSearch from "./search";
class BusinessMarket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dFilter: false,
    };
  }
  callBackToggle = (toggle) => {
    this.setState({ dFilter: toggle });
  };
  render() {
    const { path } = this.props.match;
    return (
      <div className="business-market-box">
        <div className="fixed-div">
          <Header />
          <MarketSearch callBackToggle={this.callBackToggle} />
          <PageLink />
          <div
            className={this.state.dFilter ? "toggle-filter" : "filter-hidden"}
          >
            <MarketFIlter />
          </div>
        </div>
        <Switch>
          <Route path={`${path}`}>
            <AllProducts />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(BusinessMarket);
