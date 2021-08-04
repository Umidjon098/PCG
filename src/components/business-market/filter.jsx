import React, { Component } from "react";

class MarketFIlter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="filter-box">
        <section className="form-box">
          <form onSubmit={this.filter}>
            <input
              type="text"
              name="name"
              placeholder="Қидирилаётган товар номи"
              onChange={this.handleInput}
            />
            <select name="activity_type" onChange={this.handleInput}>
              <option>Категорияси</option>
              {/* {this.state.couchingType.map((data) => {
                return (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                );
              })} */}
            </select>
            <select name="region" onChange={this.handleInput}>
              <option>Ҳудуд</option>
              {/* {this.state.regions.map((data) => {
                return (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                );
              })} */}
            </select>
            <button type="submit" className="mt-5">
              ҚИДИРИШ
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default MarketFIlter;
