import React, { Component } from "react";
import FilterPng from "../../image/icons/filter.png";

class MarketSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }
  filterToggle = () => {
    this.setState({ toggle: !this.state.toggle });
    this.props.callBackToggle(this.state.toggle);
  };
  render() {
    return (
      <div className="search-box">
        <div className="search-input">
          <div className="input">
            <form onSubmit={this.search}>
              <input
                type="text"
                placeholder="Search"
                onChange={this.handleSearchInput}
                name="searchItem"
              />
              <button type="submit" className="d-none"></button>
            </form>
          </div>
          <div className="filter market-filter">
            <div onClick={this.filterToggle}>
              <img src={FilterPng} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarketSearch;
