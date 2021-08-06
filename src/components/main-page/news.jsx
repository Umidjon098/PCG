import React, { Component } from "react";
import NewsItem from "./news-item";
import Preloader from "../../image/preloader.gif";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onCallBackId = (id) => {
    this.props.callBackNewsID(id);
  };
  render() {
    if (this.props.news.results === undefined) {
      return (
        <div className="preloader">
          <img src={Preloader} alt="" />
        </div>
      );
    } else if (this.props.news.results.length === 0) {
      return <p className="text-center mt-3">Natija Topilmadi</p>;
    } else {
      return (
        <div className="mt-4">
          {this.props.news.results.map((data) => {
            return (
              <NewsItem
                onCallBackId={this.onCallBackId}
                key={data.id}
                id={data.id}
                img={data.font_photo}
                title={data.title}
                text={data.font_text}
                views={data.views}
                created_at={data.created_at}
                is_favorite={data.is_favorite}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default News;
