import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="shoping-search">
        <form onSubmit={this.search}>
          <i className="fas fa-search"></i>
          <input
            tip="text"
            name="searchItem"
            placeholder="Search"
            onChange={this.handleSearchInput}
          />
          <button type="submit" className="d-none"></button>
        </form>
      </div>
    );
  }
}

export default Search;
