import React, { Component } from "react";
import FilterPng from "../../image/icons/filter.png";
import axios from "axios";
import Preloader from "../../image/preloader.gif";
import Filter from "../filter/filter";
import UserSearchItem from "./user-search-item";
import UserFilter from "../filter/user-filter";
class UserSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      searchItem: "",
      toggle_filter: false,
      empty: false,
    };
  }
  componentDidMount() {
    this.getUsersList();
  }

  getUsersList = () => {
    const url = "/profile/users/";
    axios(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((response) => {
      this.setState({ usersList: response.data });
    });
  };
  handleSearchInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  search = (e) => {
    e.preventDefault();
    let url = "/profile/users/";
    const headers = {
      Authorization: `Bearer  ${localStorage.getItem("accessToken")}`,
    };
    const params = {
      full_name: this.state.searchItem,
    };
    axios(url, { headers, params: params }).then((response) => {
      this.setState({ usersList: response.data });
      if (response.data.length === 0) {
        this.setState({ empty: true });
      }
    });
  };
  callBackFilter = (data) => {
    this.setState({ usersList: data, toggle_filter: false });
    if (data.length === 0) {
      this.setState({ empty: true });
    }
  };
  render() {
    return (
      <div>
        <div className="swipe">
          <i className="fas fa-angle-double-left"></i>
          <span> Bizneslarni izlash</span>
        </div>
        <div
          className={
            this.state.toggle_filter
              ? "user-filter-side toggle"
              : "user-filter-side"
          }
        >
          <UserFilter callBackFilter={this.callBackFilter} />
        </div>
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
            <div className="filter">
              <div
                onClick={() =>
                  this.setState({ toggle_filter: !this.state.toggle_filter })
                }
              >
                <img src={FilterPng} alt="" />
              </div>
            </div>
          </div>
          {this.state.usersList.length === 0 ? (
            this.state.empty ? (
              <p className="text-center mt-3">Natija Topilmadi</p>
            ) : (
              <div className="preloader">
                <img src={Preloader} alt="" />
              </div>
            )
          ) : (
            this.state.usersList.map((data) => {
              return (
                <UserSearchItem
                  key={data.id}
                  id={data.id}
                  image={data.image}
                  first_name={data.first_name}
                  last_name={data.last_name}
                  phone_number={data.phone_number}
                  birthday={data.birthday}
                  email={data.email}
                  telegram={data.telegram}
                  instagram={data.instagram}
                  facebook={data.facebook}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default UserSearch;
