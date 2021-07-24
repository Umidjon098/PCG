import React, { Component } from "react";
import FavoriteNewsItem from "./favorite-news";
import Preloader from "../../image/preloader.gif";
import FavoriteDiscount from "./favorite-discount";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.favoruitList.news === undefined) {
      return (
        <div className="preloader">
          <img src={Preloader} alt="" />
        </div>
      );
    } else {
      return (
        <div>
          {this.props.favoruitList.news.results.map((data) => {
            return (
              <div key={data.id}>
                <FavoriteNewsItem
                  key={data.id}
                  id={data.id}
                  img={data.font_photo}
                  title={data.title}
                  text={data.font_text}
                  views={data.views}
                  created_at={data.created_at}
                  is_favorite={data.is_favorite}
                />
              </div>
            );
          })}
          {this.props.favoruitList.discount.results.length === 0 ? (
            <div></div>
          ) : (
            <FavoriteDiscount favoriteDiscount={this.props.favoruitList} />
          )}
        </div>
      );
    }
  }
}

export default Favorite;
