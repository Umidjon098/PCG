import React, { Component } from "react";
import SearchItem from "./search-item";
import "../../style/search.css";
import FilterPng from "../../image/icons/filter.png";
import axios from "axios";
import Preloader from "../../image/preloader.gif";
import Filter from "../filter/filter";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessList: [],
      searchItem: "",
      toggle_filter: false,
      empty: false,
    };
  }

  componentDidMount() {
    this.getBusinessList();
  }
  getBusinessList = () => {
    const url = "/profile/business/";
    axios(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((response) => {
      this.setState({ businessList: response.data });
    });
  };

  handleSearchInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  search = (e) => {
    e.preventDefault();
    let url = "/profile/business/";
    const headers = {
      Authorization: `Bearer  ${localStorage.getItem("accessToken")}`,
    };
    const params = {
      search: this.state.searchItem,
    };
    axios(url, { headers, params: params }).then((response) => {
      this.setState({ businessList: response.data });
      if (response.data.length === 0) {
        this.setState({ empty: true });
      }
    });
  };
  callBackFilter = (data) => {
    this.setState({ businessList: data, toggle_filter: false });
  };
  render() {
    return (
      <div>
        <div className="swipe">
          <span>Foydalanuvchilarni izlash</span>
          <i className="fas fa-angle-double-right"></i>
        </div>
        <div
          className={
            this.state.toggle_filter ? "filter-side toggle" : "filter-side"
          }
        >
          <Filter callBackFilter={this.callBackFilter} />
        </div>
        <div className="search-box">
          <div className="search-input">
            <div className="input">
              <form onSubmit={this.search}>
                <input
                  type="text"
                  placeholder="Biznes nomini kiriting"
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
          {this.state.businessList.length === 0 ? (
            this.state.empty ? (
              <p className="text-center mt-3">Natija Topilmadi</p>
            ) : (
              <div className="preloader">
                <img src={Preloader} alt="" />
              </div>
            )
          ) : (
            this.state.businessList.map((data) => {
              return (
                <SearchItem
                  id={data.id}
                  key={data.id}
                  logo={data.logo}
                  name={data.name}
                  region_name={data.region_name}
                  activity_type_name={data.activity_type_name}
                  user_full_name={data.user_full_name}
                  user_phone_number={data.user_phone_number}
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

export default Search;
