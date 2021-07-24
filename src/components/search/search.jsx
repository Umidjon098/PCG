import React, { Component } from "react";
import SearchItem from "./search-item";
import "../../style/search.css";
import FilterPng from "../../image/icons/filter.png";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Preloader from "../../image/preloader.gif";
import FooterMenu from "../main-page/footer-menu";
import Filter from "../filter/filter";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessList: [],
      currentPage: 0,
      searchItem: "",
      number: "1",
      toggle_filter: false,
    };
  }

  componentDidMount() {
    this.getBusinessList();
  }
  getBusinessList = (number = 1) => {
    const url = "/profile/business/";
    axios(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        page: number,
      },
    }).then((response) => {
      this.setState({ businessList: response.data, currentPage: number });
    });
  };
  nextPagenate = () => {
    this.setState({ currentPage: this.state.currentPage + 1 }, () => {
      this.getBusinessList(this.state.currentPage);
    });
  };
  prevPagenate = () => {
    this.setState({ currentPage: this.state.currentPage - 1 }, () => {
      this.getBusinessList(this.state.currentPage);
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
      page: this.state.number,
    };
    axios(url, { headers, params: params }).then((response) => {
      this.setState({ businessList: response.data });
    });
  };
  callBackFilter = (data) => {
    this.setState({ businessList: data, toggle_filter: false });
  };
  render() {
    let countPage = [];
    for (let i = 1; i <= this.state.businessList.num_pages; i++) {
      countPage.push(i);
    }
    return (
      <div>
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
          {this.state.businessList === undefined ? (
            <div className="preloader">
              <img src={Preloader} alt="" />
            </div>
          ) : (
            this.state.businessList.map((data) => {
              return (
                <SearchItem
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
          <div className="pagination-box">
            <Pagination>
              <Pagination.Prev onClick={this.prevPagenate} />
              {countPage.map((count) => {
                return (
                  <Pagination.Item
                    onClick={() => this.getBusinessList(count)}
                    key={count}
                  >
                    {count}
                  </Pagination.Item>
                );
              })}
              <Pagination.Next onClick={this.nextPagenate} />
            </Pagination>
          </div>
        </div>
        <FooterMenu active={"search"} />
      </div>
    );
  }
}

export default Search;
