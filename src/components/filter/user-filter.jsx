import React, { Component } from "react";
import axios from "axios";
import Loader from "../../image/preloader.gif";

class UserFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couchingType: [],
      full_name: null,
      phone_number: null,
      group_number: null,
      coaching_type: null,
      coaching_number: null,
      event: false,
    };
  }
  componentDidMount() {
    this.getCouchingType();
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getCouchingType = () => {
    const url = "/profile/coaching-type/";
    axios(url).then((response) => {
      this.setState({ couchingType: response.data });
    });
  };
  filter = (e) => {
    this.setState({ event: true });
    e.preventDefault();
    let url = "/profile/users/";
    const headers = {
      Authorization: `Bearer  ${localStorage.getItem("accessToken")}`,
    };
    const params = {
      full_name: this.state.full_name,
      phone_number: this.state.phone_number,
      group_number: this.state.group_number,
      coaching_type: this.state.coaching_type,
      coaching_number: this.state.coaching_number,
    };
    axios(url, { headers, params: params }).then((response) => {
      this.setState({ event: false });
      this.props.callBackFilter(response.data, false);
    });
  };
  render() {
    return (
      <div className="filter-box">
        <section className="form-box">
          <div className={this.state.event ? "waiting-event" : "d-none"}>
            <img src={Loader} alt="" />
          </div>
          <form onSubmit={this.filter}>
            <input
              name="full_name"
              type="text"
              placeholder="Ф И Ш"
              onChange={this.handleInput}
            />
            <select name="coaching_type" onChange={this.handleInput}>
              <option>тури</option>
              {this.state.couchingType.map((data) => {
                return (
                  <option key={data.id} value={data.id}>
                    {data.name}
                  </option>
                );
              })}
            </select>
            <input
              name="phone_nunmber"
              type="number"
              placeholder="Телефон"
              onChange={this.handleInput}
            />
            <input
              name="coaching_number"
              type="text"
              placeholder="Коачинг рақами"
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

export default UserFilter;
