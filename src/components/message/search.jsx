import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="n-search m-search">
        <form>
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
