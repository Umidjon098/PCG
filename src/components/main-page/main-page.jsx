import React, { Component } from "react";
import "../../style/main.css";
import Carousel from "./carousel";
import { Pagination } from "react-bootstrap";
import News from "./news";
import Sidebar from "../sidebar/sidebar";
import Discount from "./discount";
import Favorite from "./favorite";
import FooterMenu from "./footer-menu";
import axios from "axios";
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      toggle: false,
      display: "news",
      List: [],
      favoruitList: [],
      favorite: false,
      searchItem: "",
      number: "1",
      currentPage: 0,
    };
  }
  componentDidMount() {
    this.getNews();
  }

  handleSearchInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // callBackNewsID = (id) => {
  //   console.log(id);
  //   this.setState({ id });
  // };

  componentDidUpdate() {
    if (this.state.favorite) {
      this.getNews();
    }
  }

  getNews = (number = 1) => {
    const url = "/posts/news/";
    axios(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      params: {
        page: number,
      },
    }).then((response) => {
      this.setState({ List: response.data, currentPage: number });
    });
  };
  updateNews = (data) => {
    this.props.getCallBackNewsID(data);

    this.setState({ favorite: true });
    const url = `/posts/news/${data.id}`;
    let params = {};
    if (data.is_favorite) {
      params = {
        update_type: "delete",
      };
    } else {
      params = {
        update_type: "add",
      };
    }
    const headers = {
      Authorization: `Bearer  ${localStorage.getItem("accessToken")}`,
    };
    axios.put(url, params, { headers }).then((response) => {
      this.setState({ favorite: false });
    });
  };
  getDiscount = (number = 1) => {
    const url = "/posts/discount/";
    axios(url, {
      headers: {
        Authorization: "Bearer  " + localStorage.getItem("accessToken"),
      },
      params: {
        page: number,
      },
    }).then((response) => {
      this.setState({ List: response.data, currentPage: number });
    });
  };
  getFavoruit = () => {
    const url = "/posts/favorite/";
    axios(url, {
      headers: {
        Authorization: "Bearer  " + localStorage.getItem("accessToken"),
      },
      //  params: {
      //    page: number,
      //  },
    }).then((response) => {
      this.setState({ favoruitList: response.data });
    });
  };
  search = (e) => {
    e.preventDefault();
    let url = "";
    if (this.state.display === "news") {
      url = "/posts/news/";
    }
    if (this.state.display === "discount") {
      url = "/posts/discount/";
    }
    const headers = {
      Authorization: `Bearer  ${localStorage.getItem("accessToken")}`,
    };
    const params = {
      search: this.state.searchItem,
      page: this.state.number,
    };
    axios(url, { headers, params: params }).then((response) => {
      this.setState({ List: response.data });
    });
  };
  sidebarToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  callBackToggle = (toggle) => {
    this.setState({ toggle });
  };
  onDisplayNews = () => {
    this.setState({ display: "news" });
    this.getNews();
    this.setState({ List: [] });
  };
  onDisplayDiscount = () => {
    this.setState({ display: "discount" });
    this.getDiscount();
    this.setState({ List: [] });
  };
  onDisplayFavorite = () => {
    this.setState({ display: "select" });
    this.getFavoruit();
  };

  nextPagenate = () => {
    this.setState({ currentPage: this.state.currentPage + 1 }, () => {
      if (this.state.display === "news") {
        this.getNews(this.state.currentPage);
      } else {
        this.getDiscount(this.state.currentPage);
      }
    });
  };
  prevPagenate = () => {
    this.setState({ currentPage: this.state.currentPage - 1 }, () => {
      if (this.state.display === "news") {
        this.getNews(this.state.currentPage);
      } else {
        this.getDiscount(this.state.currentPage);
      }
    });
  };
  getCallBacDiscountID = (id) => {
    this.props.getCallBacDiscountID(id);
  };
  render() {
    let countPage = [];
    for (let i = 1; i <= this.state.List.num_pages; i++) {
      countPage.push(i);
    }
    return (
      <div>
        <Sidebar
          toggle={this.state.toggle}
          callBackToggle={this.callBackToggle}
        />
        <div className="main-box">
          <div className="page-nav">
            <div className="menu-btn" onClick={this.sidebarToggle}>
              <i className="fas fa-bars"></i>
            </div>
            <div className="page-title">Асосий саҳифа</div>
          </div>
          <div className="search-box">
            <form onSubmit={this.search}>
              <input
                type="text"
                placeholder="Search"
                name="searchItem"
                onChange={this.handleSearchInput}
              />
              <button type="submit" className="d-none"></button>
            </form>
            <i className="fas fa-search"></i>
          </div>
          <div className="navbar">
            <div onClick={this.onDisplayNews}>
              <div
                className={
                  this.state.display === "news"
                    ? "navbar-item active"
                    : "navbar-item"
                }
              >
                <div className="icon">
                  <i className="far fa-newspaper"></i>
                </div>
                <div className="title">Янгиликлар</div>
              </div>
            </div>
            <div onClick={this.onDisplayDiscount}>
              <div
                className={
                  this.state.display === "discount"
                    ? "navbar-item active"
                    : "navbar-item"
                }
              >
                <div className="icon">
                  <i className="fas fa-gift"></i>
                </div>
                <div className="title">Акциялар</div>
              </div>
            </div>
            <div onClick={this.onDisplayFavorite}>
              <div
                className={
                  this.state.display === "select"
                    ? "navbar-item active"
                    : "navbar-item"
                }
              >
                <div className="icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="title">Танланганлар</div>
              </div>
            </div>
          </div>
          <Carousel />
          <div className={this.state.display === "news" ? "" : "d-none"}>
            <News news={this.state.List} callBackNewsID={this.updateNews} />
          </div>
          <div className={this.state.display === "discount" ? "" : "d-none"}>
            <Discount
              getCallBacDiscountID={this.getCallBacDiscountID}
              discount={this.state.List}
            />
          </div>
          <div className={this.state.display === "select" ? "" : "d-none"}>
            <Favorite favoruitList={this.state.favoruitList} />
          </div>
          <div
            className={
              this.state.List.count === 0 ? "d-none" : "pagination-box"
            }
          >
            <Pagination>
              <Pagination.Prev onClick={this.prevPagenate} />
              {countPage.map((count) => {
                return (
                  <Pagination.Item
                    onClick={() =>
                      this.state.display === "news"
                        ? this.getNews(count)
                        : this.getDiscount(count)
                    }
                    key={count}
                  >
                    {count}
                  </Pagination.Item>
                );
              })}
              <Pagination.Next onClick={this.nextPagenate} />
            </Pagination>
          </div>
          <FooterMenu active={"home"} />
        </div>
      </div>
    );
  }
}

export default MainPage;
