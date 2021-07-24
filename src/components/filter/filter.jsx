import React, { Component } from "react";
import axios from "axios";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regions: [],
      couchingType: [],
      name: null,
      full_name: null,
      phone_number: null,
      group_number: null,
      region: null,
      activity_type: null,
    };
  }
  componentDidMount() {
    this.getregions();
    this.getCouchingType();
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  getregions = () => {
    const url = "/profile/business-region";
    axios(url).then((response) => {
      this.setState({ regions: response.data });
    });
  };
  getCouchingType = () => {
    const url = "/profile/business-activity";
    axios(url).then((response) => {
      this.setState({ couchingType: response.data });
    });
  };
  filter = (e) => {
    e.preventDefault();
    let url = "/profile/business";
    const headers = {
      Authorization: `Bearer  ${localStorage.getItem("accessToken")}`,
    };
    const params = {
      search: this.state.name,
      full_name: this.state.full_name,
      phone_number: this.state.phone_number,
      group_number: this.state.group_number,
      region: this.state.region,
      activity_type: this.state.activity_type,
    };
    axios(url, { headers, params: params }).then((response) => {
      this.props.callBackFilter(response.data);
    });
  };
  render() {
    return (
      <div className="filter-box">
        <section className="form-box">
          <form onSubmit={this.filter}>
            <input
              type="text"
              name="name"
              placeholder="Бизнес номи"
              onChange={this.handleInput}
            />
            <select name="activity_type" onChange={this.handleInput}>
              <option>Фаолият тури</option>
              {this.state.couchingType.map((data) => {
                return (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                );
              })}
            </select>
            <select name="region" onChange={this.handleInput}>
              <option>Ҳудуд</option>
              {this.state.regions.map((data) => {
                return (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                );
              })}
            </select>
            <input
              name="full_name"
              type="text"
              placeholder="Ф И Ш"
              onChange={this.handleInput}
            />
            <input
              name="phone_nunmber"
              type="number"
              placeholder="Телефон"
              onChange={this.handleInput}
            />
            <input
              name="group_number"
              type="text"
              placeholder="Гурух рақами"
              onChange={this.handleInput}
            />
            <button type="submit" className="mt-5">
              ҚИДИРИШ
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default Filter;
