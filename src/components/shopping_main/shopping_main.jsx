import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../style/shoping.css";
import axios from "axios";
import AudioItem from "./audio-item";
import Books from "./books";
import VideoItem from "./video-item";
import Sidebar from "../sidebar/sidebar";
class ShoppingMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: null,
      number: 1,
      List: [],
      page: "audio",
      toggle: false,
      basketList: {},
    };
  }
  componentDidMount() {
    this.getCourses(this.state.number, this.state.page);
    this.basketList();
  }
  handleSearchInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  getCourseDetail = async (tip, id) => {
    const url = `/courses/cs/${id}/`;
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    };
    var params = {};
    if (tip === "video") {
      params = {
        tip: "VIDEO",
      };
    } else if (tip === "book") {
      params = {
        tip: "BOOK",
      };
    }
    await axios({
      method: "get",
      url: url,
      headers: headers,
      params: params,
    })
      .then((response) => {
        this.props.getCallBackList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  search = (e) => {
    e.preventDefault();
    this.getCourses(this.state.number, this.state.page);
  };
  getCourses = async (number = 1, tip) => {
    this.setState({ page: tip, List: [] });
    const url = `/courses/cs/`;
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    };
    var params = {};
    if (tip === "audio") {
      params = {
        tip: "AUDIO",
        search: this.state.searchItem,
        page: number,
      };
    } else if (tip === "video") {
      params = {
        tip: "VIDEO",
        search: this.state.searchItem,
        page: number,
      };
    } else if (tip === "book") {
      params = {
        tip: "BOOK",
        search: this.state.searchItem,
        page: number,
      };
    }
    await axios({
      method: "get",
      url: url,
      headers: headers,
      params: params,
    })
      .then((response) => {
        this.setState({ List: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  buyProduct = async (id, data_tip) => {
    const url = `/courses/cs/${id}/`;
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    };
    let data = {};
    if (data_tip === "add") {
      data = {
        update_type: "add",
      };
    } else {
      data = {
        update_type: "delete",
      };
    }
    await axios.patch(url, data, { headers: headers }).then(() => {
      this.getCourses(this.state.number, this.state.page);
      this.basketList();
    });
  };
  callBackToggle = (toggle) => {
    this.setState({ toggle });
  };
  sidebarToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  basketList = () => {
    const url = "/courses/cs/basket/";
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    };
    axios(url, {
      headers: headers,
    }).then((response) => {
      console.log(response.data);
      this.setState({ basketList: response.data });
    });
  };

  render() {
    const { page, List } = this.state;
    return (
      <div>
        <Sidebar
          toggle={this.state.toggle}
          callBackToggle={this.callBackToggle}
        />
        <div className="shopping-box">
          <div className="shoping-nav">
            <div className="top-nav">
              <div className="burger-bot" onClick={this.sidebarToggle}>
                <span></span>
                <span></span>
              </div>
              <div className="logo">PCG</div>
              <Link to="/buyproduct" className="cart">
                <i className="fas fa-shopping-cart"></i>
                <small>
                  {this.state.basketList.data === undefined
                    ? 0
                    : this.state.basketList.data.length}
                </small>
              </Link>
            </div>
            <div className="nav-links">
              <div
                className={page === "audio" ? "active" : ""}
                onClick={() => this.getCourses(this.state.number, "audio")}
              >
                Аудио курс
              </div>
              <div
                className={page === "video" ? "active" : ""}
                onClick={() => this.getCourses(this.state.number, "video")}
              >
                Видео курс
              </div>
              <div
                className={page === "book" ? "active" : ""}
                onClick={() => this.getCourses(this.state.number, "book")}
              >
                Китоблар
              </div>
            </div>
          </div>
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
          {page === "audio" ? (
            <AudioItem List={List} buyProduct={this.buyProduct} />
          ) : page === "video" ? (
            <VideoItem
              getCourseDetail={this.getCourseDetail}
              List={List}
              buyProduct={this.buyProduct}
            />
          ) : page === "book" ? (
            <Books getCourseDetail={this.getCourseDetail} List={List} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default ShoppingMain;
